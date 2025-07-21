"use client";

import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#110820] via-[#160c2c] to-[#160c2c] p-4">
      <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        {messages.map((message) => (
          <div key={message.id} className="whitespace-pre-wrap">
            {message.role === "user" ? "User: " : "AI: "}
            {message.parts.map((part, i) => {
              switch (part.type) {
                case "text":
                  return <div key={`${message.id}-${i}`}>{part.text}</div>;
              }
            })}
          </div>
        ))}

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 mt-8 bg-white/10 dark:bg-zinc-900/80 rounded-xl shadow-lg px-4 py-3 backdrop-blur-md"
        >
          <input
            className="flex-1 bg-transparent outline-none text-base text-white dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 px-2 py-2"
            value={input}
            placeholder="Type your message..."
            onChange={handleInputChange}
            autoFocus
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold shadow hover:from-purple-700 hover:to-indigo-700 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
