# SnapStudio - AI Image Generation Platform

SnapStudio is a web application that allows users to generate personalized AI-enhanced photos using custom prompts. The platform uses the Flux Dev LoRA model to create personalized AI models for each user.

## Features

- **User Authentication**

  - Email/password signup and login
  - Secure session management
  - Profile management

- **Custom AI Model Training**

  - Upload multiple photos of yourself
  - Model training using Flux Dev LoRA
  - Training status monitoring

- **Image Generation**

  - Generate images using natural language prompts
  - Real-time generation status updates
  - Multiple image generation support
  - Save generated images to collection

- **Image Management**
  - View generated images
  - Save favorites to collection
  - Share images (coming soon)

## Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Shadcn UI Components
- Appwrite SDK (Auth)

### Backend

- Node.js
- Express.js
- Appwrite (Database & Buckets)
- Replicate API (AI Model)
