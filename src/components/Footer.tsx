'use client';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 select-none">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col gap-3 text-left">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-primary filter drop-shadow-[0_0_8px_rgba(0,216,255,0.4)]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M140 60C140 45 125 30 100 30C75 30 60 45 60 60C60 75 80 85 105 95C135 107 145 120 145 140C145 165 125 180 100 180C70 180 55 160 55 140" stroke="currentColor" strokeWidth="18" strokeLinecap="round"/>
            </svg>
            <span className="font-display font-black text-base tracking-[0.2em] text-white uppercase">STACKLIN</span>
          </div>
          <p className="text-[11px] text-gray-500 max-w-xs font-mono uppercase tracking-wider">
            Building Digital Products That Move Business Forward.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap gap-8 items-center text-xs font-mono text-gray-500 uppercase tracking-widest">
          {['Work', 'Services', 'Process', 'About', 'Insights', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="magnetic-target hover:text-white transition-colors duration-300 py-1"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/[0.03] pt-8 gap-4 font-mono text-[9px] text-gray-500 tracking-wider">
        <div>
          &copy; {new Date().getFullYear()} STACKLIN. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6">
          <a href="#" className="magnetic-target hover:text-white transition-colors duration-300">PRIVACY POLICY</a>
          <a href="#" className="magnetic-target hover:text-white transition-colors duration-300">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
}
