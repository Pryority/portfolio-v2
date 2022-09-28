import { Skill } from '../typings'

let url = process.env.NEXT_PUBLIC_BASE_URL;

if (process.env.NODE_ENV === 'production') {
    url = process.env.NEXT_PUBLIC_VERCEL_URL
}

export async function fetchSkills() {
    const res = await fetch(`${url}/api/getSkills`)

    const data = await res.json()
    const skills: Skill[] = data.skills

    return skills
}