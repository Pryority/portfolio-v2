import { Experience } from '../typings'
import { server } from './config'

export const fetchExperience = async () =>  {
    const res = await fetch(`${server}/api/getExperience`)
    const data = await res.json()
    console.log(data)
    const experiences: Experience[] = data.experiences

    return experiences
}