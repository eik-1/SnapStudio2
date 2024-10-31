import {Client} from 'appwrite';

const client = new Client()
.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
.setProject(import.meta.env.VITE_APPWRITE_PROJECTID)

export {client} 