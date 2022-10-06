import { Social } from '../typings'

if (process.env.NODE_ENV === 'production' ){
    process.env.NEXT_PUBLIC_BASE_URL = "https://portfolio-v2-pryority.vercel.app"
}

export async function fetchSocials() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
    const data = await res.json()
    const socials: Social[] = data.socials

    return socials
}