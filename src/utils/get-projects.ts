import { getUserDatabase } from '@/database'

interface Project {
  id: number
  title: string
  summary: string
  description: string[]
  images: string[]
}

export function getProjects(user: string): Project[] {
  const userDatabase = getUserDatabase(user)
  if (!userDatabase) {
    return []
  }

  const { projects } = userDatabase
  return projects
}
