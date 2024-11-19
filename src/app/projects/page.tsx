'use client'

import { Section, Container } from '@radix-ui/themes'
import { PageScroll } from '../components/PageScroll'
import { ProjectImage } from './components/ProjectImage'

export default function Projects() {
  return (
    <PageScroll disableScrollBar={true}>
      <Section size="4" position="relative">
        <Container>
          <h1>Projects</h1>

          <ProjectImage
            type="secondary"
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
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
        </Container>
      </Section>
      <Section size="4" position="relative">
        <Container>
          <h1>Projects 2</h1>

          <ProjectImage
            type="secondary"
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
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
        </Container>
      </Section>
      <Section size="4" position="relative">
        <Container>
          <h1>Projects 3</h1>

          <ProjectImage
            type="secondary"
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
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
        </Container>
      </Section>
    </PageScroll>
  )
}
