import { Experience } from '../typings'

export const fetchExperiences = async () => {
  // try {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  //   )
  //   if (!res.ok) {
  //     throw new Error('Failed to fetch page info')
  //   }
  //   const data = await res.json()
  //   const experiences: Experience[] = data.pageInfo
  //   return experiences
  // } catch (error) {
  //   console.error(error)
  //   throw error
  // }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  )

  const data = await res.json()

  const experiences: Experience[] = data.experiences

  // console.log(experiences)

  return experiences
}
