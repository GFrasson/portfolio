import { Button, DropdownMenu } from '@radix-ui/themes'
import {
  HamburgerMenuIcon,
  Pencil1Icon,
  ReaderIcon,
} from '@radix-ui/react-icons'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLink,
  DropdownMenuTrigger,
} from './styles'

export function NavigationBar() {
  return (
    <DropdownMenu.Root>
      <DropdownMenuTrigger>
        <Button variant="soft">
          <HamburgerMenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLink href="/">
          <DropdownMenuItem>
            <ReaderIcon />
            Sobre
          </DropdownMenuItem>
        </DropdownMenuLink>
        <DropdownMenuLink href="/projects">
          <DropdownMenuItem>
            <Pencil1Icon />
            Projetos
          </DropdownMenuItem>
        </DropdownMenuLink>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  )
}
