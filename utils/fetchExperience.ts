import { Experience } from '../typings'

export const fetchExperience = async () =>  {
    const res = await fetch(`${process.env.SERVER}/api/getExperience`)
    const data = await res.json()
    console.log(data)
    const experiences: Experience[] = data.experiences

    return experiences
}