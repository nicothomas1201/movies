import { Header } from '@/components/Header'

export function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-screen gap-5">
      <Header />

      <main className="flex-1">{children}</main>
    </div>
  )
}
