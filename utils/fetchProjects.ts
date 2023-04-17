import { Project } from '../typings'

export const fetchProjects = async () => {
  // try {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  //   )
  //   if (!res.ok) {
  //     throw new Error('Failed to fetch page info')
  //   }
  //   const data = await res.json()
  //   const projects: Project[] = data.pageInfo
  //   return projects
  // } catch (error) {
  //   console.error(error)
  //   throw error
  // }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)

  const data = await res.json()

  const projects: Project[] = data.projects

  // console.log(projects)

  return projects
}
