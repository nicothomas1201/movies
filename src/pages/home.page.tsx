import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { HomeLayout } from '@/layouts'

export function HomePage() {
  return (
    <HomeLayout>
      <div className="w-[350px]">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight scroll-m-20 lg:text-4xl">
          Discover your next favorite movie
        </h1>

        <div className="flex gap-2">
          <Input type="text" placeholder="Write your top 3 movies..." />
          <Button>Search</Button>
        </div>
      </div>
    </HomeLayout>
  )
}
