import MLH from './MLH';
import logo from '/src/assets/imgs/others/Monotone Logo.webp';
import hamburger from '/src/assets/imgs/others/hamburger_Icon.svg';
import { useCountdown } from '../context/CountdownContext';
import { useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';
import ShinyText from './ShinyText';


function NavButtons() {
    const { hasCountdownEnded } = useCountdown();
    // Base links without Live
    const baseLinks = [{ text: 'About' }, { text: 'FAQ' }, { text: 'Teams' }, { text: 'Sponsors' }];
    
    // Conditionally add Live link only if countdown has ended
    const links = hasCountdownEnded ? 
        [...baseLinks, { text: 'Live', path: '/live' }] : 
        baseLinks;

    return (
        <>
            {links.map((link, index) => (
                <li key={index} className="px-2 lg:hover:scale-110 transition ">
                    <a
                        href={link.path || `#${link.text.toLowerCase().replaceAll(' ', '-')}`}
                        className="text-white text-xl font-['Roboto'] font-medium flex items-center"
                        title={link.text === 'Live' ? '' : ''}
                    >
                        {link.text === 'Live' ? (
                            <span className="relative flex items-center group">
                                <div className="flex items-center gap-1.5">
                                    {/* Live indicator dot with pulsing animation */}
                                    <div className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c593e9] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c593e9]"></span>
                                    </div>
                                    
                                    {/* Shiny Live text */}
                                    <ShinyText 
                                        text="Live" 
                                        disabled={false} 
                                        speed={3} 
                                        className="text-xl font-bold text-[#c593e9]" 
                                    />
                                </div>
                                
                                {/* Tooltip on hover */}
                                <span className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-[#261e24] text-white text-xs py-1 px-2 rounded whitespace-nowrap border border-[#c593e9]/30 shadow-lg z-50">
                                    New! Event Dashboard
                                </span>
                            </span>
                        ) : link.text}
                    </a>
                </li>
            ))}
        </>
    );
}

function BackButton({ isMobile = false }) {
    return (
        <li className={`px-2 transition ${isMobile ? 'w-full' : ''}`}>
            <a
                href="/"
                className={`text-white font-['Roboto'] font-medium flex items-center gap-2 
                ${isMobile ? 'text-base py-2 px-3' : 'text-xl bg-[#c593e9] hover:bg-[#cfb0e8] transition-colors py-2 px-4 rounded-full'}`}
            >
                <FaArrowLeft /> {isMobile ? 'Back' : 'Back to Home'}
            </a>
        </li>
    );
}

BackButton.propTypes = {
    isMobile: PropTypes.bool
};

export default function NavBar() {
    const location = useLocation();
    const isLivePage = location.pathname === '/live';

    return (
        <>
            <nav className="navbar absolute z-[9999] lg:p-10 ">
                <div className="max-lg:flex-1">
                    <a
                        href="/"
                        className="max-lg:h-20 max-sm:h-16 hover:scale-110 transition"
                    >
                        <img
                            src={logo}
                            alt="HackHayward logo"
                            className="h-full"
                        />
                    </a>
                </div>
                {/* Desktop Nav-Links */}
                <div className="hidden lg:flex">
                    <ul className="flex gap-9 menu-horizontal pl-10">
                        {isLivePage ? <BackButton /> : <NavButtons />}
                    </ul>
                </div>
                {/* Mobile Nav-Links */}
                <div className="flex-none">
                    <div className="dropdown dropdown-end shadow-drop-sm">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden hover:rotate-90"
                        >
                            <div className="indicator">
                                <img
                                    src={hamburger}
                                    alt="Menu"
                                    className="h-8 w-8"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm menu-fix dropdown-content bg-[#261e24] rounded-box z-[100] mt-3 w-52 p-2 shadow "
                        >
                            {isLivePage ? <BackButton isMobile={true} /> : <NavButtons />}
                        </ul>
                    </div>
                </div>
                <MLH />
            </nav>
        </>
    );
}
