import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/unitex-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient opacity-10"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Unitex - Connecting students with businesses"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-gradient-primary opacity-20 animate-float"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 rounded-full bg-gradient-secondary opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-12 h-12 rounded-full bg-gradient-accent opacity-20 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Cầu nối sinh viên & doanh nghiệp
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Unitex</span>
            <br />
            <span className="text-foreground">Nền tảng kết nối</span>
            <br />
            <span className="gradient-text-secondary">thế hệ trẻ</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-2xl leading-relaxed">
            Tạo điều kiện kết nối trực tiếp cho sinh viên đại học, cao đẳng với doanh nghiệp, 
            startup và tổ chức công nghệ hàng đầu Việt Nam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="group">
              Khám phá Unitour
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="w-5 h-5 mr-2" />
              Xem giới thiệu
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10K+</div>
              <div className="text-foreground-muted text-sm">Sinh viên tham gia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-foreground-muted text-sm">Doanh nghiệp đối tác</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">30+</div>
              <div className="text-foreground-muted text-sm">Trường đại học</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">30+</div>
              <div className="text-foreground-muted text-sm">Sự kiện/năm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
