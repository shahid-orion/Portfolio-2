import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'

import { sanityClient } from '../../sanity'
import { PageInfo } from '../../typings'

//execute query
const query = groq`*[_type=='pageInfo'][0]`

type Data = {
  pageInfo: PageInfo
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = await sanityClient.fetch(
    "https://k3f4xr2d.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'skill'%5D"
  )

  res.status(200).json({
    pageInfo,
  })
}
