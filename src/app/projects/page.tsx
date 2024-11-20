import { Section, Flex } from '@radix-ui/themes'
import { PageScroll } from '../components/PageScroll'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import {
  DescriptionText,
  ProjectHeading,
  ProjectImage,
  ShowProjectButton,
  PageContainer,
  SeeMoreLink,
} from './styles'

import PrimaryImageSrc from '../../../public/projects/estacao-m/implantacao.webp'
import SecondaryImageSrc from '../../../public/projects/estacao-m/interior.webp'
import { StaticImageData } from 'next/image'
import { BeforePageButton } from './components/ChangePageButton/BeforePageButton'
import { NextPageButton } from './components/ChangePageButton/NextPageButton'

export interface Project {
  id: string
  title: string
  description: string
  primaryImageSrc: StaticImageData
  secondaryImageSrc: StaticImageData
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Estação M: módulo de apoio a mulheres no meio urbano',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum alias, amet eum minima autem et sequi dolorum saepe aliquam enim debitis, adipisci necessitatibus unde corporis? Modi maiores maxime ipsa.',
      primaryImageSrc: PrimaryImageSrc,
      secondaryImageSrc: SecondaryImageSrc,
    },
    {
      id: '2',
      title: 'Estação M: módulo de apoio a mulheres no meio urbano',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum alias, amet eum minima autem et sequi dolorum saepe aliquam enim debitis, adipisci necessitatibus unde corporis? Modi maiores maxime ipsa.',
      primaryImageSrc: PrimaryImageSrc,
      secondaryImageSrc: SecondaryImageSrc,
    },
    {
      id: '3',
      title: 'Estação M: módulo de apoio a mulheres no meio urbano',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum alias, amet eum minima autem et sequi dolorum saepe aliquam enim debitis, adipisci necessitatibus unde corporis? Modi maiores maxime ipsa.',
      primaryImageSrc: PrimaryImageSrc,
      secondaryImageSrc: SecondaryImageSrc,
    },
  ]

  return (
    <PageScroll disableScrollBar={true} pagesAmount={projects.length}>
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
