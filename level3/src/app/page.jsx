"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <>
      <ul>
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/about"}>
          <li>About</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact</li>
        </Link>
        <Link href={"/profile"}>
          <li>Profile</li>
        </Link>
      </ul>
      <button onClick={()=>router.push("/about")}>
        Go to about
      </button>
    </>
  );
}
