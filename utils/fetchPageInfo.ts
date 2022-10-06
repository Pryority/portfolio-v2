import { PageInfo } from '../typings'
import { server } from './config'

export const fetchPageInfo = async () => {
    const res =  await fetch(`${server}/api/getExperience`)
    // console.log('RES----------',res)
    const data = await res.json()
    // console.log('DATA----------',data)
    const pageInfo: PageInfo = data

    return pageInfo
}