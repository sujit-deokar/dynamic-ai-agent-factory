# 🧠 Dynamic AI Agent Factory

Create AI agents on demand. Provide a task — get a custom GPT-4-powered agent with the right tools, memory, and personality.

## 🚀 Features
- Dynamic agent generation from user input
- Plug-and-play tool registry (e.g., PDF summarizer, CSV analyzer, code executor)
- Personality & memory customization
- Built using LangChain and OpenAI GPT-4
- Extensible architecture for advanced use cases

## 🔧 Tech Stack
- Python 3.10+
- LangChain
- OpenAI GPT-4
- Streamlit or FastAPI
- dotenv (for secrets)
- Optional: Pinecone/Redis (for memory), pandas, PyPDF2, etc.

## 📦 Install

```bash
git clone https://github.com/yourusername/dynamic-agent-factory.git
cd dynamic-agent-factory
pip install -r requirements.txt
cp .env.example .env  # Add your OpenAI API key here
