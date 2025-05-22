import { getUserDatabase } from '@/database'

export function getProjectsIds(user: string): number[] {
  const userDatabase = getUserDatabase(user)
  if (!userDatabase) {
    return []
  }

  const { projects } = userDatabase
  const projectIds = projects.map((project) => project.id)

  return projectIds
}
