import { PageInfo } from '../typings'

let url = process.env.NEXT_PUBLIC_BASE_URL;

if (process.env.NODE_ENV === 'production') {
    url = process.env.NEXT_PUBLIC_VERCEL_URL
}

export async function fetchPageInfo() {
    const res =  fetch(`${url}/api/getPageInfo`)
    const data = await (await res).json()

    const pageInfo: PageInfo = data.pageInfo

    return pageInfo
}