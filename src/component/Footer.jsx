export const Footer = () => {
  return (
    <footer
      id="FooterWrapper"
      className="h-[200px] max-w-full mt-24  bg-teal-300 text-black flex flex-col place-items-center place-content-center gap-5 space-x-2 font-medium"
    >
      <div
        id="FooterPrimaryLinkContainer"
        className="flex flex-row place-items-center space-x-10 text-base font-semibold"
      >
        <a className="hidden  slg_custom:block" href="/account">
          My Account
        </a>
        <a href="/orders">View Orders</a>
        <a href="/rapid-reorder">Rapid Reorder</a>
        <a className="hidden  md:block" href="/policies">
          Policies
        </a>
        <a href="/accessibility">Accessibility Policy</a>
        <a className="hidden  md:block" href="/faq">
          FAQ
        </a>
        <a className="hidden xs_custom:block" href="/support">
          Support
        </a>
        <a
          href="/chat"
          className="text-center text-xs font-normal   rounded bg-black -600 min-w-max h-8 p-3 flex flex-row space-x-1 place-items-center text-white hidden  slg_custom:block "
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.66667 6.33331H5.675M9 6.33331H9.00833M12.3333 6.33331H12.3417M6.5 11.3333H3.16667C2.24619 11.3333 1.5 10.5871 1.5 9.66665V2.99998C1.5 2.07951 2.24619 1.33331 3.16667 1.33331H14.8333C15.7538 1.33331 16.5 2.07951 16.5 2.99998V9.66665C16.5 10.5871 15.7538 11.3333 14.8333 11.3333H10.6667L6.5 15.5V11.3333Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <span id="FooterCopyright" className="flex-row font-normal text-sm mt-2">
        © Copyright 2021 Clark Food Service Equipment — All rights reserved.
      </span>
    </footer>
  );
};
