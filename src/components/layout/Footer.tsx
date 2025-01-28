export default function Footer() {
  return (
    <footer className="relative  bg-blue-normal text-white flex w-full flex-col">
      <div className="w-[90%] mx-auto">
        <h2 className="w-full text-base mt-10 font-bold text-center || sm:mt-[61px] sm:text-[32px]"> Ready to join the future of healthcare supply chains? </h2>

        {/* Let's connect button */}
        <div className="flex mx-auto mt-6 sm:mt-8 w-full justify-center">
          <button className="bg-white text-base h-12 w-[180px] sm:w-[304px] sm:h-16 text-blue-normal font-bold sm:text-[18px] rounded-lg || ">
            {"Let's connect"}
          </button>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col items-center gap-y-14  mx-auto mt-[51px] mb-7 || md:flex-row">
          <div className="w-full flex flex-col items-center || md:w-2/6 md:items-start">
            <div className="flex justify-center items-center w-[180px] flex-col">
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="90" height="90" fill="#D2D2D2" />
                <g clipPath="url(#clip0_1_3)">
                  <rect
                    width="1440"
                    height="4206"
                    transform="translate(-111 -3797)"
                    fill="white"
                  />
                  <rect
                    width="1440"
                    height="656"
                    transform="translate(-111 -247)"
                    fill="#005CE6"
                  />
                  <path
                    d="M54.7822 23.4783V23.4784V23.4786V23.4788V23.4789V23.4791V23.4793C52.1735 23.4783 49.5649 23.4783 46.9562 23.4784C46.9562 25.9618 41.9641 31.2934 44.8438 31.3098C49.7998 31.3379 45.8592 43.318 43.9691 45.4675C42.0791 47.617 35.3626 49.5674 35.217 54.7827C35.0715 59.9979 35.217 65.2174 35.217 70.4348C37.8257 70.4348 40.4344 70.4347 43.0431 70.4347C43.0431 67.4578 49.8289 58.7414 47.0967 58.7097C44.8564 58.6837 43.0431 57.0231 43.0431 54.7827L43.0392 54.7828C42.7967 50.5931 45.2818 46.4525 45.2818 46.4525C48.5576 40.9947 54.7498 41.101 54.7822 35.2175C54.7908 33.6421 54.7822 35.2176 54.7822 35.2176C54.7822 31.3044 54.7822 27.3913 54.7822 23.4783Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M35.2178 11.7393L45.0004 11.7393L54.783 11.7394C54.783 18.2611 54.783 24.7828 54.783 31.3044C48.2612 31.3045 41.7395 31.3045 35.2178 31.3046C35.2178 24.7828 35.2178 18.261 35.2178 11.7393Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M35.2178 58.6956L45.0004 58.6956L54.783 58.6957C54.783 65.2174 54.783 71.7391 54.783 78.2607C48.2612 78.2608 41.7395 78.2608 35.2178 78.2609C35.2178 71.7391 35.2178 65.2173 35.2178 58.6956Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M23.4102 35.1488L23.4103 35.1489L23.4104 35.1488L23.4105 35.1489L23.4106 35.1488L23.4108 35.1489L23.4109 35.1488L23.411 35.1489L23.4111 35.1488C23.4102 37.7575 23.4102 40.3662 23.4103 42.9749C25.8937 42.9749 31.2253 47.967 31.2417 45.0872C31.2698 40.1313 43.2499 44.0719 45.3994 45.9619C47.5489 47.8519 49.4993 54.5684 54.7146 54.714C59.9298 54.8596 65.1493 54.714 70.3667 54.714C70.3666 52.1053 70.3666 49.4966 70.3666 46.8879C67.3897 46.8879 58.6733 40.1022 58.6416 42.8343C58.6156 45.0746 56.955 46.8879 54.7145 46.8879L54.7147 46.8918C50.5249 47.1344 46.3844 44.6492 46.3844 44.6492C40.9266 41.3735 41.0329 35.1813 35.1494 35.1489C33.574 35.1402 35.1495 35.1488 35.1495 35.1488C31.2363 35.1488 27.3232 35.1488 23.4102 35.1488Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M11.6709 54.7141L11.671 44.9315L11.671 35.1489C18.1927 35.1489 24.7144 35.149 31.2361 35.149L31.2362 54.7141C24.7144 54.7141 18.1927 54.7141 11.6709 54.7141Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M58.627 54.7141L58.627 44.9315L58.6271 35.1489C65.1488 35.1489 71.6705 35.149 78.1922 35.149L78.1923 54.7141C71.6705 54.7141 65.1487 54.7141 58.627 54.7141Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M19.5655 19.5652L19.5655 23.4782L19.5654 27.3913C22.1742 27.3913 24.7829 27.3913 27.3916 27.3913C27.3916 24.7826 27.3915 22.1739 27.3915 19.5652C24.7829 19.5652 22.1742 19.5652 19.5655 19.5652Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M19.5655 62.6086L19.5655 66.5217L19.5654 70.4347C22.1742 70.4347 24.7829 70.4347 27.3916 70.4347C27.3916 67.826 27.3916 65.2173 27.3915 62.6086C24.7829 62.6087 22.1742 62.6087 19.5655 62.6086Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M62.6085 62.6086L62.6085 66.5217L62.6084 70.4347C65.2171 70.4347 67.8259 70.4347 70.4346 70.4347C70.4345 67.826 70.4345 65.2173 70.4345 62.6086C67.8258 62.6087 65.2172 62.6087 62.6085 62.6086Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M62.6085 19.5652L62.6085 23.4782L62.6084 27.3913C65.2171 27.3913 67.8259 27.3913 70.4346 27.3913C70.4345 24.7826 70.4345 22.1739 70.4345 19.5652C67.8258 19.5652 65.2172 19.5652 62.6085 19.5652Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M11.7394 74.3477L11.7393 76.3042L11.7393 78.2607C13.0436 78.2607 14.348 78.2607 15.6524 78.2607C15.6524 76.9563 15.6523 75.652 15.6523 74.3477C14.348 74.3477 13.0437 74.3477 11.7394 74.3477Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M11.7394 11.739L11.7393 13.6955L11.7393 15.652C13.0436 15.6521 14.348 15.6521 15.6524 15.6521C15.6524 14.3477 15.6523 13.0434 15.6523 11.739C14.348 11.739 13.0437 11.739 11.7394 11.739Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M74.3478 11.739L74.3477 13.6955L74.3477 15.652C75.652 15.6521 76.9564 15.6521 78.2608 15.6521C78.2608 14.3477 78.2607 13.0434 78.2607 11.739C76.9564 11.739 75.6521 11.739 74.3478 11.739Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M74.3478 74.3477L74.3477 76.3042L74.3477 78.2607C75.652 78.2607 76.9564 78.2607 78.2608 78.2607C78.2608 76.9564 78.2607 75.652 78.2607 74.3477C76.9564 74.3477 75.6521 74.3477 74.3478 74.3477Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M82.1739 43.0435L82.1739 46.9565L82.1738 50.8695C84.7826 50.8695 87.3913 50.8695 90 50.8695C90 48.2609 89.9999 45.6522 89.9999 43.0435C87.3912 43.0435 84.7826 43.0435 82.1739 43.0435Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M0.000119416 43.0435L5.97082e-05 46.9565L0 50.8695C2.60873 50.8695 5.21746 50.8695 7.82619 50.8695C7.82615 48.2608 7.82611 45.6522 7.82607 43.0435C5.21742 43.0435 2.60877 43.0435 0.000119416 43.0435Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M39.131 82.1738L39.1309 86.0869L39.1309 89.9999C41.7396 89.9999 44.3483 89.9999 46.957 89.9999C46.957 87.3912 46.957 84.7825 46.9569 82.1738C44.3483 82.1738 41.7396 82.1738 39.131 82.1738Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M43.0431 0L43.043 3.91304L43.043 7.82607C45.6517 7.82608 48.2604 7.82609 50.8692 7.82609C50.8691 5.21739 50.8691 2.6087 50.869 0C48.2604 9.78259e-06 45.6517 9.78259e-06 43.0431 0Z"
                    fill="#F1F1F1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_3">
                    <rect
                      width="1440"
                      height="4206"
                      fill="white"
                      transform="translate(-111 -3797)"
                    />
                  </clipPath>
                </defs>
              </svg>
              
              {/* Logo Text */}
              <p className="mt-3 leading-[22px] font-normal text-[18px]">ILIOS</p>

              {/* Social Media Logos */}
              <div className="flex mt-5 gap-x-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="#D2D2D2" />
                  <g clipPath="url(#clip0_1_3)">
                    <rect
                      width="1440"
                      height="4206"
                      transform="translate(-66 -3941)"
                      fill="white"
                    />
                    <rect
                      width="1440"
                      height="656"
                      transform="translate(-66 -391)"
                      fill="#005CE6"
                    />
                    <path
                      d="M24 12.0298C24 5.38923 18.624 -0.000244141 12 -0.000244141C5.376 -0.000244141 0 5.38923 0 12.0298C0 17.8524 4.128 22.7005 9.6 23.8193V15.6389H7.2V12.0298H9.6V9.02231C9.6 6.70051 11.484 4.81179 13.8 4.81179H16.8V8.42081H14.4C13.74 8.42081 13.2 8.96216 13.2 9.62382V12.0298H16.8V15.6389H13.2V23.9998C19.26 23.3983 24 18.2734 24 12.0298Z"
                      fill="#F1F1F1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3">
                      <rect
                        width="1440"
                        height="4206"
                        fill="white"
                        transform="translate(-66 -3941)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="#D2D2D2" />
                  <g clipPath="url(#clip0_1_3)">
                    <rect
                      width="1440"
                      height="4206"
                      transform="translate(-105 -3941)"
                      fill="white"
                    />
                    <rect
                      width="1440"
                      height="656"
                      transform="translate(-105 -391)"
                      fill="#005CE6"
                    />
                    <path
                      d="M1 1.99976H3.5L18.5 21.9998H16L1 1.99976ZM5.5 1.99976H8L23 21.9998H20.5L5.5 1.99976Z"
                      fill="#F1F1F1"
                    />
                    <path
                      d="M3 1.99976H8V3.99976H3V1.99976ZM16 21.9998H21V19.9998H16V21.9998Z"
                      fill="#F1F1F1"
                    />
                    <path
                      d="M18.5 1.99976H22L5 21.9998H1.5L18.5 1.99976Z"
                      fill="#F1F1F1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3">
                      <rect
                        width="1440"
                        height="4206"
                        fill="white"
                        transform="translate(-105 -3941)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="#D2D2D2" />
                  <g clipPath="url(#clip0_1_3)">
                    <rect
                      width="1440"
                      height="4206"
                      transform="translate(-66 -3941)"
                      fill="white"
                    />
                    <rect
                      width="1440"
                      height="656"
                      transform="translate(-66 -391)"
                      fill="#005CE6"
                    />
                    <path
                      d="M24 12.0298C24 5.38923 18.624 -0.000244141 12 -0.000244141C5.376 -0.000244141 0 5.38923 0 12.0298C0 17.8524 4.128 22.7005 9.6 23.8193V15.6389H7.2V12.0298H9.6V9.02231C9.6 6.70051 11.484 4.81179 13.8 4.81179H16.8V8.42081H14.4C13.74 8.42081 13.2 8.96216 13.2 9.62382V12.0298H16.8V15.6389H13.2V23.9998C19.26 23.3983 24 18.2734 24 12.0298Z"
                      fill="#F1F1F1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3">
                      <rect
                        width="1440"
                        height="4206"
                        fill="white"
                        transform="translate(-66 -3941)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="#D2D2D2" />
                  <g clipPath="url(#clip0_1_3)">
                    <rect
                      width="1440"
                      height="4206"
                      transform="translate(-66 -3941)"
                      fill="white"
                    />
                    <rect
                      width="1440"
                      height="656"
                      transform="translate(-66 -391)"
                      fill="#005CE6"
                    />
                    <path
                      d="M24 12.0298C24 5.38923 18.624 -0.000244141 12 -0.000244141C5.376 -0.000244141 0 5.38923 0 12.0298C0 17.8524 4.128 22.7005 9.6 23.8193V15.6389H7.2V12.0298H9.6V9.02231C9.6 6.70051 11.484 4.81179 13.8 4.81179H16.8V8.42081H14.4C13.74 8.42081 13.2 8.96216 13.2 9.62382V12.0298H16.8V15.6389H13.2V23.9998C19.26 23.3983 24 18.2734 24 12.0298Z"
                      fill="#F1F1F1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3">
                      <rect
                        width="1440"
                        height="4206"
                        fill="white"
                        transform="translate(-66 -3941)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="#D2D2D2" />
                  <g clipPath="url(#clip0_1_3)">
                    <rect
                      width="1440"
                      height="4206"
                      transform="translate(-222 -3941)"
                      fill="white"
                    />
                    <rect
                      width="1440"
                      height="656"
                      transform="translate(-222 -391)"
                      fill="#005CE6"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 2.99976C18.7956 2.99976 19.5587 3.31583 20.1213 3.87844C20.6839 4.44104 21 5.20411 21 5.99976V17.9998C21 18.7954 20.6839 19.5585 20.1213 20.1211C19.5587 20.6837 18.7956 20.9998 18 20.9998H6C5.20435 20.9998 4.44129 20.6837 3.87868 20.1211C3.31607 19.5585 3 18.7954 3 17.9998V5.99976C3 5.20411 3.31607 4.44104 3.87868 3.87844C4.44129 3.31583 5.20435 2.99976 6 2.99976H18ZM8 9.99976C7.73478 9.99976 7.48043 10.1051 7.29289 10.2926C7.10536 10.4802 7 10.7345 7 10.9998V15.9998C7 16.265 7.10536 16.5193 7.29289 16.7069C7.48043 16.8944 7.73478 16.9998 8 16.9998C8.26522 16.9998 8.51957 16.8944 8.70711 16.7069C8.89464 16.5193 9 16.265 9 15.9998V10.9998C9 10.7345 8.89464 10.4802 8.70711 10.2926C8.51957 10.1051 8.26522 9.99976 8 9.99976ZM11 8.99976C10.7348 8.99976 10.4804 9.10511 10.2929 9.29265C10.1054 9.48019 10 9.73454 10 9.99976V15.9998C10 16.265 10.1054 16.5193 10.2929 16.7069C10.4804 16.8944 10.7348 16.9998 11 16.9998C11.2652 16.9998 11.5196 16.8944 11.7071 16.7069C11.8946 16.5193 12 16.265 12 15.9998V12.3398C12.305 11.9958 12.82 11.5918 13.393 11.3468C13.726 11.2048 14.227 11.1468 14.575 11.2568C14.6904 11.286 14.7933 11.352 14.868 11.4448C14.92 11.5148 15 11.6708 15 11.9998V15.9998C15 16.265 15.1054 16.5193 15.2929 16.7069C15.4804 16.8944 15.7348 16.9998 16 16.9998C16.2652 16.9998 16.5196 16.8944 16.7071 16.7069C16.8946 16.5193 17 16.265 17 15.9998V11.9998C17 11.3298 16.83 10.7338 16.476 10.2558C16.1503 9.82231 15.6944 9.50448 15.175 9.34876C14.273 9.06576 13.274 9.22276 12.607 9.50876C12.3935 9.6006 12.1854 9.70478 11.984 9.82076C11.9421 9.59034 11.8206 9.38195 11.6408 9.23192C11.461 9.08188 11.2342 8.99972 11 8.99976ZM8 6.99976C7.73478 6.99976 7.48043 7.10511 7.29289 7.29265C7.10536 7.48019 7 7.73454 7 7.99976C7 8.26497 7.10536 8.51933 7.29289 8.70686C7.48043 8.8944 7.73478 8.99976 8 8.99976C8.26522 8.99976 8.51957 8.8944 8.70711 8.70686C8.89464 8.51933 9 8.26497 9 7.99976C9 7.73454 8.89464 7.48019 8.70711 7.29265C8.51957 7.10511 8.26522 6.99976 8 6.99976Z"
                      fill="#F1F1F1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3">
                      <rect
                        width="1440"
                        height="4206"
                        fill="white"
                        transform="translate(-222 -3941)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center || md:w-2/6 lg:items-start">
            <h2 className="font-bold text-base leading-[19.5px] text-white mb-6"> Quick Links </h2>
            <ul className="flex flex-col gap-y-8 items-center text-sm font-normal text-[#F1F1F1] || md:items-start">
              <li className="leading-[17px]"> About us </li>
              <li className="leading-[17px]"> Our Services </li>
              <li className="leading-[17px]"> Market Place </li>
            </ul>
          </div>

          <div className="w-full flex items-center flex-col text-white || md:w-2/6">
            <h2 className="font-bold text-base leading-[19.5px] mb-6"> Contact us </h2>
            <ul className="flex flex-col gap-y-3 text-sm font-normal || md:items-start md:mr-8">
              <li className="leading-[17px] flex items-center h-full gap-x-2.5">
                <div className="w-2.5 h-2.5 rounded-[50%] bg-white">{""}</div>
                <span className="font-base leading-5">ILIOS</span>
              </li>
              <li className="leading-[17px] flex items-center h-full gap-x-2.5">
                <div className="w-2.5 h-2.5 rounded-[50%] bg-white">{""}</div>
                <span className="font-base leading-5">ILIOS</span>
              </li>
              <li className="leading-[17px] flex items-center h-full gap-x-2.5">
                <div className="w-2.5 h-2.5 rounded-[50%] bg-white">{""}</div>
                <span className="font-base leading-5">ILIOS</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <form className="w-full flex flex-col gap-y-3 mx-auto justify-center mt-16 mb-20 sm:flex-row || sm:items-center">
          <div className="flex h-full items-center">
            <span className="font-medium leading-[19.5px] text-base text-white mr-5"> Newsletter </span>
          </div>
          <div className="flex h-10">
            <input type="email" placeholder="Enter your email address" className="w-[70%] sm:w-[343px] h-full outline-none bg-white rounded-s-[4px] px-3 py-2.5 text-sm text-[#B2B0B0]"/>
            <button className="w-[30%] h-full || sm:w-[134px] bg-[#2378F6] text-white text-base leading-[19px] outline-none"> Subscribe </button>
          </div>
        </form>
      </div>
    </footer>
  );
}
