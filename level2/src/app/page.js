import Image from "next/image";

export default async function Home() {
  await new Promise((res,rej)=>setTimeout(res,2000))
  return (
    <>
      Hello
    </>
  );
}
