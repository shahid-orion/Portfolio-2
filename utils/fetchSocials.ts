import { Social } from '../typings'

export const fetchSocials = async () => {
  // try {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
  //   )
  //   if (!res.ok) {
  //     throw new Error('Failed to fetch page info')
  //   }
  //   const data = await res.json()
  //   const socials: Social[] = data.pageInfo
  //   return socials
  // } catch (error) {
  //   console.error(error)
  //   throw error
  // }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

  const data = await res.json()

  const socials: Social[] = data.socials

  // console.log(socials)

  return socials
}
