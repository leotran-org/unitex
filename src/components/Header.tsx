import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Trang chủ", href: "#home" },
    { name: "Giới thiệu", href: "#about" },
    { name: "Dịch vụ", href: "#services" },
    { name: "UniXpo", href: "#uniXpo" },
    { name: "TalentXpo", href: "#talentxpo" },
    { name: "Liên hệ", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">U</span>
            </div>
            <span className="text-xl font-bold gradient-text">Unitex</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground-secondary hover:text-primary transition-smooth text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Tham gia ngay
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground-secondary hover:text-primary transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground-secondary hover:text-primary transition-smooth text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <Button variant="hero" size="sm" className="w-full">
                  Tham gia ngay
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
