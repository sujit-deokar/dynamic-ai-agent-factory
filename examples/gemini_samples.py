import os
from google import genai
from dotenv import load_dotenv
# Load environment variables from .env
load_dotenv()
# Retrieve the API key
api_key = os.getenv("GEMINI_API_KEY")
def main():
    # Pass API key to the client
    client = genai.Client(api_key=api_key)
    # Create a chat session
    chat = client.chats.create(model="gemini-2.5-flash")
    while True:
        user_input = input("You: ").strip()
        if not user_input or user_input.lower() in ("exit", "quit"):
            print("Goodbye!")
            break
        response = chat.send_message(user_input)
        print("Gemini:", response.text)

if __name__ == "__main__":
    main()
