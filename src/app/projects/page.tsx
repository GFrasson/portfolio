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
} from './styles'

export default function Projects() {
  return (
    <PageScroll disableScrollBar={true}>
      <Section size="4" height="100%" position="relative">
        <PageContainer height="100%">
          <Flex direction="column" justify="between" height="100%">
            <Flex direction="column" gap="8">
              <ProjectHeading>
                Estação M: módulo de apoio a mulheres no meio urbano
              </ProjectHeading>

              <DescriptionText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit rerum alias, amet eum minima autem et sequi
                dolorum saepe aliquam enim debitis, adipisci necessitatibus unde
                corporis? Modi maiores maxime ipsa.
              </DescriptionText>
            </Flex>

            <Flex direction="column" gap="5">
              <ShowProjectButton>
                <Flex align="center" justify="center" gap="1">
                  <Text>Ver mais</Text>
                  <ArrowRightIcon />
                </Flex>
              </ShowProjectButton>

              <Flex align="center" justify="start" gap="2">
                <ChangePageButton variant="surface">
                  <Flex align="center" justify="center" gap="1">
                    <Text>Anterior</Text>
                    <ArrowUpIcon />
                  </Flex>
                </ChangePageButton>

                <ChangePageButton variant="surface">
                  <Flex align="center" justify="center" gap="1">
                    <Text>Próximo</Text>
                    <ArrowDownIcon />
                  </Flex>
                </ChangePageButton>
              </Flex>
            </Flex>
          </Flex>

          <ProjectImage
            type="secondary"
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={400}
            height={300}
            alt="build"
          />
          <ProjectImage
            type="primary"
            src="https://plus.unsplash.com/premium_photo-1668333186821-21e0d8fd5b0c?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={700}
            height={500}
            alt="build 2"
          />
        </PageContainer>
      </Section>
      <Section size="4" height="100%" position="relative">
        <PageContainer height="100%">
          <Flex direction="column" justify="between" height="100%">
            <Flex direction="column" gap="8">
              <ProjectHeading>
                Estação M: módulo de apoio a mulheres no meio urbano
              </ProjectHeading>

              <DescriptionText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit rerum alias, amet eum minima autem et sequi
                dolorum saepe aliquam enim debitis, adipisci necessitatibus unde
                corporis? Modi maiores maxime ipsa.
              </DescriptionText>
            </Flex>

            <Flex direction="column" gap="5">
              <ShowProjectButton>
                <Flex align="center" justify="center" gap="1">
                  <Text>Ver mais</Text>
                  <ArrowRightIcon />
                </Flex>
              </ShowProjectButton>

              <Flex align="center" justify="start" gap="2">
                <ChangePageButton variant="surface">
                  <Flex align="center" justify="center" gap="1">
                    <Text>Anterior</Text>
                    <ArrowUpIcon />
                  </Flex>
                </ChangePageButton>

                <ChangePageButton variant="surface">
                  <Flex align="center" justify="center" gap="1">
                    <Text>Próximo</Text>
                    <ArrowDownIcon />
                  </Flex>
                </ChangePageButton>
              </Flex>
            </Flex>
          </Flex>

          <ProjectImage
            type="secondary"
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={400}
            height={300}
            alt="build"
          />
          <ProjectImage
            type="primary"
            src="https://plus.unsplash.com/premium_photo-1668333186821-21e0d8fd5b0c?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={700}
            height={500}
            alt="build 2"
          />
        </PageContainer>
      </Section>
    </PageScroll>
  )
}
