import { Project } from '../typings'

export async function fetchProjects() {
    const res = await fetch(`/api/getProjects`)
    const data = await res.json()
    const projects: Project[] = data.projects

    return projects
}