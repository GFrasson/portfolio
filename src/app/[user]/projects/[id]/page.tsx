import { Box, Heading, Section, Text } from '@radix-ui/themes'

import { NextImage } from '@/app/components/NextImage'
import { Carousel } from '@/app/components/Carousel'
import styles from './styles.module.css'
import { Suspense } from 'react'
import { ProjectSkeletonLoading } from './components/ProjectSkeletonLoading'
import purify from 'isomorphic-dompurify'

interface Params {
  user: string
  id: string
}

interface Project {
  id: number
  title: string
  summary: string
  description: string
  images: string[]
}

export const dynamicParams = false

export async function generateStaticParams() {
  // const brendaProjectIds: number[] = await fetch(
  //   `${process.env.APP_ROUTE}/api/brenda/project-ids`,
  // ).then((res) => res.json())

  // const gabrielProjectIds: number[] = await fetch(
  //   `${process.env.APP_ROUTE}/api/gabriel/project-ids`,
  // ).then((res) => res.json())

  const brendaProjectIds = Array.from({ length: 5 }, (x, i) => i + 1)
  const gabrielProjectIds = Array.from({ length: 0 }, (x, i) => i + 1)

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

async function getProject(params: Promise<Params>): Promise<Project> {
  const { id, user } = await params
  const res = await fetch(`${process.env.APP_ROUTE}/api/${user}/projects/${id}`)
  const project = await res.json()

  return project
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<Params>
}) {
  const project = await getProject(params)

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
