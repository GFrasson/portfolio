import { Section } from '@radix-ui/themes'
import styles from './styles.module.css'

import { NextImage } from '@/app/components/NextImage'
import ProjectImage from '@/../public/projects/estacao-m/implantacao.webp'
import { Carousel } from '@/app/components/Carousel'

export default function ProjectDetails() {
  return (
    <Section size="4">
      <div className={styles.pageContainer}>
        <h1>Project details</h1>

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
      </div>
    </Section>
  )
}
