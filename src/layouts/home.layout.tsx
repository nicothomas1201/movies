export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid w-screen h-screen place-content-center">
      {children}
    </div>
  )
}
