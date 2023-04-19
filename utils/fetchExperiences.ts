import { Experience } from '../typings'

export const fetchExperiences = async () => {
  const res = await fetch(
    `https://k3f4xr2d.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'experience'%5D%7B%0A%20%20...%2C%0A%20%20technologies%5B%5D-%3E%0A%7D`
  )
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  // )

  const data = await res.json()
  // console.log(data)

  const experiences: Experience[] = data.result

  return experiences
}
