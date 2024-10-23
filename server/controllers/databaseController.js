import dotenv from "dotenv";
import { ID, Query } from "appwrite";
dotenv.config();

import { databases } from "../configs/appwriteConfig.js";

export async function createModel(
  id,
  modelName,
  triggerWord,
  status,
  modelId,
  modelVersion
) {
  const response = await databases.createDocument(
    process.env.APPWRITE_DATABASE_ID,
    process.env.APPWRITE_MODELS_COLLECTION_ID,
    ID.unique(),
    {
      user_id: id,
      model_name: modelName,
      trigger_word: triggerWord,
      status: status,
      model_id: modelId,
      model_version: modelVersion,
    }
  );

  console.log("Model created: ", response);
}

export async function getModel(userId) {
  const response = await databases.listDocuments(
    process.env.APPWRITE_DATABASE_ID,
    process.env.APPWRITE_MODELS_COLLECTION_ID,
    [Query.equal("user_id", userId)]
  );
  return response;
}

export async function updateModel() {}
