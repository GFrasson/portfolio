import fs from 'fs'

export function readJsonFile(filePath: string): object {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  try {
    const jsonData = JSON.parse(fileContent)
    return jsonData
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    throw new Error('Error parsing file')
  }
}
