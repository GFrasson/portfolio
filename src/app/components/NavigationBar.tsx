import { Box, Flex } from '@radix-ui/themes'
import { HomeIcon } from '@radix-ui/react-icons'
import { NavItems } from './NavItems'

export function NavigationBar() {
  return (
    <Box width="100%" py="3" px="5">
      <Flex justify="between">
        <Box>
          <Flex gap="5" align="center">
            <HomeIcon width={24} height={24} />
            <NavItems />
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
