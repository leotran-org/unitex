import { Button } from "@/components/ui/button";
import { Rocket, Code, Brain, Zap, ArrowRight, Star } from "lucide-react";
import genzImage from "@/assets/genz-tech-fusion.jpg";

const TalentXpo = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Career Matching",
      description: "Kết nối đúng người đúng việc"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Skill Development",
      description: "Phát triển kỹ năng thực tế"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Networking Events",
      description: "Sự kiện kết nối chuyên nghiệp"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Mentorship",
      description: "Hướng dẫn từ chuyên gia"
    }
  ];

  return (
    <section id="talentxpo" className="py-20 relative overflow-hidden">
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

            <div className="mb-8">
              <div className="mb-4">
                <div className="text-4xl md:text-6xl font-bold">
                <span className="text-blue-900/90">Talent</span>
                <span className="gradient-text">Xpo</span>
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-bold">
                <span className="text-blue-900/90">NextGen Meets </span> 
                <span className="gradient-text">Opportunity</span>
              </p>
            </div>

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

          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden glass-effect">
              <img 
                src={genzImage} 
                alt="TalentXpo Event - NextGen Meets Opportunity"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-card/80 via-transparent to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center glass-effect p-3 rounded-lg">
                    <div className="text-2xl font-bold gradient-text-secondary">2000+</div>
                    <div className="text-xs text-foreground-muted">Students</div>
                  </div>
                  <div className="text-center glass-effect p-3 rounded-lg">
                    <div className="text-2xl font-bold gradient-text-secondary">100+</div>
                    <div className="text-xs text-foreground-muted">Companies</div>
                  </div>
                  <div className="text-center glass-effect p-3 rounded-lg">
                    <div className="text-2xl font-bold gradient-text-secondary">95%</div>
                    <div className="text-xs text-foreground-muted">Success Rate</div>
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
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className = "gradient-text-secondary"> Điểm đặc biệt của </span> 
            <span className="text-blue-900/90">Talent</span>
            <span className="gradient-text">Xpo</span>

          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Career Fair</h4>
              <p className="text-foreground-secondary">Hội chợ việc làm quy mô lớn với hàng trăm doanh nghiệp hàng đầu</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Skill Assessment</h4>
              <p className="text-foreground-secondary">Đánh giá kỹ năng chuyên môn và tư vấn định hướng nghề nghiệp</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Networking Hub</h4>
              <p className="text-foreground-secondary">Gặp gỡ mentors, alumni và xây dựng mạng lưới chuyên nghiệp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentXpo;
