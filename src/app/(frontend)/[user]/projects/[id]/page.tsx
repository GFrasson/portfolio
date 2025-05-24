import { Box, Heading, Section, Text } from '@radix-ui/themes'

import { NextImage } from '@/app/(frontend)/components/NextImage'
import { Carousel } from '@/app/(frontend)/components/Carousel'
import styles from './styles.module.css'
import { Suspense } from 'react'
import { ProjectSkeletonLoading } from './components/ProjectSkeletonLoading'
import purify from 'isomorphic-dompurify'
import { getProject } from '@/utils/get-project'
import { getProjectsIds } from '@/utils/get-project-ids'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Media } from '@/app/(frontend)/components/Media'
import { RichText } from '@payloadcms/richtext-lexical/react'


interface Params {
  user: string
  id: string
}

export const dynamicParams = false

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  
  const userResult = await payload.find({
    collection: 'users',
    select: {
      slug: true
    }
  });

  const projectsResult = await payload.find({
    collection: 'projects',
    depth: 1,
    pagination: false,
  });

  return projectsResult.docs?.map(project => {
    const userSlug = userResult.docs?.find(user => user.id === project.author);
    if (!userSlug) {
      return {}
    }

    return {
      user: userSlug,
      id: String(project.id)
    }
  });
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<Params>
}) {
  const { id, user } = await params
  const payload = await getPayload({ config: configPromise })

  const projectDoc = await payload.find({
    collection: 'projects',
    depth: 1,
    pagination: false,
    select: {
      title: true,
      description: true,
      images: true
    },
    where: {
      id: {
        equals: Number(id)
      }
    },
    limit: 1
  });

  if (projectDoc.docs.length === 0) {
    throw new Error("Projeto não encontrado");
  }

  const project = projectDoc.docs[0];

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
          <Heading mb="2">{project.title}</Heading>

          <RichText className={styles.description} data={project.description} />

          <Box className={styles.carouselBox} mb="6">
            <Carousel>
              {project.images?.map((image, index) => (
                <Media
                  key={index}
                  className={styles.image}
                  resource={image.image}
                  width={1500}
                  height={1500}
                />
              ))}
            </Carousel>
          </Box>
        </Suspense>
      </div>
    </Section>
  )
}
