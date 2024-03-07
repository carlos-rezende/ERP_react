import React from 'react';

export default function header() {
  return (
    // abaixo é o conteúdo da página
    <div className="flex justify-between">
      {/* for Main NavContainer */}
      <nav className="fixed w-full shadow-sm">
        <div className="flex items-center w-full h-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            {/* first block to the left */}
            <div className="flex items-center justify-between w-full px-24 mt-1">
                <div className="flex items-center">
                    <a href="/" className="text-xl font-bold text-white cursor-pointer" title="ERP">
                    <span className="text-orange-600" title="ERP">
                        ERP
                    </span>
                    </a>
                </div>
                <div className="flex justify-end">
                  <a
                  className="px-4 py-1 text-sm font-medium text-white rounded cursor-pointer hover:bg-orange-600 hover:text-white-md"
                  href="/" title="home"
                  >
                  Home
                  </a>
                  <a
                  className="px-4 py-1 text-sm font-medium text-white rounded cursor-pointer hover:bg-orange-600 hover:text-white-md"
                  href="/login" title="exit"
                  >
                  Exit
                  </a>
                </div>
                </div>
        </div>
      </nav>
    </div>
  );
}