export function Wrapper({
  children,
  width = 900,
}: {
  children: React.ReactNode
  width?: number
}) {
  return (
    <div
      style={{ maxWidth: `${width}px` }}
      className="w-full h-full px-5 m-auto md:px-0"
    >
      {children}
    </div>
  )
}
