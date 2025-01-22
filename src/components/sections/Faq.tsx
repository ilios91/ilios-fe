import Accordion from "./Accordion";

export default function Faq() {
  return (
    <section className="relative w-full h-[502px] bg-[#EDF4FF]">
      <div className="w-[90%] mx-auto flex items-center h-full justify-between">
        <div>
          <h6 className="font-medium text-2xl leading-[29.69px] text-main-black">
            FAQ Section
          </h6>
          <h4 className="font-bold text-2xl leading-[29.69px] text-main-black">
            {"Got Questions? We've Got Answers"}
          </h4>
        </div>
        <div>
          <h4 className="font-medium text-2xl leading-[29.69px] text-main-black">
            Frequently Ask FAQs:
          </h4>

          {/* Accordions */}
          <div className="mt-9">
            <Accordion text="How does onboarding work for suppliers and buyers?"/>
            <Accordion text="What measures are in place to ensure product quality?"/>
            <Accordion text="Can I track my orders on the platform?" />
          </div>
          <h4 className="font-bold text-[18px] leading-[21.94px] text-blue-normal mt-12">
            More Questions here
          </h4>
        </div>
      </div>
    </section>
  );
}
