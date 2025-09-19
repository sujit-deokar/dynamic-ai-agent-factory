import React, { useState } from "react";

const GeminiChat: React.FC = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setResponse(data.response || data.error || "No response");
    } catch (err) {
      setResponse("Error connecting to backend.");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", padding: 20, border: "1px solid #eee", borderRadius: 8 }}>
      <h2>Gemini Chat</h2>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
          disabled={loading}
        />
        <button type="submit" disabled={loading || !input.trim()} style={{ width: "100%", padding: 8 }}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {response && (
        <div style={{ marginTop: 20, background: "#f9f9f9", padding: 10, borderRadius: 4 }}>
          <strong>Gemini:</strong> {response}
        </div>
      )}
    </div>
  );
};

export default GeminiChat;
