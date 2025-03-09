
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">EventHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/events" className="text-gray-600 hover:text-primary">
              Browse Events
            </Link>
            <Link to="/create-event" className="text-gray-600 hover:text-primary">
              Create Event
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-primary">
              Dashboard
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Sign up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/events" 
              className="text-gray-600 hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Events
            </Link>
            <Link 
              to="/create-event" 
              className="text-gray-600 hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Create Event
            </Link>
            <Link 
              to="/dashboard" 
              className="text-gray-600 hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
              <Button variant="ghost" asChild className="justify-center">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  Log in
                </Link>
              </Button>
              <Button asChild className="justify-center">
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  Sign up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
