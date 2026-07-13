import { useState } from "react";
import Header from "./components/Header.jsx";
import DownloadForm from "./components/DownloadForm.jsx";
import ResultCard from "./components/ResultCard.jsx";
import Loader from "./components/Loader.jsx";
import Footer from "./components/Footer.jsx";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

const STEPS = [
  { n: "01", title: "Paste the link", body: "Copy a Reel, Post, or Story URL straight from the Instagram app or site." },
  { n: "02", title: "We resolve it", body: "Our server pulls the highest quality video it can find, plus a clean audio track." },
  { n: "03", title: "Pick your format", body: "Download in HD, in original quality, or grab just the audio as MP3." },
];

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 mx-auto w-full max-w-3xl px-5 sm:px-8 pt-6 sm:pt-14 pb-20 flex flex-col items-center">
        <div className="text-center mb-10 animate-floatSlow">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-glow font-semibold mb-3">
            No app. No sign-up.
          </p>
          <h1 className="font-display font-semibold text-3xl sm:text-5xl leading-tight tracking-tight text-ink">
            Save any Instagram video,
            <br />
            <span className="bg-duo-gradient bg-clip-text text-transparent">exactly how you want it.</span>
          </h1>
          <p className="mt-4 text-ink-muted text-sm sm:text-base max-w-md mx-auto">
            Drop a Reel, Post, or Story link below. Get HD, original quality, or just the audio — in seconds.
          </p>
        </div>

        <div className="w-full max-w-xl">
          <DownloadForm onResult={setResult} loading={loading} setLoading={setLoading} apiUrl={API_URL} />
        </div>

        <div className="w-full max-w-xl mt-8">
          {loading && <Loader />}
          {!loading && result && <ResultCard data={result} apiUrl={API_URL} />}
        </div>

        <section id="how-it-works" className="w-full mt-24 scroll-mt-10">
          <h2 className="font-display font-semibold text-xl text-ink mb-8 text-center">
            How it works
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <div key={step.n} className="rounded-xl border border-base-line bg-base-panel p-5">
                <span className="font-display text-sm text-amber-glow font-semibold">{step.n}</span>
                <h3 className="mt-2 font-medium text-ink text-sm">{step.title}</h3>
                <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
