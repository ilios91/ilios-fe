export default function Footer() {
  return (
    <footer className="h-[656px] bg-blue-normal text-white flex w-full flex-col">
      <header className="flex mx-auto">
        <h2 className="mt-[61px] text-[32px] font-bold">
          Ready to join the future of healthcare supply chains?
        </h2>
      </header>
      <div className="flex mx-auto mt-8">
        <button className="bg-white w-[304px] h-16 text-blue-normal font-bold text-[18px] rounded-lg">
          {"Let's connect"}
        </button>
      </div>
      <div className="grid grid-cols-3 w-[90%] mx-auto mt-[51px] mb-7">
        <div className="col flex flex-col">
          <ol>
            <li>Ilios</li>
            <li>Ilios</li>
            <li>Ilios</li>
          </ol>
        </div>
        <div className="col flex flex-col">
          <h2 className="font-bold text-base leading-[19.5px] text-white mb-6">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-y-5">
            <li className="text-[#F1F1F1] text-sm font-normal leading-[17px]">
              About us
            </li>
            <li className="text-[#F1F1F1] text-sm font-normal leading-[17px]">
              Our Services
            </li>
            <li className="text-[#F1F1F1] text-sm font-normal leading-[17px]">
              Market Place
            </li>
          </ul>
        </div>
        <div className="col flex items-center flex-col">
          <h2 className="font-bold text-base leading-[19.5px] text-white mb-6">
            Contact us
          </h2>
          <ul className="flex flex-col gap-y-3">
            <li className="text-[#F1F1F1] text-sm font-normal leading-[17px] flex items-center h-full gap-x-2.5">
              <div className="w-2.5 h-2.5 rounded-[50%] bg-white">{""}</div>
              <span className="text-white font-base leading-5">ILIOS</span>
            </li>
            <li className="text-[#F1F1F1] text-sm font-normal leading-[17px] flex items-center h-full gap-x-2.5">
              <div className="w-2.5 h-2.5 rounded-[50%] bg-white">{""}</div>
              <span className="text-white font-base leading-5">ILIOS</span>
            </li>
            <li className="text-[#F1F1F1] text-sm font-normal leading-[17px] flex items-center h-full gap-x-2.5">
              <div className="w-2.5 h-2.5 rounded-[50%] bg-white">{""}</div>
              <span className="text-white font-base leading-5">ILIOS</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="flex justify-between mx-auto mt-8 h-10">
        <div></div>
        <div className="form">
          <input type="email" placeholder="Enter your Email address" className="w-[334px] h-full outline-none bg-white rounded-s-[4px]" />
          <button className="h-full w-[134px]">Subscribe</button>
        </div>
      </div>
    </footer>
  );
}
