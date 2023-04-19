import { Skill } from '../typings'

export const fetchSkills = async () => {
  const res = await fetch(
    `https://k3f4xr2d.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'skill'%5D%0A`
  )
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)

  const data = await res.json()

  const skills: Skill[] = data.result

  // console.log(skills)

  return skills
}
