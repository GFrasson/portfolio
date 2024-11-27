import { getUserDatabase } from '@/database'
import { NextRequest } from 'next/server'

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

  return Response.json(project)
}
