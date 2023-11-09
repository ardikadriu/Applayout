import Image from "next/image";
import Iphones from "@/public/Iphones.png";

const Phonestypes = () => {
  return (
    <div className="w-[380px] h-[420px] bg-[#151515] rounded-[30px] flex-shrink-0 flex flex-col items-center mt-[20px]">
      <h2 className="text-[#FAA10A] text-[48px] font-semibold">40+</h2>
      <h3 className="text-[#646772] text-[32px] font-semibold">Type</h3>
      <Image src={Iphones} width={395} height={438} alt="Ipohne" />
    </div>
  );
};

export default Phonestypes;
