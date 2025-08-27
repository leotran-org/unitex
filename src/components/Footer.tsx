import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8 border-t border-border/20">
      <div className="absolute inset-0 bg-gradient-to-br from-background-secondary/30 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">U</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Unitex</span>
            </div>
            
            <p className="text-foreground-secondary mb-6 leading-relaxed max-w-md">
              Cầu nối sinh viên & doanh nghiệp, tạo môi trường cọ xát thực tế cho thế hệ trẻ. 
              Xây dựng nền tảng số 1 về kết nối sinh viên - doanh nghiệp tại Việt Nam.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-foreground-secondary">
                <Mail className="w-4 h-4 text-primary" />
                <span>hellounitex@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground-secondary">
                <MapPin className="w-4 h-4 text-primary" />
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-foreground-secondary hover:text-primary transition-smooth">Giới thiệu</a></li>
              <li><a href="#services" className="text-foreground-secondary hover:text-primary transition-smooth">Dịch vụ</a></li>
              <li><a href="#events" className="text-foreground-secondary hover:text-primary transition-smooth">Sự kiện</a></li>
              <li><a href="#genz" className="text-foreground-secondary hover:text-primary transition-smooth">GenZ Tech Fusion</a></li>
              <li><a href="#contact" className="text-foreground-secondary hover:text-primary transition-smooth">Liên hệ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Dịch vụ</h3>
            <ul className="space-y-3">
              <li><span className="text-foreground-secondary">Chuỗi Unitour</span></li>
              <li><span className="text-foreground-secondary">Kết nối Tuyển dụng</span></li>
              <li><span className="text-foreground-secondary">Blog Chuyên đề</span></li>
              <li><span className="text-foreground-secondary">Quản lý Sự kiện</span></li>
              <li><span className="text-foreground-secondary">Mạng lưới Đối tác</span></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass-effect p-8 rounded-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2 gradient-text-secondary">
                Đăng ký nhận tin
              </h3>
              <p className="text-foreground-secondary">
                Cập nhật thông tin mới nhất về các sự kiện, cơ hội và chương trình của Unitex
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 rounded-lg bg-background-card border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary transition-smooth"
              />
              <Button variant="hero">
                Đăng ký
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-border/20">
          <div className="text-foreground-muted text-sm mb-4 md:mb-0">
            © 2025 Unitex. All rights reserved. Made with ❤️ for Gen Z
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-foreground-muted hover:text-primary text-sm transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground-muted hover:text-primary text-sm transition-smooth">
              Terms of Service
            </a>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToTop}
              className="ml-4"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
