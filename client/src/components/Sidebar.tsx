export default function Sidebar() {
  return (
    <aside className="flex-col justify-between w-75 h-full pb-10 bg-white border-r border-[#979797] shrink-0 hidden md:flex">
      <div>
        <img src="/assets/logo-dark.svg" className="pt-[24.5px] mx-[24.5px]" />
        <div className="mt-12">
          <h2 className="text-[12px] font-bold uppercase tracking-[2.4px] text-neutral-grey px-[24.5px] mb-4">
            All boards (3)
          </h2>
          <ul className="flex flex-col gap-2 mr-[24.5px]">
            <li className="flex items-center px-[24.5px] h-12 gap-4 hover:bg-neutral-off-white hover:text-brand-primary active:bg-brand-primary active:text-white w-full rounded-r-full cursor-pointer">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#828FA3] hover:fill-brand-primary active:fill-white transition-colors duration-200"
              >
                <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" />
              </svg>

              <span className="text-[15px] font-bold text-neutral-grey">
                Platform Launch
              </span>
            </li>
            <li className="flex items-center px-[24.5px] h-12 gap-4 hover:bg-neutral-off-white hover:text-brand-primary active:bg-brand-primary active:text-white w-full rounded-r-full cursor-pointer">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#828FA3] hover:fill-brand-primary active:fill-white transition-colors duration-200"
              >
                <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" />
              </svg>

              <span className="text-[15px] font-bold text-neutral-grey">
                Marketing Plan
              </span>
            </li>
            <li className="flex items-center px-[24.5px] h-12 gap-4 hover:bg-neutral-off-white hover:text-brand-primary active:bg-brand-primary active:text-white w-full rounded-r-full cursor-pointer">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#828FA3] hover:fill-brand-primary active:fill-white transition-colors duration-200"
              >
                <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" />
              </svg>

              <span className="text-[15px] font-bold text-neutral-grey">
                Roadmap
              </span>
            </li>
          </ul>

          <button className="flex items-center px-[24.5px] py-3.5 gap-4 text-brand-primary w-full text-left cursor-pointer">
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-brand-primary transition-colors duration-200"
            >
              <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" />
            </svg>

            <span className="text-[15px] font-bold inline-flex items-center gap-2">
              <svg
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-brand-primary"
              >
                <path d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" />
              </svg>
              Create New Board
            </span>
          </button>
        </div>
      </div>

      <div className="mx-[24.5px]">
        <div className="flex items-center justify-center gap-4 bg-neutral-off-white h-12 w-full rounded-lg mb-6">
          <img src="/assets/icon-light-theme.svg" />
          <label className="block w-10 h-5 bg-brand-primary rounded-full cursor-pointer relative hover:opacity-50">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="hidden"
            />
            <div className="absolute w-3.5 h-3.5 bg-white rounded-full top-0.75 left-5.75 transition-all duration-500"></div>
          </label>
          <img src="/assets/icon-dark-theme.svg" />
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <img src="/assets/icon-hide-sidebar.svg" />
          <span className="text-[15px] font-bold text-neutral-grey">
            Hide Sidebar
          </span>
        </div>
      </div>
    </aside>
  );
}
