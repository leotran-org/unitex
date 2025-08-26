import { Button } from "@/components/ui/button";
import { Rocket, Code, Brain, Zap, ArrowRight, Star } from "lucide-react";
import genzImage from "@/assets/genz-tech-fusion.jpg";

const GenZTechFusion = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Khám phá công nghệ AI tiên tiến"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Blockchain & Web3",
      description: "Tương lai của công nghệ phi tập trung"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Startup Incubation",
      description: "Ươm tạo ý tưởng thành startup"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation Labs",
      description: "Phòng thí nghiệm đổi mới sáng tạo"
    }
  ];

  return (
    <section id="genz" className="py-20 relative overflow-hidden">
      {/* Background with special effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark/20 via-primary-dark/10 to-accent-dark/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Star className="w-6 h-6 text-secondary animate-pulse-glow" />
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Chương trình đặc biệt
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-slate-700">Talent</span>
              <span className="text-sky-600">Xpo</span>
            </h2>

            <p className="text-xl text-foreground-secondary mb-8 leading-relaxed">
              Nơi Gen Z biến ý tưởng thành startup công nghệ đột phá. 
              Kết hợp công nghệ tiên tiến với tinh thần khởi nghiệp táo bạo.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="text-secondary group-hover:text-accent transition-smooth mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-foreground-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" className="group bg-gradient-to-r from-blue-600 to-sky-400">
                Tham gia TalentXpo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Xem lịch sự kiện
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden glass-effect">
              <img 
                src={genzImage} 
                alt="GenZ Tech Fusion Event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-card/80 via-transparent to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center glass-effect p-3 rounded-lg">
                    <div className="text-2xl font-bold gradient-text-secondary">1000+</div>
                    <div className="text-xs text-foreground-muted">Participants</div>
                  </div>
                  <div className="text-center glass-effect p-3 rounded-lg">
                    <div className="text-2xl font-bold gradient-text-secondary">50+</div>
                    <div className="text-xs text-foreground-muted">Startups</div>
                  </div>
                  <div className="text-center glass-effect p-3 rounded-lg">
                    <div className="text-2xl font-bold gradient-text-secondary">24h</div>
                    <div className="text-xs text-foreground-muted">Hackathon</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-secondary opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-gradient-accent opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Special Features */}
        <div className="mt-20 glass-effect p-8 rounded-3xl">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text-secondary">
            Điểm đặc biệt của TalentXpo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Startup Incubator</h4>
              <p className="text-foreground-secondary">Ươm tạo và phát triển ý tưởng startup từ khái niệm đến thực hiện</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">AI Workshop</h4>
              <p className="text-foreground-secondary">Học tập và ứng dụng AI, Machine Learning trong các dự án thực tế</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Tech Pitching</h4>
              <p className="text-foreground-secondary">Trình bày ý tưởng trước investors và nhận funding cho startup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenZTechFusion;
