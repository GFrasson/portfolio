import { readJsonFile } from '@/utils/read-json'
import path from 'path'

interface Project {
  id: number
  title: string
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

export function getUserDatabase(user: string): User | null {
  const database = readJsonFile(
    path.resolve('./src/database/data.json'),
  ) as Database

  if (!Object.prototype.hasOwnProperty.call(database, user)) {
    return null
  }

  return database[user]
}
