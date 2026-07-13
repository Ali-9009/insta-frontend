const DOWNLOAD_OPTIONS = [
  { key: "hd", label: "Download HD", sub: "Best available quality", type: "hd" },
  { key: "original", label: "Download original quality", sub: "Uncompressed source, when available", type: "original" },
  { key: "audio", label: "Download audio", sub: "Extracted as MP3", type: "audio" },
];

const CONTENT_LABEL = {
  post: "Post / Reel",
  story: "Story",
};

export default function ResultCard({ data, apiUrl }) {
  if (!data) return null;

  const { title, author, cover, sourceUrl, formats, contentType } = data;

  function buildDownloadUrl(type) {
    const params = new URLSearchParams({
      sourceUrl,
      type,
      filename: `grabgram-${author?.nickname || "instagram"}-${type}`.replace(/\s+/g, "_"),
    });
    if (type === "hd") params.set("formatId", formats.hd);
    if (type === "original") params.set("formatId", formats.original);
    return `${apiUrl}/api/download?${params.toString()}`;
  }

  return (
    <div className="w-full rounded-2xl bg-base-card border border-base-line shadow-card overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-64 w-full shrink-0 bg-black/40 flex items-center justify-center relative">
          {cover ? (
            <img
              src={cover}
              alt={`Preview for ${title}`}
              className="w-full h-64 sm:h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center text-ink-faint text-sm">
              No preview
            </div>
          )}
          {contentType && (
            <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wide font-semibold bg-black/60 backdrop-blur px-2 py-1 rounded-md text-ink">
              {CONTENT_LABEL[contentType] || contentType}
            </span>
          )}
        </div>

        <div className="flex-1 p-5 sm:p-6 flex flex-col gap-5">
          <div>
            <p className="text-xs uppercase tracking-wide text-violet-glow font-semibold mb-1">
              @{author?.nickname || "unknown"}
            </p>
            <h3 className="font-display font-semibold text-ink text-base sm:text-lg leading-snug line-clamp-2">
              {title}
            </h3>
          </div>

          <div className="flex flex-col gap-2.5">
            {DOWNLOAD_OPTIONS.map((opt) => (
              <a
                key={opt.key}
                href={buildDownloadUrl(opt.type)}
                download
                className="group flex items-center justify-between rounded-xl border border-base-line px-4 py-3 transition-colors hover:border-violet-glow/50 hover:bg-white/[0.03] text-ink"
              >
                <span>
                  <span className="block text-sm font-medium">{opt.label}</span>
                  <span className="block text-xs text-ink-muted">{opt.sub}</span>
                </span>
                <span className="shrink-0 rounded-lg w-8 h-8 flex items-center justify-center text-xs font-bold bg-duo-gradient text-base-bg group-hover:scale-105 transition-transform">
                  ↓
                </span>
              </a>
            ))}
          </div>

          <p className="text-xs text-ink-faint -mt-2">
            Downloads are assembled fresh on click, so this may take a few seconds
            longer to start than a typical download — that's the file actually
            being fetched and merged server-side, not a stall.
          </p>
        </div>
      </div>
    </div>
  );
}
