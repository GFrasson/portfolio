import { getUserDatabase } from '@/database'
import { marked } from 'marked'

interface Project {
  id: number
  title: string
  summary: string
  description: string
  images: string[]
}

export async function getProject(
  id: string,
  user: string,
): Promise<Project | null> {
  const projectId = Number(id)
  if (Number.isNaN(projectId)) {
    return null
  }

  const userDatabase = getUserDatabase(user)
  if (!userDatabase) {
    return null
  }

  const { projects } = userDatabase

  const project = projects.find((project) => project.id === projectId) ?? null
  if (!project) {
    return null
  }

  const description = project.description.join('\n')
  const response = {
    ...project,
    description: await marked.parse(description),
  } as Project

  return response
}
