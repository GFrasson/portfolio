import { Button, DropdownMenu, Flex, Text } from '@radix-ui/themes'
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
            <Flex gap="2" align="center">
              <ReaderIcon />
              <Text>Sobre</Text>
            </Flex>
          </DropdownMenuItem>
        </DropdownMenuLink>
        <DropdownMenuLink href="/projects">
          <DropdownMenuItem>
            <Flex gap="2" align="center">
              <Pencil1Icon />
              <Text>Projetos</Text>
            </Flex>
          </DropdownMenuItem>
        </DropdownMenuLink>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  )
}
