import Image from "next/image";
import Frame6 from "@/public/Frame 6.png";
import Frame7 from "@/public/Frame 7.png";
import Frame8 from "@/public/Psd 1 1.png";
import Frame9 from "@/public/Frame 9.png";

const Firstimage = () => {
  return (
    <div className="mt-[12px] flex">
      <Image
        className="mr-[11px]"
        src={Frame6}
        width={282}
        height={201}
        alt="hello"
      />
      <Image
        className="mr-[11px]"
        src={Frame7}
        width={282}
        height={201}
        alt="hello "
      />
      <Image
        className="mr-[11px]"
        src={Frame8}
        width={342}
        height={262}
        alt="hello"
      />
      <Image
        className="mr-[11px]"
        src={Frame9}
        width={282}
        height={201}
        alt="hello"
      />
    </div>
  );
};

export default Firstimage;
