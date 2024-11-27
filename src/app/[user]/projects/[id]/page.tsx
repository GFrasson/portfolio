import { Heading, Section, Text } from '@radix-ui/themes'

import { NextImage } from '@/app/components/NextImage'
import { Carousel } from '@/app/components/Carousel'
import styles from './styles.module.css'
import { Suspense } from 'react'
import { ProjectSkeletonLoading } from './components/ProjectSkeletonLoading'

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

export async function generateStaticParams() {
  const brendaProjectIds: number[] = await fetch(
    `http://localhost:3000/api/brenda/project-ids`,
  ).then((res) => res.json())

  const gabrielProjectIds: number[] = await fetch(
    `http://localhost:3000/api/gabriel/project-ids`,
  ).then((res) => res.json())

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

async function getProject(params: Params): Promise<Project> {
  const { id, user } = await params
  const res = await fetch(`http://localhost:3000/api/${user}/projects/${id}`)
  const project = await res.json()

  return project
}

export default async function ProjectDetails({ params }: { params: Params }) {
  const project = await getProject(params)

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
          <Carousel>
            {project.images.map((image, index) => (
              <NextImage
                key={index}
                className={styles.image}
                src={image}
                width={1500}
                height={1500}
                alt="Imagem"
              />
            ))}
          </Carousel>
          <Text>{project.description}</Text>
        </Suspense>
      </div>
    </Section>
  )
}
