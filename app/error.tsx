'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-01 text-txt-01 p-8">
      <h2 className="text-2xl font-serif mb-4">系統發生錯誤</h2>
      <p className="mb-8 font-sans opacity-60 text-center max-w-md">
        數位架構出現意外擾動。我們已記錄此錯誤並將進行修復。
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 border border-white/10 hover:border-white/30 transition-all font-mono text-sm tracking-widest"
      >
        [ 重試連線 ]
      </button>
    </div>
  );
}
