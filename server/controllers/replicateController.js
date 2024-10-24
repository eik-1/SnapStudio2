import dotenv from "dotenv";
import axios from "axios";
import FormData from "form-data";
import { replicate } from "../configs/replicateConfig.js";
import { createModel, getModel, updateModel } from "./databaseController.js";
import ApiResponse from "../utils/ApiResponse.js";

dotenv.config();

export async function trainOstrisModel(req, res) {
  try {
    const { modelName, userId, triggerWord } = req.body;
    const zipBuffer = req.file.buffer;

    /* Upload zip to Replicate's File API */
    const formData = new FormData();
    formData.append("content", zipBuffer, {
      filename: "images.zip",
      contentType: "application/zip",
    });
    const uploadResponse = await axios.post(
      "https://api.replicate.com/v1/files",
      formData,
      {
        headers: {
          Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
          ...formData.getHeaders(),
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      }
    );
    const fileUrl = uploadResponse.data.urls.get;
    console.log(fileUrl);

    const training = await replicate.trainings.create(
      "ostris",
      "flux-dev-lora-trainer",
      "29337367d801d93e9193dafd8fcfb5653eeacd841fe85db9118023fbb10ebed0",
      {
        destination: `eik-1/snapshot`,
        input: {
          steps: 1000,
          lora_rank: 16,
          optimizer: "adamw8bit",
          batch_size: 1,
          resolution: "512,768,1024",
          autocaption: true,
          input_images: fileUrl,
          trigger_word: triggerWord,
          learning_rate: 0.0004,
          wandb_project: "flux_train_replicate",
          wandb_save_interval: 100,
          caption_dropout_rate: 0.05,
          cache_latents_to_disk: false,
          wandb_sample_interval: 100,
        },
      }
    );
    console.log("Training started: ", training.status);
    console.log("Training ID: ", training.id);
    await createModel(
      userId,
      modelName,
      triggerWord,
      training.status,
      training.id,
      training.version
    );
    res.status(200).json(training);
  } catch (err) {
    console.log("Couldn't train the model. Error: ", err);
    res
      .status(500)
      .json({ error: "Couldn't train the model", details: err.message });
  }
}

/* OUTPUT: */
/*{
  "id": "zz4ibbonubfz7carwiefibzgga",
  "version": "3ae0799123a1fe11f8c89fd99632f843fc5f7a761630160521c4253149754523",
  "status": "starting",
  "input": {
    "text": "..."
  },
  "output": null,
  "error": null,
  "logs": null,
  "started_at": null,
  "created_at": "2023-03-28T21:47:58.566434Z",
  "completed_at": null
} */

export async function getTrainingStatus(req, res) 
{
  const { userId } = req.body;
  try {
    const model = await getModel(userId);
    const modelId = model.documents[0].model_id;
    const response = await replicate.trainings.get(modelId);
    res.status(200).json(new ApiResponse(200, "Training status", {status: response.status}));
  } catch (err) 
  {
    res.status(500).json(new ApiResponse(500, "Error getting training status", {error: err.message}));
  }
}

export async function runUserModel(req, res) {
  const { modelName, prompt } = req.body;
  const input = {

    prompt: prompt,
  };

  const username = process.env.USERNAME;

  try {
    const model = await replicate.models.get(username, modelName);
    const output = replicate.run(model, { input });
    console.log("Running your model. Please wait!");
    return output;
  } catch (err) {
    console.log("Couldn't run the model. Error: ", err);
  }
}
