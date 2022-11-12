import { PageInfo } from "../typings";

// if (process.env.NODE_ENV === "production" ){
//   process.env.NEXT_PUBLIC_BASE_URL = "https://portfolio-mp.vercel.app";
// }

export async function fetchPageInfo() {
  const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
  const data = await res.json();
  const pageInfo: PageInfo = data;

  return pageInfo;
}