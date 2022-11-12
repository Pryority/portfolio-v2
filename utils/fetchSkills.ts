import { Skill } from "../typings";

// if (process.env.NODE_ENV === "production" ){
//   process.env.NEXT_PUBLIC_BASE_URL = "https://portfolio-mp.vercel.app";
// }

export async function fetchSkills() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
}