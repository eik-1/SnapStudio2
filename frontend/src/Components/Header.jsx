function Header(){
  return (
    <header className="flex max-h-[10dvh] justify-between items-center px-6 py-4 bg-white border-[1px]">
      <div className="flex items-center space-x-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 text-2xl font-bold">
          SnapStudio
        </span>
       
      </div>

 
      <div className="flex items-center space-x-3">
        <div>
          <p className="text-gray-800 font-semibold">Joel Miller</p>
          <p className="text-gray-500 text-sm">abc@xyz.com</p>
        </div>

        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="" 
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
