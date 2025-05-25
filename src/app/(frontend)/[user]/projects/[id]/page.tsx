import { Box, Heading, Section, Text } from '@radix-ui/themes'

import { Carousel } from '@/app/(frontend)/components/Carousel'
import styles from './styles.module.css'
import { Suspense } from 'react'
import { ProjectSkeletonLoading } from './components/ProjectSkeletonLoading'
import purify from 'isomorphic-dompurify'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { ImageMedia } from '@/app/(frontend)/components/Media/ImageMedia'


interface Params {
  user: string
  id: string
}

// export const dynamicParams = true;

export const revalidate = 60;  // 1 minute

export async function generateStaticParams() {
  return [];
  // const payload = await getPayload({ config: configPromise });
  
  // const userResult = await payload.find({
  //   collection: 'users',
  //   select: {
  //     slug: true
  //   }
  // });

  // const projectsResult = await payload.find({
  //   collection: 'projects',
  //   depth: 1,
  //   pagination: false,
  // });

  // return (projectsResult.docs?.map(project => {
  //   const userSlug = userResult.docs?.find(user => user.id === project.author);
  //   if (!userSlug) {
  //     return undefined;
  //   }

  //   return {
  //     user: userSlug.slug,
  //     id: String(project.id)
  //   }
  // }) ?? []).filter(project => project !== undefined);
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<Params>
}) {
  function sanitizeHTML(html: string) {
    return purify.sanitize(html, { USE_PROFILES: { html: true } })
  }

  const { id, user } = await params
  const payload = await getPayload({ config: configPromise })
  
  const userResult = await payload.find({
    collection: 'users',
    where: {
      slug: {
        equals: user,
      },
    },
  })

  const userDoc = userResult?.docs?.[0]
  if (!userDoc) {
    throw new Error('Usuário não encontrado')
  }

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
      and: [
        {
          id: {
            equals: Number(id)
          }
        },
        {
          author: {
            equals: userDoc.id
          }
        },
        {
          published: {
            equals: true
          }
        }
      ]
    },
    limit: 1
  });

  if (projectDoc.docs.length === 0) {
    return (
      <Section size="4">
        <div className={styles.pageContainer}>
          <Text>O projeto não foi encontrado</Text>
        </div>
      </Section>
    )
  }

  const project = projectDoc.docs[0];

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
                <ImageMedia
                  key={index}
                  imgClassName={styles.image}
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
