import { PageInfo } from '../typings'

export const fetchPageInfo = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
  const res = await fetch(
    `https://k3f4xr2d.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'pageInfo'%5D`
  )

  const data = await res.json()

  const pageInfo: PageInfo[] = data.result

  return pageInfo
}
