import { imgCar } from "./svg-79qu9";

function Car() {
  return (
    <div className="h-[48px] relative shrink-0 w-[49px]" data-name="car">
      <div className="absolute bottom-0 left-[-2.04%] right-[-6.12%] top-[-2.08%]">
        <img alt="" className="block max-w-none size-full" src={imgCar} />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#0d0d0d] relative rounded-[30px] size-full" data-name="03">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[15px] py-[16px] relative size-full">
          <Car />
        </div>
      </div>
    </div>
  );
}