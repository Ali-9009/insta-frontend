export default function Loader() {
  return (
    <div className="w-full rounded-2xl bg-base-card border border-base-line overflow-hidden">
      <div className="flex flex-col sm:flex-row animate-pulse">
        <div className="sm:w-64 w-full h-64 shrink-0 bg-base-panel" />
        <div className="flex-1 p-6 flex flex-col gap-5">
          <div className="space-y-2">
            <div className="h-3 w-24 bg-base-panel rounded" />
            <div className="h-4 w-3/4 bg-base-panel rounded" />
            <div className="h-4 w-1/2 bg-base-panel rounded" />
          </div>
          <div className="space-y-2.5">
            <div className="h-12 bg-base-panel rounded-xl" />
            <div className="h-12 bg-base-panel rounded-xl" />
            <div className="h-12 bg-base-panel rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
