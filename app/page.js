import Explore from "@/components/Explore";
import Banar from "../components/Banar";
import Image from "next/image";
import Trust from "@/components/Trust";
import Stays from "@/components/Stays";
import ClientExp from "@/components/ClientExp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Banar />
      <div className="container w-full max-w-[1280px] mx-auto my-[40px] max-lg:mx-0 max-lg:px-[10px] ">
        <Explore />
        <Trust />
      </div>
      <Stays />
      <div className="container w-full max-w-[1280px] mx-auto my-[40px] max-lg:mx-0 max-lg:px-[10px] ">

      <ClientExp />
      </div>
      <Footer />
    </div>
  );
}
