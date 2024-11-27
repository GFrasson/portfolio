import { getUserDatabase } from '@/database'
import { NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ user: string }> },
) {
  const { user } = await params

  const userDatabase = getUserDatabase(user)

  if (!userDatabase) {
    return Response.json(
      {
        message: 'user not found',
      },
      {
        status: 400,
      },
    )
  }

  const { projects } = userDatabase

  return Response.json(projects)
}
