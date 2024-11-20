'use client'

import { Section, Flex, Text } from '@radix-ui/themes'
import { PageScroll } from '../components/PageScroll'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowRightIcon,
} from '@radix-ui/react-icons'
import {
  DescriptionText,
  ChangePageButton,
  ProjectHeading,
  ProjectImage,
  ShowProjectButton,
  PageContainer,
  SeeMoreLink,
} from './styles'
import { useState } from 'react'

interface Project {
  id: string
  title: string
  description: string
  primaryImageSrc: string
  secondaryImageSrc: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'Estação M: módulo de apoio a mulheres no meio urbano',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum alias, amet eum minima autem et sequi dolorum saepe aliquam enim debitis, adipisci necessitatibus unde corporis? Modi maiores maxime ipsa.',
      primaryImageSrc:
        'https://plus.unsplash.com/premium_photo-1668333186821-21e0d8fd5b0c?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      secondaryImageSrc:
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '2',
      title: 'Estação M: módulo de apoio a mulheres no meio urbano',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum alias, amet eum minima autem et sequi dolorum saepe aliquam enim debitis, adipisci necessitatibus unde corporis? Modi maiores maxime ipsa.',
      primaryImageSrc:
        'https://plus.unsplash.com/premium_photo-1668333186821-21e0d8fd5b0c?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      secondaryImageSrc:
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '3',
      title: 'Estação M: módulo de apoio a mulheres no meio urbano',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum alias, amet eum minima autem et sequi dolorum saepe aliquam enim debitis, adipisci necessitatibus unde corporis? Modi maiores maxime ipsa.',
      primaryImageSrc:
        'https://plus.unsplash.com/premium_photo-1668333186821-21e0d8fd5b0c?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      secondaryImageSrc:
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ])
  const [currentPage, setCurrentPage] = useState(0)

  function goToNextPage() {
    if (currentPage >= projects.length - 1) {
      return
    }

    setCurrentPage((state) => state + 1)

    window.scrollBy({
      top: window.innerHeight,
    })
  }

  function goToBeforePage() {
    if (currentPage <= 0) {
      return
    }

    setCurrentPage((state) => state - 1)

    window.scrollBy({
      top: -window.innerHeight,
    })
  }

  return (
    <PageScroll
      disableScrollBar={true}
      onGoToNextPage={goToNextPage}
      onGoToBeforePage={goToBeforePage}
    >
      {projects.map((project, index) => (
        <Section key={project.id} size="4" height="100%" position="relative">
          <PageContainer>
            <Flex direction="column" justify="between" height="100%">
              <Flex direction="column" gap="8">
                <ProjectHeading>{project.title}</ProjectHeading>
                <DescriptionText>{project.description}</DescriptionText>
              </Flex>

              <Flex direction="column" gap="5">
                <SeeMoreLink href={`/projects/${project.id}`}>
                  <ShowProjectButton>
                    <Flex align="center" justify="center" gap="1">
                      Ver mais
                      <ArrowRightIcon />
                    </Flex>
                  </ShowProjectButton>
                </SeeMoreLink>

                <Flex align="center" justify="start" gap="2">
                  {index > 0 && (
                    <ChangePageButton
                      variant="surface"
                      onClick={goToBeforePage}
                    >
                      <Flex align="center" justify="center" gap="1">
                        <Text>Anterior</Text>
                        <ArrowUpIcon />
                      </Flex>
                    </ChangePageButton>
                  )}

                  {index < projects.length - 1 && (
                    <ChangePageButton variant="surface" onClick={goToNextPage}>
                      <Flex align="center" justify="center" gap="1">
                        <Text>Próximo</Text>
                        <ArrowDownIcon />
                      </Flex>
                    </ChangePageButton>
                  )}
                </Flex>
              </Flex>
            </Flex>

            <ProjectImage
              type="secondary"
              src={project.secondaryImageSrc}
              width={400}
              height={300}
              alt="Imagem principal"
            />
            <ProjectImage
              type="primary"
              src={project.primaryImageSrc}
              width={700}
              height={500}
              alt="Imagem secundária"
            />
          </PageContainer>
        </Section>
      ))}
    </PageScroll>
  )
}
