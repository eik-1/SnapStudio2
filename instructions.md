# SnapStudio AI Project Instructions

## Project Overview

This project aims to create an AI image gen app, allowing users to generate AI-enhanced photos of themselves based on custom prompts. The app will use the Flux Dev LoRA model from Replicate to create personalized AI models for each user and generate images based on their inputs.

## Tech Stack

- Frontend: React, Tailwind CSS, Shadcn UI
- Backend: Node.js, Express.js
- Database and Authentication: Appwrite
- AI Model: Replicate (Flux Dev LoRA model)
- Image Processing: Sharp
- State Management: Redux Toolkit
- API Requests: Axios
- Form Handling: React Hook Form

## Core Functionalities

1. User Authentication

   - Sign up
   - Log in
   - Log out
   - Password reset

2. User Profile Management

   - Update profile information
   - View generation history
   - View models

3. AI Model Creation

   - Upload multiple images of user's face
   - Process and validate the image
   - Create a personalized AI model using Flux Dev LoRA

4. Image Generation

   - Input custom prompts
   - Generate AI-enhanced images based on the user's model and prompt
   - Display generated images

5. Image Management
   - Save generated images
   - Delete generated images
   - Share images (optional)

## Current File Structure

snapstudio-ai/
│
├── frontend/
│ ├── public/
│ │ ├── index.html
│ │ └── favicon.ico
│ ├── src/
│ │ ├── components/
│ │ │ ├── Auth/
│ │ │ │ ├── Login.jsx
│ │ │ │ ├── Signup.jsx
│ │ │ │ └── PasswordReset.jsx
│ │ │ ├── Profile/
│ │ │ │ ├── ProfileView.jsx
│ │ │ │ └── ProfileEdit.jsx
│ │ │ ├── ImageGeneration/
│ │ │ │ ├── ImageInput.jsx
│ │ │ │ └── ImageDisplay.jsx
│ │ │ └── Shared/
│ │ │ ├── Header.jsx
│ │ │ └── Footer.jsx
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ └── NotFound.jsx
│ │ ├── styles/
│ │ │ ├── tailwind.css
│ │ │ └── shadcn.css
│ │ ├── store/
│ │ │ └── index.js
│ │ ├── hooks/
│ │ │ └── useAuth.js
│ │ ├── utils/
│ │ │ └── api.js
│ │ ├── App.jsx
│ │ └── index.js
│ └── package.json
│
├── backend/
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── profileController.js
│ │ ├── imageController.js
│ | └── modelController.js
| ├── services/
│ | └── replicateService.js
│ ├── models/
│ │ ├── User.js
│ │ └── Image.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── profileRoutes.js
│ │ ├── imageRoutes.js
| │ └── modelRoutes.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── config/
│ │ └── appwriteConfig.js
│ ├── utils/
│ │ └── imageProcessing.js
│ ├── app.js
│ └── server.js
