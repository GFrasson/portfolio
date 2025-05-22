import { Box, Heading, Section, Text } from '@radix-ui/themes'

import { NextImage } from '@/app/(frontend)/components/NextImage'
import { Carousel } from '@/app/(frontend)/components/Carousel'
import styles from './styles.module.css'
import { Suspense } from 'react'
import { ProjectSkeletonLoading } from './components/ProjectSkeletonLoading'
import purify from 'isomorphic-dompurify'
import { getProject } from '@/utils/get-project'
import { getProjectsIds } from '@/utils/get-project-ids'

interface Params {
  user: string
  id: string
}

export const dynamicParams = false

export async function generateStaticParams() {
  const brendaProjectIds = getProjectsIds('brenda')
  const gabrielProjectIds = getProjectsIds('gabriel')

  return [
    ...brendaProjectIds.map((projectId) => ({
      user: 'brenda',
      id: String(projectId),
    })),
    ...gabrielProjectIds.map((projectId) => ({
      user: 'gabriel',
      id: String(projectId),
    })),
  ]
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<Params>
}) {
  const { id, user } = await params
  const project = await getProject(id, user)

  function sanitizeHTML(html: string) {
    return purify.sanitize(html, { USE_PROFILES: { html: true } })
  }

  if (!project) {
    return (
      <Section size="4">
        <div className={styles.pageContainer}>
          <Text>O projeto não foi encontrado</Text>
        </div>
      </Section>
    )
  }

  return (
    <Section size="4">
      <div className={styles.pageContainer}>
        <Suspense fallback={<ProjectSkeletonLoading />}>
          <Heading>{project.title}</Heading>
          <Box className={styles.carouselBox} mb="6">
            <Carousel>
              {project.images.map((image, index) => (
                <NextImage
                  key={index}
                  className={styles.image}
                  src={image}
                  width={1500}
                  height={1500}
                  alt={`Imagem ${index}`}
                />
              ))}
            </Carousel>
          </Box>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: sanitizeHTML(project.description),
            }}
          />
        </Suspense>
      </div>
    </Section>
  )
}
