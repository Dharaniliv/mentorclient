import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold text-foreground">MedMentor - Shadmaan</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Connect with verified medical mentors for NEET-UG, NEET-PG, AIIMS, and more.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground">Categories</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/category/neet-ug" className="text-sm text-muted-foreground hover:text-foreground">
                  NEET-UG
                </Link>
              </li>
              <li>
                <Link to="/category/neet-pg" className="text-sm text-muted-foreground hover:text-foreground">
                  NEET-PG
                </Link>
              </li>
              <li>
                <Link to="/category/aiims" className="text-sm text-muted-foreground hover:text-foreground">
                  AIIMS
                </Link>
              </li>
              <li>
                <Link to="/category/career-guidance" className="text-sm text-muted-foreground hover:text-foreground">
                  Career Guidance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/become-mentor" className="text-sm text-muted-foreground hover:text-foreground">
                  Become a Mentor
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-muted-foreground hover:text-foreground">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-sm text-muted-foreground hover:text-foreground">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} MedMentor - Shadmaan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
