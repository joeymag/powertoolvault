
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { currentUser, useUser } from "@clerk/nextjs";



export default async function Home() {
  const user = await currentUser();
  return (
    <>
    <Hero />
    </>

    );
}
