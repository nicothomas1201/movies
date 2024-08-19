import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { MouseEvent } from 'react'

interface Props {
  onDelete: (e: MouseEvent) => void
}

export function MovieCardOptions({ onDelete }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <DotsVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-[100px]">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuGroup>
          {/* <DropdownMenuItem>Rate</DropdownMenuItem> */}
          {/* <DropdownMenuSeparator /> */}
          <DropdownMenuItem className="text-red-600" onClick={onDelete}>
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
