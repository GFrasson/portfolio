import { Section, Flex, Heading, Text, Button } from '@radix-ui/themes'
import { PageScroll } from '../../components/PageScroll'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import styles from './styles.module.css'

import { BeforePageButton } from './components/ChangePageButton/BeforePageButton'
import { NextPageButton } from './components/ChangePageButton/NextPageButton'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Media } from '../../components/Media'
import { ImageMedia } from '../../components/Media/ImageMedia'

export interface Project {
  id: number
  title: string
  summary: string
  description: string[]
  images: string[]
}

interface Param {
  user: string
}

export const dynamicParams = false

export async function generateStaticParams() {
  return [{ user: 'brenda' }, { user: 'gabriel' }]
}

export default async function Projects({ params }: { params: Promise<Param> }) {
  const { user } = await params

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

  const projects = await payload.find({
    collection: 'projects',
    depth: 1,
    pagination: false,
    select: {
      title: true,
      summary: true,
      images: true
    },
    where: {
      author: {
        equals: userDoc.id
      }
    }
  })

  return (
    <PageScroll disableScrollBar={true} pagesAmount={projects.totalDocs}>
      {projects.docs.map((project, index) => (
        <Section key={project.id} size="4" height="100%" position="relative">
          <div className={styles.pageContainer}>
            <Flex
              direction="column"
              justify="between"
              height="100%"
              className={styles.content}
            >
              <Flex direction="column" gap="8" className={styles.text}>
                <Heading className={styles.projectHeading}>
                  {project.title}
                </Heading>
                <Text className={styles.descriptionText}>
                  {project.summary}
                </Text>
              </Flex>

              <Flex align="center" justify="center" my="4">
                {project.images && project.images.length > 0 && (
                  <ImageMedia
                    imgClassName={`${styles.projectImageSecondary} ${styles.projectImage}`}
                    width={1500}
                    height={1500}
                    resource={project.images[0].image}
                  />
                )}
                {project.images && project.images.length > 1 && (
                  <ImageMedia
                    imgClassName={`${styles.projectImage} ${styles.projectImagePrimary}`}
                    width={1500}
                    height={1500}
                    resource={project.images[1].image}
                    priority
                  />
                )}
              </Flex>

              <Flex direction="column" gap="5" className={styles.buttons}>
                <Link
                  href={`/${user}/projects/${project.id}`}
                  className={styles.seeMoreLink}
                >
                  <Button className={styles.showProjectButton}>
                    <Flex align="center" justify="center" gap="1">
                      Ver mais
                      <ArrowRightIcon />
                    </Flex>
                  </Button>
                </Link>

                <Flex align="center" justify="start" gap="2">
                  {index > 0 && <BeforePageButton />}

                  {index < projects.totalDocs - 1 && (
                    <NextPageButton pagesAmount={projects.totalDocs} />
                  )}
                </Flex>
              </Flex>
            </Flex>
          </div>
        </Section>
      ))}
    </PageScroll>
  )
}
