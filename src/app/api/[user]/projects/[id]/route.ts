import { getUserDatabase } from '@/database'
import { NextRequest } from 'next/server'
import { marked } from 'marked'

interface ProjectResponse {
  id: number
  title: string
  summary: string
  description: string
  images: string[]
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ user: string; id: string }> },
) {
  const { user, id } = await params

  const projectId = Number(id)
  if (Number.isNaN(projectId)) {
    return Response.json(
      {
        message: 'invalid project id',
      },
      {
        status: 400,
      },
    )
  }

  const userDatabase = getUserDatabase(user)

  if (!userDatabase) {
    return Response.json(
      {
        message: 'user not found',
      },
      {
        status: 404,
      },
    )
  }

  const { projects } = userDatabase

  const project = projects.find((project) => project.id === projectId) ?? null

  if (!project) {
    return Response.json(null)
  }

  const description = project.description.join('\n')
  const response = {
    ...project,
    description: await marked.parse(description),
  } as ProjectResponse

  return Response.json(response)
}
