import { replicate } from "../configs/replicateConfig.js";

export async function trainOstrisModel(req, res) {
  try {
    const { modelName, triggerWord } = req.body;
    const zipBuffer = req.file.buffer;
    const training = await replicate.trainings.create(
      "ostris",
      "flux-dev-lora-trainer",
      "29337367d801d93e9193dafd8fcfb5653eeacd841fe85db9118023fbb10ebed0",
      {
        destination: "eik-1/snapshot",
        input: {
          steps: 1000,
          lora_rank: 16,
          optimizer: "adamw8bit",
          batch_size: 1,
          resolution: "512,768,1024",
          autocaption: true,
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
    res
      .status(200)
      .json({ message: "Training started", status: training.status });
  } catch (err) {
    console.log("Couldn't train the model. Error: ", err);
    res
      .status(500)
      .json({ error: "Couldn't train the model", details: err.message });
  }
}

export async function runUserModel(req, res) {
  const prompt = req.prompt;
  let model;
  const input = {
    /* Sample input */
    prompt: prompt,
  };
  try {
    const output = replicate.run(model, { input });
    console.log("Running your model. Please wait!");
    return output;
  } catch (err) {
    console.log("Couldn't run the model. Error: ", err);
  }
}
