import { Social } from '../typings'

export const fetchSocials = async () => {
  const res = await fetch(
    `https://k3f4xr2d.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'social'%5D`
  )
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

  const data = await res.json()

  const socials: Social[] = data.result

  // console.log(socials)

  return socials
}
