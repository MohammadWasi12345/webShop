import Image from "next/image";
import Hero from "./components/hero";
import Newest from "./components/newest";

export default function Home() {
  return (
   <div>
    <Hero/>
    <Newest/>
   </div>
  );
}
