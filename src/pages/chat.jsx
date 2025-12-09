import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Base_Url from "../utils/constant";

const Chat = () => {
  const [Prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]); // store chat history
  const chatEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [Prompt]);

  // Send message to backend
  const sendMessage = async () => {
    if (!Prompt.trim()) return;

    const userMessage = Prompt;
    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);
    setPrompt(""); // clear input

    try {
      const res = await axios.post(
        Base_Url + "/user/chats",
        { question: userMessage },
        { withCredentials: true }
      );

      const aiReply = res?.data?.text || "No response";
      setMessages((prev) => [...prev, { type: "ai", text: aiReply }]);
    } catch (e) {
      const errorMsg = e?.response?.data?.message || e?.message;
      setMessages((prev) => [...prev, { type: "ai", text: `Error: ${errorMsg}` }]);
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  // Handle Enter key (Shift + Enter for new line)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#f7f7f8] font-sans">
      {/* HEADER */}
      <div className="p-4 text-center border-b border-gray-200 bg-white flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, Muhammad Atif Khan</h1>
        <p className="text-gray-500 mt-2 text-base max-w-md">
          I'm here to help you with anything — ask me anything anytime.
        </p>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 mb-24">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-md break-words ${
                msg.type === "user"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-800 border border-gray-300"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* INPUT AREA */}
   <form
  onSubmit={handleSubmit}
  className="p-4 bg-white border-t border-gray-200 flex items-center gap-2 fixed bottom-0 left-[24%] w-[75%] "
>
  <textarea
    ref={textareaRef}
    value={Prompt}
    onChange={(e) => setPrompt(e.target.value)}
    onKeyDown={handleKeyDown}
    placeholder="Type your message..."
    className="flex-1 resize-none rounded-2xl border border-gray-300 px-4 py-2 outline-none text-gray-800 placeholder-gray-500 min-h-[40px] max-h-40"
    rows={1}
  />
  <button
    type="submit"
    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl font-medium flex-shrink-0"
  >
    Send
  </button>
</form>

    </div>
  );
};

export default Chat;
