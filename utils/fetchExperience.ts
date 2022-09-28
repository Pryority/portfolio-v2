import { Experience } from '../typings'

let url = process.env.NEXT_PUBLIC_BASE_URL;

if (process.env.NODE_ENV === 'production') {
    url = process.env.NEXT_PUBLIC_VERCEL_URL
}

export async function fetchExperience() {
    const res = await fetch(`${url}/api/getExperience`)

    const data = await res.json()
    const experiences: Experience[] = data.experiences

    return experiences
}