import { PageInfo } from '../typings'

export async function fetchPageInfo() {
    const res =  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
    const data = await (await res).json()

    const pageInfo: PageInfo = data.pageInfo

    return pageInfo
}