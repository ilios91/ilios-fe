interface AccordionProps {
  text: string | React.ReactNode;
}

export default function Accordion({ text }: AccordionProps) {
  return (
    <div className="relative border-b border-[#D9D9D9D9] w-[520px] pb-2.5 mt-7">
      <div className=" flex items-center w-full">
        <span className="font-normal text-[18px] text-main-black leading-[21.94px] w-[484px]">{text}</span>
        <span className="cursor-pointer flex-1 flex justify-end">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" />
            <g clip-path="url(#clip0_1_3)">
              <rect
                width="1440"
                height="4206"
                transform="translate(-1325 -3223)"
                fill="white"
              />
              <rect
                width="1440"
                height="502"
                transform="translate(-1325 -175)"
              />
              <path
                d="M9.99998 19.52C4.73598 19.52 0.47998 15.264 0.47998 9.99998C0.47998 4.73598 4.73598 0.47998 9.99998 0.47998C15.264 0.47998 19.52 4.73598 19.52 9.99998C19.52 15.264 15.264 19.52 9.99998 19.52ZM9.99998 1.59998C5.35198 1.59998 1.59998 5.35198 1.59998 9.99998C1.59998 14.648 5.35198 18.4 9.99998 18.4C14.648 18.4 18.4 14.648 18.4 9.99998C18.4 5.35198 14.648 1.59998 9.99998 1.59998Z"
                fill="black"
              />
              <path
                d="M4.95996 9.43994H15.04V10.5599H4.95996V9.43994Z"
                fill="black"
              />
              <path
                d="M9.43994 4.95996H10.5599V15.04H9.43994V4.95996Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_3">
                <rect
                  width="1440"
                  height="4206"
                  fill="white"
                  transform="translate(-1325 -3223)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
}
