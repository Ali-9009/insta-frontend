export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-base-line">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-faint">
        <p>Built for personal use. Only download content you have the right to save.</p>
        <p>© {new Date().getFullYear()} Grabgram</p>
      </div>
    </footer>
  );
}
