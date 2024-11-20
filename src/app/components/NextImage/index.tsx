import Image, { ImageProps } from 'next/image'

export function NextImage(props: ImageProps) {
  return <Image {...props} alt={props.alt} />
}
