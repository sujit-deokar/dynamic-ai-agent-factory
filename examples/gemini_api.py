import os
from fastapi import FastAPI, Request
from pydantic import BaseModel
from google import genai
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or specify your frontend URL for more security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class ChatRequest(BaseModel):
    message: str

client = genai.Client(api_key=api_key)
chat = client.chats.create(model="gemini-2.5-flash")

@app.post("/chat")
def chat_endpoint(request: ChatRequest):
    user_input = request.message.strip()
    if not user_input:
        return {"error": "Empty message."}
    response = chat.send_message(user_input)
    return {"response": response.text}
