import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);

  return (
    <div>
      <footer className="fixed bottom-0 flex items-center w-full h-10 text-black bg-gray-200">
        <p className="ml-3"><strong>Copyright &copy; {currentYear}</strong> <a className="text-blue-600" href='/' title="ERP">
          ERP </a>
          Todos os direitos reservados
        </p>  
      </footer>
    </div>
  );
}
export default Footer;
