"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingMessenger() {
  return (
    <a
      href="https://m.me/cjcmusicph"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on Messenger"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#C4853A] hover:bg-[#A06B2A] text-white font-semibold pl-4 pr-5 py-3 rounded-full shadow-lg shadow-black/30 transition-all duration-300 hover:scale-105 cursor-pointer group"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm hidden sm:inline">Chat with us</span>
    </a>
  );
}
