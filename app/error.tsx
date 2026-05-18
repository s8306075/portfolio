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
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-bg-01 text-txt-01">
      <h2 className="mb-4 font-serif text-2xl">系統發生錯誤</h2>
      <p className="max-w-md mb-8 font-sans text-center opacity-60">
        網站出現意外。我們已記錄此錯誤並將進行修復。
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 font-mono text-sm tracking-widest transition-all border border-white/10 hover:border-white/30"
      >
        [ 重試連線 ]
      </button>
    </div>
  );
}
