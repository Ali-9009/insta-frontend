import { useState } from "react";
import Waveform from "./Waveform.jsx";

const EXAMPLE_URL = "https://www.instagram.com/reel/Cxxxxxxxxxx/";

export default function DownloadForm({ onResult, loading, setLoading, apiUrl }) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const trimmed = url.trim();
    if (!trimmed) {
      setError("Paste an Instagram link first.");
      return;
    }
    if (!/instagram\.com/i.test(trimmed)) {
      setError("That doesn't look like an Instagram link.");
      return;
    }

    setLoading(true);
    onResult(null);

    try {
      const res = await fetch(`${apiUrl}/api/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: trimmed }),
      });
      const json = await res.json();

      if (!res.ok || !json.success) {
        setError(json.message || "Couldn't process that link. Try another one.");
        setLoading(false);
        return;
      }

      onResult(json.data);
    } catch (err) {
      setError("Can't reach the server. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`relative flex flex-col sm:flex-row items-stretch gap-3 rounded-2xl p-2.5
        bg-base-panel border transition-shadow
        ${loading ? "border-violet-glow/40 shadow-glow" : "border-base-line"}`}
      >
        <div className="flex items-center gap-3 flex-1 px-3.5">
          <Waveform active={loading} className="hidden sm:flex shrink-0" />
          <input
            type="text"
            inputMode="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={EXAMPLE_URL}
            aria-label="Instagram link"
            className="w-full bg-transparent py-3.5 text-sm sm:text-base text-ink placeholder:text-ink-faint outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="shrink-0 rounded-xl bg-duo-gradient text-base-bg font-semibold px-6 py-3.5
          text-sm sm:text-base transition-transform active:scale-[0.98]
          disabled:opacity-60 disabled:cursor-not-allowed
          hover:brightness-110"
        >
          {loading ? "Fetching…" : "Get media"}
        </button>
      </div>
      {error && (
        <p role="alert" className="mt-3 text-sm text-amber-glow">
          {error}
        </p>
      )}
      <p className="mt-3 text-xs text-ink-faint">
        Works with Reels and Posts links directly. Story links need the server to have its own
        Instagram session configured — ask whoever runs this site if that's set up.
      </p>
    </form>
  );
}
