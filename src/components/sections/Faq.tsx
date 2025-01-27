import Accordion from "./Accordion";

export default function Faq() {
  return (
    <section className="relative w-full h-[502px bg-[#EDF4FF]">
      <div className="pt-7 w-[90%] mx-auto flex flex-col gap-y-5 gap-x-3 || md:flex-row md:items-center md:justify-between md:pt-24">
        
        <div className="w-full font-bold text-[#171717] || md:text-main-black md:w-1/2">
          <h6 className="text-xl leading-[29.69px] || md:text-2xl"> FAQ Section </h6>
          <h4 className="font-bold text-base leading-[29.69px] || md:text-2xl"> {"Got Questions? We've Got Answers"} </h4>
        </div>


        <div className="w-full text-[#171717] md:text-main-black md:w-1/2">
          <h4 className="font-semibold text-center text-base leading-[29.69px] || md:text-2xl "> Frequently Ask FAQs: </h4>

          {/* Accordions */}
          <div className="mt-6 || md:mt-9">
            <Accordion text="How does onboarding work for suppliers and buyers?"/>
            <Accordion text="What measures are in place to ensure product quality?"/>
            <Accordion text="Can I track my orders on the platform?" />
          </div>
          <h4 className="font-bold text-base text-center leading-[21.94px] text-blue-normal mt-9 mb-10 || text-[18px] md:text-start md:mt-12 md:mb-14"> More Questions here </h4>
        </div>
      </div>
    </section>
  );
}
