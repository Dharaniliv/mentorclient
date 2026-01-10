import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">MedMentor - Shadmaan</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/mentors" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Find Mentors
            </Link>
            <Link to="/categories" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Categories
            </Link>
            <Link to="/how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              How It Works
            </Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/become-mentor">Join as Mentor</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link
                to="/mentors"
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Find Mentors
              </Link>
              <Link
                to="/categories"
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/how-it-works"
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
                </Button>
                <Button asChild>
                  <Link to="/become-mentor" onClick={() => setMobileMenuOpen(false)}>Join as Mentor</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
