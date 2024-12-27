"use client";

interface PageHeaderProps{
  pageTitle: string;
}

export default function Header({ pageTitle }: PageHeaderProps) {
  return (
    <header className="bg-white">
      <div className="flex items-center justify-between px-6 py-4 gap-4">
        <div className="text-[25px] font-semibold text-[#343C6A] mx-auto md:mx-0">
          {pageTitle}
        </div>

        <div className="md:hidden">
          <img src='header/avatar.png' className='w-[45px] h-[45px] rounded-full' />
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative w-64">
            <img
              src="header/search.png"
              alt="Search Icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 w-full border rounded-[40px] text-xs font-normal text-[#8BA3CB] bg-[#F5F7FA] border-none px-6 py-[12px]"
            />
          </div>

          <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
            <img src='header/settings.png' />
          </button>
          <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
            <img src='header/notification.png' />
          </button>
          <img src='header/avatar.png' className='w-[45px] h-[45px] rounded-full' />
        </div>
      </div>

      <div className="block md:hidden px-6 py-2">
        <img
          src="header/search.png"
          alt="Search Icon"
          className="absolute ml-4 mt-[12px] w-4 h-4"
        />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 w-full border rounded-[40px] text-xs font-normal text-[#8BA3CB] bg-[#F5F7FA] border-none px-12 py-[12px]"
        />
      </div>
    </header>
  );
}