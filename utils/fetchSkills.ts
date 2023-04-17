import { Skill } from '../typings'

export const fetchSkills = async () => {
  // try {
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
  //   if (!res.ok) {
  //     throw new Error('Failed to fetch page info')
  //   }
  //   const data = await res.json()
  //   const skills: Skill[] = data.pageInfo
  //   return skills
  // } catch (error) {
  //   console.error(error)
  //   throw error
  // }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)

  const data = await res.json()

  const skills: Skill[] = data.skills

  // console.log(skills)

  return skills
}
