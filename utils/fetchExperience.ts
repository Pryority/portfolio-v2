import { Experience } from '../typings'

if (process.env.NODE_ENV === 'production' ){
    process.env.NEXT_PUBLIC_BASE_URL = "https://portfolio-v2-pryority.vercel.app"
}

export async function fetchExperience() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
    const data = await res.json()
    // console.log(data)
    const experiences: Experience[] = data.experiences

    return experiences
}