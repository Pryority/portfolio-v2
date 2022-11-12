import { Experience } from "../typings";

// if (process.env.NODE_ENV === "production" ){
//   process.env.NEXT_PUBLIC_BASE_URL = "https://portfolio-mp.vercel.app";
// }

export async function fetchExperience() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
  const data = await res.json();
  // console.log(data)
  const experiences: Experience[] = data.experiences;

  return experiences;
}