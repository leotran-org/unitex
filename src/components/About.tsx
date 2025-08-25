import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Định vị rõ ràng",
      description: "Cầu nối sinh viên & doanh nghiệp, tạo môi trường cọ xát thực tế cho thế hệ trẻ"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cộng đồng mạnh mẽ",
      description: "Kết nối hàng chục ngàn sinh viên với hàng trăm doanh nghiệp và startup hàng đầu"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Đổi mới sáng tạo",
      description: "Tạo nền tảng cho các ý tưởng đột phá và khởi nghiệp công nghệ của Gen Z"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Phát triển bền vững",
      description: "Xây dựng hệ sinh thái hoạt động đa dạng với seminar, workshop, hackathon"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background-secondary/50 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Về Unitex</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            Unitex được thành lập với sứ mệnh trở thành nền tảng số 1 về kết nối sinh viên - doanh nghiệp tại Việt Nam, 
            tạo ra môi trường học tập và phát triển thực tế cho thế hệ trẻ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-effect p-8 rounded-2xl hover:shadow-card transition-smooth group hover:scale-105"
            >
              <div className="text-primary mb-4 group-hover:text-accent transition-smooth">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-effect p-8 md:p-12 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 gradient-text-secondary">
                Tầm nhìn & Sứ mệnh
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">Tầm nhìn</h4>
                  <p className="text-foreground-secondary leading-relaxed">
                    Trở thành nền tảng hàng đầu kết nối sinh viên với doanh nghiệp, 
                    thu hút hàng chục ngàn bạn trẻ và hàng trăm doanh nghiệp tham gia mỗi năm.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">Sứ mệnh</h4>
                  <p className="text-foreground-secondary leading-relaxed">
                    Tạo ra cầu nối vững chắc giữa thế giới học thuật và thực tiễn doanh nghiệp, 
                    giúp sinh viên có cơ hội tiếp cận, học hỏi và phát triển kỹ năng thực tế.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-primary p-6 rounded-2xl text-primary-foreground">
                <h4 className="text-xl font-semibold mb-3">Giá trị cốt lõi</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Kết nối chân thành và hiệu quả</li>
                  <li>• Tạo cơ hội phát triển bền vững</li>
                  <li>• Đổi mới và sáng tạo không ngừng</li>
                  <li>• Xây dựng cộng đồng mạnh mẽ</li>
                </ul>
              </div>
              
              <div className="bg-gradient-secondary p-6 rounded-2xl text-primary-foreground">
                <h4 className="text-xl font-semibold mb-3">Cam kết</h4>
                <p className="text-sm">
                  Luôn đặt lợi ích của sinh viên và doanh nghiệp lên hàng đầu, 
                  tạo ra các chương trình chất lượng cao và có giá trị thực tiễn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;