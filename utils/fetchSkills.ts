import { Skill } from '../typings'

export async function fetchSkills() {
    const res = await fetch(`/api/getSkills`)
    const data = await res.json()
    const skills: Skill[] = data.skills

    return skills
}