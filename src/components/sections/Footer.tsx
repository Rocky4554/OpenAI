import { siPerplexity, siX } from "simple-icons";

const openaiPath =
  "M13.0624 20.6875C12.0624 20.6875 11.3124 20.375 10.6249 19.8125C10.6249 19.8125 10.6874 19.75 10.7499 19.75L14.7499 17.4375C14.8749 17.375 14.9374 17.3125 14.9999 17.1875C15.0624 17.0625 15.0624 17 15.0624 16.875V11.25L16.7499 12.25V16.875C16.8124 19.0625 15.0624 20.6875 13.0624 20.6875ZM4.9999 17.25C4.5624 16.5 4.3749 15.625 4.5624 14.75C4.5624 14.75 4.6249 14.8125 4.6874 14.8125L8.6874 17.125C8.8124 17.1875 8.8749 17.1875 8.9999 17.1875C9.1249 17.1875 9.2499 17.1875 9.3124 17.125L14.1874 14.3125V16.25L10.1249 18.625C9.2499 19.125 8.2499 19.25 7.3124 19C6.3124 18.75 5.4999 18.125 4.9999 17.25ZM3.9374 8.5625C4.3749 7.8125 5.0624 7.25 5.8749 6.9375V7.0625V11.6875C5.8749 11.8125 5.8749 11.9375 5.9374 12C5.9999 12.125 6.0624 12.1875 6.1874 12.25L11.0624 15.0625L9.3749 16.0625L5.3749 13.75C4.4999 13.25 3.8749 12.4375 3.6249 11.5C3.3749 10.5625 3.4374 9.4375 3.9374 8.5625ZM17.7499 11.75L12.8749 8.9375L14.5624 7.9375L18.5624 10.25C19.1874 10.625 19.6874 11.125 19.9999 11.75C20.3124 12.375 20.4999 13.0625 20.4374 13.8125C20.3749 14.5 20.1249 15.1875 19.6874 15.75C19.2499 16.3125 18.6874 16.75 17.9999 17V12.25C17.9999 12.125 17.9999 12 17.9374 11.9375C17.9374 11.9375 17.8749 11.8125 17.7499 11.75ZM19.4374 9.25C19.4374 9.25 19.3749 9.1875 19.3124 9.1875L15.3124 6.875C15.1874 6.8125 15.1249 6.8125 14.9999 6.8125C14.8749 6.8125 14.7499 6.8125 14.6874 6.875L9.8124 9.6875V7.75L13.8749 5.375C14.4999 5 15.1874 4.875 15.9374 4.875C16.6249 4.875 17.3124 5.125 17.9374 5.5625C18.4999 6 18.9999 6.5625 19.2499 7.1875C19.4999 7.8125 19.5624 8.5625 19.4374 9.25ZM8.9374 12.75L7.2499 11.75V7.0625C7.2499 6.375 7.4374 5.625 7.8124 5.0625C8.1874 4.4375 8.7499 4 9.3749 3.6875C9.9999 3.375 10.7499 3.25 11.4374 3.375C12.1249 3.4375 12.8124 3.75 13.3749 4.1875C13.3749 4.1875 13.3124 4.25 13.2499 4.25L9.2499 6.5625C9.1249 6.625 9.0624 6.6875 8.9999 6.8125C8.9374 6.9375 8.9374 7 8.9374 7.125V12.75ZM9.8124 10.75L11.9999 9.5L14.1874 10.75V13.25L11.9999 14.5L9.8124 13.25V10.75Z";

const llmLinks = [
  {
    title: "ChatGPT",
    href: `https://chat.openai.com/?q=${encodeURIComponent("Request an AI summary of OpenBusiness.ai")}`,
    svgPath: openaiPath,
    viewBox: "0 0 24 24",
    isImg: false,
  },
  {
    title: "Perplexity",
    href: `https://www.perplexity.ai/?q=${encodeURIComponent("Request an AI summary of OpenBusiness.ai")}`,
    svgPath: siPerplexity.path,
    viewBox: "0 0 24 24",
    isImg: false,
  },
  {
    title: "Grok",
    href: `https://x.com/i/grok?text=${encodeURIComponent("Request an AI summary of OpenBusiness.ai")}`,
    svgPath: siX.path,
    viewBox: "0 0 24 24",
    isImg: false,
  },
  {
    title: "Claude",
    href: `https://claude.ai/new?q=${encodeURIComponent("Request an AI summary of OpenBusiness.ai")}`,
    isImg: true,
    imgSrc: "/claude.svg",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#050811] border-t border-white/[0.05] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* LLM Summary Links */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <p className="text-base font-medium text-slate-200 text-center">
            Request an AI summary of OpenBusiness.ai
          </p>
          <div className="flex items-center justify-center gap-7">
            {llmLinks.map(({ title, href, svgPath, viewBox, isImg, imgSrc }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                aria-label={title}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {isImg ? (
                  <img
                    src={imgSrc}
                    alt={title}
                    width={32}
                    height={32}
                    className="w-7 h-7 sm:w-8 sm:h-8 brightness-0 invert"
                  />
                ) : (
                  <svg
                    role="img"
                    viewBox={viewBox}
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d={svgPath} />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} OpenBusiness.ai. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="text-sm text-muted-foreground hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-sm text-muted-foreground hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
