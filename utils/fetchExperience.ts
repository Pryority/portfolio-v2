import { Experience } from '../typings'

export async function fetchExperience() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getExperience`)

    const data = await res.json()
    const experiences: Experience[] = data.experiences

    return experiences
}