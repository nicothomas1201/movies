export function MovieCardSkeleton() {
  return (
    <div className="movie-card">
      <div className="rounded-full w-9 h-9 bg-muted"></div>

      <div className="flex flex-col flex-1 gap-2">
        <div className="w-full h-4 rounded bg-muted"></div>
        <div className="w-[80%] h-4 rounded bg-muted"></div>
      </div>
    </div>
  )
}
