
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import { useTheme } from "@/hooks/use-theme";

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <nav className="fixed w-full bg-background/80 backdrop-blur-lg border-b z-50">
//       <div className="container-padding mx-auto">
//         <div className="flex items-center justify-between h-16">
//         {/* <Link to="/" className="flex items-center space-x-2">
//         <img src="/Llogo.png" alt="Fundsgro Logo" className="h-25 w-10" />
//         <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover">
//           Fundsgro
//         </span>
//       </Link> */}
//       <Link to="/" className="flex items-center space-x-2">
//   <img src="/Llogo.png" alt="Fundsgro Logo" className="w-20 h-20" />  
//   <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover">
//     Fundsgro
//   </span>
// </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link to="/campaigns" className="nav-link">
//               Campaigns
//             </Link>
//             <Link to="/start" className="nav-link">
//               Start a Campaign
//             </Link>
//             <Link to="/login" className="nav-link">
//               Login
//             </Link>
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//               aria-label="Toggle theme"
//             >
//               {theme === "dark" ? (
//                 <Sun className="w-5 h-5" />
//               ) : (
//                 <Moon className="w-5 h-5" />
//               )}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//             >
//               {isOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <Link
//                 to="/campaigns"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
//               >
//                 Campaigns
//               </Link>
//               <Link
//                 to="/start"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
//               >
//                 Start a Campaign
//               </Link>
//               <Link
//                 to="/login"
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
//               >
//                 Login
//               </Link>
//               <button
//                 onClick={toggleTheme}
//                 className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
//               >
//                 {theme === "dark" ? "Light Mode" : "Dark Mode"}
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-lg border-b z-50">
      <div className="container-padding mx-auto">
        <div className="flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2">
        <img
  src="/Llogo.png"
  alt="Fundsgro Logo"
  className="h-[6rem] md:h-[5rem] lg:h-[6rem] w-auto"
/>
  <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover">
    Fundsgro
  </span>
</Link>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/campaigns" className="nav-link">
              Campaigns
            </Link>
            <Link to="/start" className="nav-link">
              Start a Campaign
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/campaigns"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
              >
                Campaigns
              </Link>
              <Link
                to="/start"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
              >
                Start a Campaign
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
              >
                Login
              </Link>
              <button
                onClick={toggleTheme}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
              >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}