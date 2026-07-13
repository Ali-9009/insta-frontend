export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="relative w-9 h-9 shrink-0">
            <div className="absolute inset-0 rounded-xl bg-duo-gradient opacity-90" />
            <div className="absolute inset-[2px] rounded-[10px] bg-base-bg flex items-center justify-center">
              <span className="font-display font-700 text-sm bg-duo-gradient bg-clip-text text-transparent font-bold">
                G
              </span>
            </div>
          </div>
          <span className="font-display font-semibold text-lg tracking-tight text-ink">
            Grabgram
          </span>
        </div>
        <a
          href="#how-it-works"
          className="hidden sm:block text-sm text-ink-muted hover:text-ink transition-colors"
        >
          How it works
        </a>
      </div>
    </header>
  );
}
