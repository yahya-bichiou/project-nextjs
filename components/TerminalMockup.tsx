"use client";
import { Copy } from "lucide-react";
import { useState } from "react";

export function TerminalMockup({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden font-mono">
      <div className="flex items-center px-4 py-2 bg-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <button
          onClick={copyToClipboard}
          className="ml-auto text-gray-400 hover:text-white"
          aria-label="Copy to clipboard"
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
      <div className="p-4 text-white">
        <pre className="whitespace-pre-wrap">{children}</pre>
        {copied && (
          <div className="text-xs text-gray-500 mt-2">Copied to clipboard!</div>
        )}
      </div>
    </div>
  );
}
