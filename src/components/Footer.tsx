import { Briefcase } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 font-semibold">
          <Briefcase className="h-5 w-5 text-primary" />
          JobFlow
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 JobFlow. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
