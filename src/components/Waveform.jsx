const BAR_HEIGHTS = [40, 70, 100, 65, 90, 45, 80, 55, 95, 60, 75, 40];

export default function Waveform({ active = false, className = "" }) {
  return (
    <div className={`flex items-end gap-[3px] h-8 ${className}`} aria-hidden="true">
      {BAR_HEIGHTS.map((h, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full bg-duo-gradient origin-bottom ${
            active ? "animate-pulseBar" : ""
          }`}
          style={{
            height: `${h}%`,
            animationDelay: `${i * 0.07}s`,
            opacity: active ? undefined : 0.25,
            transform: active ? undefined : "scaleY(0.3)",
          }}
        />
      ))}
    </div>
  );
}
