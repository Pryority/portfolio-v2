import { Project } from "../typings";

// if (process.env.NODE_ENV === "production" ){
//   process.env.NEXT_PUBLIC_BASE_URL = "https://portfolio-mp.vercel.app";
// }

export async function fetchProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
}