import { Skill } from '../typings'
import { server } from './config'

export const fetchSkills = async () => {
    const res = await fetch(`${server}/api/getSkills`)
    const data = await res.json()
    const skills: Skill[] = data.skills
    console.log(process.env.VERCEL_GIT_REPO_SLUG)
    return skills
}