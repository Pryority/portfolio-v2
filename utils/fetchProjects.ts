import { Project } from '../typings'

let url = process.env.NEXT_PUBLIC_BASE_URL;

if (process.env.NODE_ENV === 'production') {
    url = process.env.NEXT_PUBLIC_VERCEL_URL
}

export async function fetchProjects() {
    const res = await fetch(`${url}/api/getProjects`)

    const data = await res.json()
    const projects: Project[] = data.projects

    return projects
}