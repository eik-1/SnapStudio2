import {Client} from 'appwrite';

const client = new Client()
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject(import.meta.env.VITE_APPWRITE_PROJECTID)

export {client} 