import dotenv from "dotenv";
import { ID, Query } from "node-appwrite";
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
  try {
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
  } catch (err) {
    console.log("Error creating model: ", err);
  }
}

export async function getModel(userId) {
  const databaseId = process.env.APPWRITE_DATABASE_ID;
  const collectionId = process.env.APPWRITE_MODELS_COLLECTION_ID;
  const query = Query.equal("user_id", userId);
  try {
    const response = await databases.listDocuments(databaseId, collectionId, [
      query,
    ]);
    return response;
  } catch (err) {
    throw err;
  }
}

export async function updateModel(userId, status) {
  try {
    const model = await getModel(userId);
    const modelId = model.documents[0].$id;
    const response = await databases.updateDocument(
      process.env.APPWRITE_DATABASE_ID,
      process.env.APPWRITE_MODELS_COLLECTION_ID,
      modelId,
      {
        status: status,
      }
    );
    return response;
  } catch (err) {
    throw err;
  }
}

export async function deleteModel(userId) {
  try {
    const model = await getModel(userId);
    const modelId = model.documents[0].$id;
    await databases.deleteDocument(
      process.env.APPWRITE_DATABASE_ID,
      process.env.APPWRITE_MODELS_COLLECTION_ID,
      modelId
    );
  } catch (err) {
    throw err;
  }
}
