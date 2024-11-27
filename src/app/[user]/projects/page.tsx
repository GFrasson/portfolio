import { Section, Flex, Heading, Text, Button } from '@radix-ui/themes'
import { PageScroll } from '../../components/PageScroll'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import styles from './styles.module.css'

import { BeforePageButton } from './components/ChangePageButton/BeforePageButton'
import { NextPageButton } from './components/ChangePageButton/NextPageButton'
import Link from 'next/link'
import { NextImage } from '../../components/NextImage'

export interface Project {
  id: number
  title: string
  summary: string
  description: string
  images: string[]
}

interface Param {
  user: string
}

export const dynamicParams = false

export async function generateStaticParams() {
  return [{ user: 'brenda' }, { user: 'gabriel' }]
}

async function getProjects(params: Param): Promise<Project[]> {
  const user = (await params).user
  const res = await fetch(`http://localhost:3000/api/${user}/projects`)
  const projects = await res.json()

  return projects
}

export default async function Projects({ params }: { params: Param }) {
  const projects: Project[] = await getProjects(params)

  return (
    <PageScroll disableScrollBar={true} pagesAmount={projects.length}>
      {projects.map((project, index) => (
        <Section key={project.id} size="4" height="100%" position="relative">
          <div className={styles.pageContainer}>
            <Flex direction="column" justify="between" height="100%">
              <Flex direction="column" gap="8">
                <Heading className={styles.projectHeading}>
                  {project.title}
                </Heading>
                <Text className={styles.descriptionText}>
                  {project.summary}
                </Text>
              </Flex>

              <Flex direction="column" gap="5">
                <Link
                  href={`/${params.user}/projects/${project.id}`}
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
                  {index > 0 && <BeforePageButton currentPage={index} />}

                  {index < projects.length - 1 && (
                    <NextPageButton
                      currentPage={index}
                      pagesAmount={projects.length}
                    />
                  )}
                </Flex>
              </Flex>
            </Flex>

            {project.images.length > 0 && (
              <NextImage
                className={`${styles.projectImageSecondary} ${styles.projectImage}`}
                src={project.images[0]}
                width={1500}
                height={1500}
                alt="Imagem principal"
              />
            )}
            {project.images.length > 1 && (
              <NextImage
                className={`${styles.projectImagePrimary} ${styles.projectImage}`}
                src={project.images[1]}
                width={1500}
                height={1500}
                alt="Imagem secundária"
              />
            )}
          </div>
        </Section>
      ))}
    </PageScroll>
  )
}
