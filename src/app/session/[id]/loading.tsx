export default function SessionLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Back button skeleton */}
      <div className="h-4 w-24 bg-gray-200 rounded" />

      {/* Header card skeleton */}
      <div className="card p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-5 w-16 bg-gray-200 rounded-full" />
          <div className="h-5 w-20 bg-gray-200 rounded-full" />
        </div>
        <div className="h-8 w-64 bg-gray-200 rounded" />
        <div className="h-4 w-48 bg-gray-200 rounded" />
        <div className="h-16 w-full bg-gray-100 rounded" />
        <div className="flex gap-4">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
          <div className="h-4 w-28 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Content grid skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Agenda skeleton */}
        <div className="lg:col-span-2 space-y-4">
          <div className="h-6 w-32 bg-gray-200 rounded" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card p-4 space-y-2">
              <div className="flex gap-4">
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="h-4 w-40 bg-gray-200 rounded" />
              </div>
              <div className="h-3 w-full bg-gray-100 rounded" />
            </div>
          ))}
        </div>

        {/* Sidebar skeleton */}
        <div className="space-y-4">
          <div className="card p-4 space-y-3">
            <div className="h-5 w-28 bg-gray-200 rounded" />
            {[1, 2].map((i) => (
              <div key={i} className="h-16 w-full bg-gray-100 rounded" />
            ))}
          </div>
          <div className="card p-4 h-48 bg-gray-50" />
        </div>
      </div>
    </div>
  );
}
