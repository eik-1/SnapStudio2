import dotenv from "dotenv";

import { replicate } from "../configs/replicateConfig.js";

dotenv.config();

export async function trainOstrisModel(req, res) {
  try {
    const { modelName, triggerWord } = req.body;
    const zipBuffer = req.file.buffer;
    const username = process.env.USERNAME;
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
          autocaption: `A photo of ${triggerWord}`,
          input_images: zipBuffer,
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
    console.log("Training URL: ", training.id);
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

// async function getTrainingInfo() {
//   const id = "cstwhwbg79rm20cjmpyvfq6w2m";
//   console.log("Replicate API Token:", token);
//   try {
//     const response = await replicate.trainings.get(id, {
//       headers: { Authorization: `Token ${token}` },
//     });
//     console.log(response);
//   } catch (err) {
//     console.error("Error fetching training info:", err);
//   }
// }

// getTrainingInfo();

export async function runUserModel(req, res) {
  const { modelName, prompt } = req.body;
  const input = {
    /* Sample input */
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