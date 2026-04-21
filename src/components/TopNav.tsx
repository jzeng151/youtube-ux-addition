import youtubeLogo from "../assets/youtube-logo.svg";

export default function TopNav() {
  return (
    <nav className="fixed top-0 w-full z-50 h-16 bg-neutral-50/80 backdrop-blur-xl flex justify-between items-center px-4 md:px-6 font-['Roboto',sans-serif] tracking-tight antialiased">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-neutral-200 transition-all duration-300 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <a href="/" className="flex items-center gap-0.5">
          <img src={youtubeLogo} alt="" className="h-5 w-auto" />
          <span className="text-[19px] font-bold tracking-[-0.5px] text-[#282828] leading-none ml-1.5">YouTube</span>
        </a>
      </div>

      <div className="hidden md:flex flex-1 max-w-2xl justify-center px-8">
        <div className="flex w-full">
          <div className="flex flex-1 items-center bg-surface-container-low rounded-l-full px-4 border border-transparent focus-within:border-outline/30 transition-all">
            <input
              className="bg-transparent border-none focus:ring-0 w-full py-2 text-on-surface placeholder:text-tertiary outline-none"
              placeholder="Search"
              type="text"
            />
          </div>
          <button className="bg-surface-container px-6 rounded-r-full hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <button className="ml-4 p-2 bg-surface-container-low hover:bg-surface-container-high rounded-full transition-all flex items-center justify-center">
          <span className="material-symbols-outlined">mic</span>
        </button>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="p-2 hover:bg-neutral-200 transition-all duration-300 rounded-full active:scale-95 hidden md:flex">
          <span className="material-symbols-outlined">video_call</span>
        </button>
        <button className="p-2 hover:bg-neutral-200 transition-all duration-300 rounded-full active:scale-95">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden ml-2 cursor-pointer border border-outline-variant/20">
          <img
            alt="User"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjqDkWeK3fb2WCrrfuCqCUoltoUrngy0iu2hDlRiiAmmBBzPKVOF-5jLRwMx3SnL6w0zwKCNHHIAfcL3l5aBS-k-SU11TMpFB70Gsw_80hjFO9wdH4MG5_nKGLcpwNLMq1_3t6bGQDK9rrHIApsGWPzs6x9pFwIEGJKkr42Itpceem5fZXqJVGyy8WCcsQUz6D8CI3BFRGlEgGFzRkhjNlBdcUbc-k2_ATSoWd_wL4MoSGSUNJ0wCuLoydXwPpPZOWpz7Jc92TEBE"
          />
        </div>
      </div>
    </nav>
  );
}
