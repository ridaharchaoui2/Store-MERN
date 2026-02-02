import { useState } from "react";
import { User, ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + Number(item.qty), 0);
  return (
    <>
      <nav className="sticky top-0 bg-black text-white px-5 md:px-10 py-3 flex justify-between items-center font-sans z-50">
        {/* Logo Section */}
        <div className="flex flex-col items-start leading-none">
          <div className="text-4xl font-extrabold tracking-tight">EX</div>
          <div className="text-xs uppercase tracking-widest hidden md:block mt-0 5">
            EVANOX STORE
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 uppercase text-base font-medium">
          <li>
            <Link to="/" className="hover:text-orange-400 transition-colors">
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/store"
              className="hover:text-orange-400 transition-colors"
            >
              STORE
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-orange-400 transition-colors"
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-orange-400 transition-colors"
            >
              ABOUT US
            </Link>
          </li>
        </ul>

        {/* Right section : icons and menu */}
        <div className="flex items-center space-x-6">
          {/* User Icon */}
          <User className="w-6 h-6 cursor-pointer hover:text-gray-400 transition-colors" />

          {/* Cart */}
          <Link to="/cart" className="relative p-2 group">
            <ShoppingBag className="w-6 h-6 group-hover:text-orange-400 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-orange-500 text-black text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-black">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Menu icon - visible on small screens, hidden on larger screens */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? (
              <X className="w-6 h-6 cursor-pointer hover:text-gray-400 transition-colors" />
            ) : (
              <Menu className="w-6 h-6 cursor-pointer hover:text-gray-400 transition-colors" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white z-40 md:hidden">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center px-5 py-3">
            <div className="text-4xl font-extrabold tracking-tight">EX</div>
            <div className="flex items-center space-x-6">
              <User className="w-6 h-6 cursor-pointer hover:text-gray-400 transition-colors" />
              <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-gray-400 transition-colors" />
              <button onClick={toggleMenu}>
                <X className="w-6 h-6 cursor-pointer hover:text-gray-400 transition-colors" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col px-5 pt-8 text-base font-medium uppercase">
            <li className="pb-4 border-b border-white/10">
              <Link
                to="/"
                onClick={toggleMenu}
                className="block hover:text-gray-400 transition-colors"
              >
                HOME
              </Link>
            </li>
            <li className="py-4 border-b border-white/10">
              <Link
                to="/product"
                onClick={toggleMenu}
                className="block hover:text-gray-400 transition-colors"
              >
                PRODUCT
              </Link>
            </li>
            <li className="py-4 border-b border-white/10">
              <Link
                to="/store"
                onClick={toggleMenu}
                className="block hover:text-gray-400 transition-colors"
              >
                STORE
              </Link>
            </li>
            <li className="py-4">
              <Link
                to="/about"
                onClick={toggleMenu}
                className="block hover:text-gray-400 transition-colors"
              >
                ABOUT US
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
