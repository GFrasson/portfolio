import { Button, DropdownMenu, Flex, Text } from '@radix-ui/themes'
import {
  HamburgerMenuIcon,
  Pencil1Icon,
  // ReaderIcon,
} from '@radix-ui/react-icons'

import styles from './styles.module.css'
import { UserRouterLink } from '../UserRouterLink'

export function NavigationBar() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.dropdownMenuTrigger}>
        <Button variant="soft">
          <HamburgerMenuIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className={styles.dropdownMenuContent}>
        {/* <UserRouterLink route="/about" className={styles.dropdownMenuLink}>
          <DropdownMenu.Item className={styles.dropdownMenuItem}>
            <Flex gap="2" align="center">
              <ReaderIcon />
              <Text>Sobre</Text>
            </Flex>
          </DropdownMenu.Item>
        </UserRouterLink> */}
        <UserRouterLink route="/projects" className={styles.dropdownMenuLink}>
          <DropdownMenu.Item className={styles.dropdownMenuItem}>
            <Flex gap="2" align="center">
              <Pencil1Icon />
              <Text>Projetos</Text>
            </Flex>
          </DropdownMenu.Item>
        </UserRouterLink>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
