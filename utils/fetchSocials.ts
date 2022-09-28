import { Social } from '../typings'

let url = process.env.NEXT_PUBLIC_BASE_URL;

if (process.env.NODE_ENV === 'production') {
    url = process.env.NEXT_PUBLIC_VERCEL_URL
}

export async function fetchSocials() {
    const res = await fetch(`${url}/api/getSocials`)

    const data = await res.json()
    const socials: Social[] = data.socials

    return socials
}