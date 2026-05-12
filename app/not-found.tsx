import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-01 text-txt-01">
      <h2 className="text-2xl font-serif mb-4">404 - 找不到頁面</h2>
      <p className="mb-8 font-sans opacity-60">指定的路徑不存在或已被移除。</p>
      <Link 
        href="/" 
        className="px-6 py-3 border border-white/10 hover:border-white/30 transition-all font-mono text-sm tracking-widest"
      >
        [ 回至首頁 ]
      </Link>
    </div>
  );
}
