interface AccordionProps {
  text: string | React.ReactNode;
}

export default function Accordion({ text }: AccordionProps) {
  return (
    <div className="relative border-b border-[#D9D9D9D9] w-full md:w-[520px] pb-2.5 mt-7 bg-green-600">
      <div className=" flex items-center bg-red-500">
        <div className="text-main-black font-normal text-sm md:text-[18px] leading-[21.94px] max-w-[484px]">{text}</div>
        <div className="cursor-pointer flex-1 flex justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
