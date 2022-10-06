import { PageInfo } from '../typings'

export const fetchPageInfo = async () => {
    const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
    console.log('RES----------',res)
    const data = await res.json()
    console.log('DATA----------',data)
    const pageInfo: PageInfo = data

    return pageInfo
}