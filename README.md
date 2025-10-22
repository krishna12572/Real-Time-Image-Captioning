# Real-Time Image Captioning App

A web app that generates captions for uploaded images using a Vision-Language Model (BLIP).

## Features
- Upload images or use live webcam input
- Generate descriptive captions in real-time
- Save captions locally
- Optimized for intermediate-level understanding of AI/ML + cloud API

## Tech Stack
- Backend: Python, FastAPI, Transformers (BLIP)
- Frontend: React, Axios
- Optional: AWS/Azure deployment

## Getting Started

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows
pip install -r requirements.txt
uvicorn app:app --reload
