import { Link, useLocation } from "react-router-dom";
import { Briefcase, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Briefcase className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-foreground">JobFlow</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          <Link to="/">
            <Button variant={isActive("/") ? "secondary" : "ghost"} size="sm">
              Jobs
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant={isActive("/dashboard") ? "secondary" : "ghost"} size="sm">
              Dashboard
            </Button>
          </Link>
          <div className="ml-2 h-6 w-px bg-border" />
          <Link to="/login" className="ml-2">
            <Button variant="outline" size="sm">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Sign up</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-2">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <Button variant={isActive("/") ? "secondary" : "ghost"} className="w-full justify-start">
                Jobs
              </Button>
            </Link>
            <Link to="/dashboard" onClick={() => setMobileOpen(false)}>
              <Button variant={isActive("/dashboard") ? "secondary" : "ghost"} className="w-full justify-start">
                Dashboard
              </Button>
            </Link>
            <div className="my-1 h-px bg-border" />
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <Button variant="outline" className="w-full">Log in</Button>
            </Link>
            <Link to="/signup" onClick={() => setMobileOpen(false)}>
              <Button className="w-full">Sign up</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
