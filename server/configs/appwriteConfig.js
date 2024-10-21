import { Client, Account, Databases } from "node-appwrite";
import dotenv from "dotenv";
dotenv.config();

const client = new Client();
const account = new Account(client);
const databases = new Databases(client);

const projectId = process.env.APPWRITE_PROJECTID;
const apiKey = process.env.APPWRITE_API_KEY;

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(projectId)
  .setKey(apiKey);

export { client, account, databases };
