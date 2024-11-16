import { Box, Flex, Link } from '@radix-ui/themes'
import { HomeIcon } from '@radix-ui/react-icons'

export function NavigationBar() {
  return (
    <Box width="100%" p="3">
      <Flex justify="between">
        <Box>
          <Flex gap="6">
            <HomeIcon width={24} height={24} />
            <Link href="/">Sobre</Link>
            <Link href="/projects">Projetos</Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
