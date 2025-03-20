export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Company Name & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Rebu</h2>
          <p className="text-sm text-gray-400">© 2025 Rebu. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a
            href="https://github.com/Vraj-Patel-2468" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-l hover:text-gray-300"
          >
            Vraj Patel
          </a>
          <a 
            href="https://github.com/NainPatel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-l hover:text-gray-300"
          >
            Nain Patel
          </a>
        </div>
      </div>
    </footer>
  );
}
