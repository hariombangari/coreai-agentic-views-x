import { useState } from "react";
import type { IHostData } from "../types";

interface LoggerProps {
  hostData?: IHostData;
  incomingData?: Record<string, unknown>;
}

export function Logger({ hostData, incomingData }: LoggerProps) {
  const [hostDataCopied, setHostDataCopied] = useState(false);
  const [incomingDataCopied, setIncomingDataCopied] = useState(false);

  const copyToClipboard = (text: string, setCopied: (value: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mt-8 space-y-4">
      <div>
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-xs font-medium text-gray-500">Host Data</h3>
          <button 
            onClick={() => copyToClipboard(JSON.stringify(hostData, null, 2), setHostDataCopied)}
            className={`text-xs px-2 py-1 rounded transition-all duration-200 ${
              hostDataCopied 
                ? 'bg-green-100 text-green-700' 
                : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100'
            }`}
          >
            {hostDataCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="bg-gray-50 rounded-md p-2 max-h-32 overflow-auto">
          <pre className="text-[10px] text-gray-600 font-mono whitespace-pre-wrap">
            {JSON.stringify(hostData, null, 2)}
          </pre>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-xs font-medium text-gray-500">Incoming Data</h3>
          <button 
            onClick={() => copyToClipboard(JSON.stringify(incomingData, null, 2), setIncomingDataCopied)}
            className={`text-xs px-2 py-1 rounded transition-all duration-200 ${
              incomingDataCopied 
                ? 'bg-green-100 text-green-700' 
                : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100'
            }`}
          >
            {incomingDataCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="bg-gray-50 rounded-md p-2 max-h-32 overflow-auto">
          <pre className="text-[10px] text-gray-600 font-mono whitespace-pre-wrap">
            {JSON.stringify(incomingData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
} 