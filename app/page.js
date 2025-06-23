import Explore from "@/components/Explore";
import Banar from "../components/Banar";
import Image from "next/image";
import Trust from "@/components/Trust";

export default function Home() {
  return (
    <div className="container w-full max-w-[1280px] mx-auto my-[40px] max-lg:mx-0 max-lg:px-[10px] ">
    <Banar/>
    <Explore/>
    <Trust/>
    </div>
  );
}
