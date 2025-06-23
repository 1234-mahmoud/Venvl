import Image from "next/image";
import Link from "next/link";
const Stays = () => {
  return (
    <div
      className={`my-[50px] flex flex-col justify-center items-center gap-[10px] h-[257px] bg-white
        max-md:h-full max-md:px-[10px]
        `}
    >
      <h1 className={`text-[40px] text-worksans leading-[47px] font-semibold
        max-md:text-[28px]
        `}>
        Discover Stays That Match Your Style
      </h1>
      <div
        className={`flex justify-between items-center h-[120px] w-full max-w-[1064px] 
        max-md:h-full max-md:flex-wrap max-md:gap-[15px]
            
            `}
      >
        <div className="flex flex-col justify-center items-center gap-[10px] text-gray-500">
          <Image src="/Dog.svg" alt="icon" width={32} height={32} />
          <span>Pet-Friendly</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] text-gray-500">
          <Image src="/Family.svg" alt="icon" width={32} height={32} />
          <span>Family Friendly</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] text-gray-500">
          <Image src="/beach.svg" alt="icon" width={32} height={32} />
          <span>Beachfront</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] text-gray-500">
          <Image src="/briefcase.svg" alt="icon" width={32} height={32} />
          <span>Work-Friendly</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] text-gray-500">
          <Image src="/reading_nook.svg" alt="icon" width={32} height={32} />
          <span>Cozy Cabins</span>
        </div>
        <Link href="/">
          <div className="flex flex-col justify-center items-center gap-[5px] text-gray-500">
            <Image
              src="/arrow-right-double.svg"
              alt="icon"
              width={40}
              height={40}
            />
            <span>More</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Stays;
