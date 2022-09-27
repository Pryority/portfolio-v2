import { PageInfo } from '../typings'

export const fetchPageInfo =  () => {
    const res =  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
    const data = JSON.parse(JSON.stringify(res))

    const pageInfo: PageInfo = data.pageInfo

    return pageInfo
}