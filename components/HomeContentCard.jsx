import Image from "next/image";

export function HomeContentCard(props) {
  return (
    <>
      <div className="flex flex-col w-[468px] bg-gymmini-card rounded-xl border-y border-y-black">
        <div className="flex gap-3 p-5">
          <div className="w-[24px] h-[24px] rounded-full bg-gray-600"></div>
          <p className="text-white">{props.name}</p>
        </div>
        <div className="relative w-full h-[603px] bg-black">
          <Image
            src="/images/mock/man.png"
            alt="card-image"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col text-[#F0D0F5] px-4 pb-8 pt-4 gap-10">
          <div className="flex justify-between">
            <p className="">07/03/2023 </p>
            <div className="flex flex-col">
              <p>Distance: 4.6 km</p>
              <p>Duration: 4 hr 23min</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold">Abdula.raf : We Can Do It!</p>
            <p className="">Abdula.raf : View this so good @Kalifarrr</p>
            <p className="hover:text-white hover:underline hover:cursor-pointer">
              See all 98 comment
            </p>
            <p className="hover:text-white hover:underline hover:cursor-pointer">
              Add comment
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
