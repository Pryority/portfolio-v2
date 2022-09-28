import { Skill } from '../typings'

export async function fetchSkills() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getSkills`)

    const data = await res.json()
    const skills: Skill[] = data.skills

    return skills
}