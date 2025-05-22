import { Heading, Skeleton, Text } from '@radix-ui/themes'

export function ProjectSkeletonLoading() {
  return (
    <Skeleton loading={true}>
      <Heading></Heading>
      <div></div>
      <Text></Text>
    </Skeleton>
  )
}
