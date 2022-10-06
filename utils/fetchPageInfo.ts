import { PageInfo } from '../typings'

export async function fetchPageInfo() {
    const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
    const data = await res.json()
    // console.log('DATA----------',data)
    const pageInfo: PageInfo = data

    return pageInfo
}