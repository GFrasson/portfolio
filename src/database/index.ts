import { readJsonFile } from '@/utils/read-json'
import path from 'path'

interface Project {
  id: number
  title: string
  summary: string
  description: string
  images: string[]
}

interface User {
  about: string
  projects: Project[]
}

interface Database {
  [name: string]: User
}

function getFullDatabase(): Database {
  return readJsonFile(path.resolve('./src/database/data.json')) as Database
}

export function getUserDatabase(user: string): User | null {
  const database = getFullDatabase()
  if (!Object.prototype.hasOwnProperty.call(database, user)) {
    return null
  }

  return database[user]
}
