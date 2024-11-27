import { Heading, Skeleton, Text } from '@radix-ui/themes'

export function ProjectSkeletonLoading() {
  return (
    <Skeleton loading={true}>
      <Heading></Heading>
      <img src="" alt="" />
      <Text></Text>
    </Skeleton>
  )
}
