import { Social } from '../typings'

export async function fetchSocials() {
    const res = await fetch(`/api/getSocials`)
    const data = await res.json()
    const socials: Social[] = data.socials

    return socials
}