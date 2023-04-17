import nft1 from "../../../src/assets/NftBanner1.png";;

const Banner1 = ({bannerName}) => {
  return (
    <div
      className="flex w-full h-fit flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{ backgroundImage: `url(${nft1})` }}
    >
      <div className="w-full">
        <h4 className="mb-[14px] max-w-full text-3xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[65%] 2xl:w-[65%] 3xl:w-[65%]">
          {bannerName}
        </h4>

        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          
          {/* <button
            href=" "
            className="text-base font-medium text-lightPrimary hover:text-lightPrimary 2xl:ml-2"
          >
            Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner1;
