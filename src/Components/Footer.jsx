import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1300px] w-[95vw] m-auto">
      <div className="sm:flex items-center gap-10">
        <div className="flex items-center gap-3 py-5">
          <div className="text-[13px]">
            <a
              href="https://www.google.com/intl/en/policies/privacy"
              target="_blank"
            >
              Google Privacy &amp; Terms ,
            </a>
          </div>
          <div className="text-[13px] no-underline">
            <a href="https://www.intellum.com/privacy-policy" target="_blank">
              Intellum Privacy & Terms
            </a>
          </div>
        </div>
        {/*  */}
        <div className="flex items-center gap-2">
          <div className="text-[13px]"> Powered by:</div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="appfooter__link appfooter__link--poweredby"
              href="https://www.intellum.com/platform/powered-by-intellum/?utm_source=Google&amp;utm_medium=referral&amp;utm_campaign=powered-by"
            >
              <span className="appfooter__logo footer__logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 75 21"
                  title="Intellum"
                  className="w-[5rem] h-[2rem]"
                >
                  <g fill="currentColor">
                    <path
                      className="st0"
                      d="M8.8 13.9H7V7.1h1.8v6.8zM11.9 7.1h1.8l3.2 4.2V7.1h1.8v6.8H17l-3.2-4.2v4.2H12V7.1zM25 13.9h-1.8V8.6h-1.5V7.1h4.7v1.5H25v5.3zM31.6 8.6v1.1h2v1.5h-2v1.2h2.1v1.5h-3.9V7.1h3.9v1.5h-2.1zM39.3 12.4h2.1v1.5h-3.9V7.1h1.8v5.3zM46.5 12.4h2.1v1.5h-3.9V7.1h1.8v5.3zM57.1 7.1v3.8c0 .9 0 1.7-.7 2.4-.6.6-1.5.8-2.3.8-.8 0-1.7-.2-2.3-.8-.7-.7-.7-1.5-.7-2.4V7.1h1.8v3.6c0 .9.1 1.9 1.2 1.9 1.1 0 1.2-1 1.2-1.9V7.1h1.8zM60.6 7.1h1.7l1.4 3.6 1.5-3.6H67l1 6.8h-1.8l-.4-3.9-1.6 3.9h-.7L61.8 10l-.6 3.9h-1.8l1.2-6.8z"
                    ></path>
                    <g>
                      <path d="M70.4 1.5h3.2v3.2L75 6.1v-6h-6zM73.6 8.6v10.9H1.4v-18h65.1L65.1.1H0v20.8h75V10z"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
