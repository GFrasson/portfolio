import { Heading, Section, Text } from '@radix-ui/themes'

import { NextImage } from '@/app/components/NextImage'
import ProjectImage from '@/../public/projects/estacao-m/implantacao.webp'
import { Carousel } from '@/app/components/Carousel'
import styles from './styles.module.css'

export default function ProjectDetails() {
  return (
    <Section size="4">
      <div className={styles.pageContainer}>
        <Heading>Estação M</Heading>

        <Carousel>
          <NextImage
            className={styles.image}
            src={ProjectImage}
            width={1500}
            height={1500}
            alt="Imagem"
          />
          <NextImage
            className={styles.image}
            src={ProjectImage}
            width={1500}
            height={1500}
            alt="Imagem"
          />
          <NextImage
            className={styles.image}
            src={ProjectImage}
            width={1500}
            height={1500}
            alt="Imagem"
          />
        </Carousel>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          rerum alias, amet eum minima autem et sequi dolorum saepe aliquam enim
          debitis, adipisci necessitatibus unde corporis? Modi maiores maxime
          ipsa.
        </Text>
      </div>
    </Section>
  )
}
