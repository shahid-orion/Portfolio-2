import { PageInfo } from '../typings'

export const fetchPageInfo = async () => {
  // try {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  //   )
  //   if (!res.ok) {
  //     throw new Error('Failed to fetch page info')
  //   }
  //   const data = await res.json()
  //   const pageInfo: PageInfo = data.pageInfo
  //   return pageInfo
  // } catch (error) {
  //   console.error(error)
  //   throw error
  // }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)

  const data = await res.json()

  const pageInfo: PageInfo = data.pageInfo

  // console.log(pageInfo)

  return pageInfo
}
