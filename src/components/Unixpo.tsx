import { Button } from "@/components/ui/button";
import { Users, MapPin, Calendar, Award, ArrowRight, CheckCircle } from "lucide-react";

const UniXpo = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Kết nối Sinh viên - Doanh nghiệp",
      description: "Cầu nối trực tiếp giữa tài năng trẻ và nhà tuyển dụng"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Hoạt động tại Trường",
      description: "Doanh nghiệp tổ chức các hoạt động trực tiếp tại trường học"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Workshop & Seminar",
      description: "Chia sẻ kiến thức chuyên môn từ các chuyên gia hàng đầu"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Cơ hội Thực tập & Việc làm",
      description: "Kết nối trực tiếp với cơ hội thực tập và tuyển dụng"
    }
  ];

  const benefits = [
    "Trải nghiệm văn hóa doanh nghiệp ngay tại trường",
    "Gặp gỡ trực tiếp với HR và chuyên gia ngành",
    "Nâng cao kỹ năng mềm qua workshop thực tế",
    "Mở rộng mạng lưới quan hệ nghề nghiệp",
    "Hiểu rõ yêu cầu thực tế của doanh nghiệp",
    "Nhận mentorship và tư vấn định hướng"
  ];

  const stats = [
    { number: "50+", label: "Trường Đại học & Cao đẳng" },
    { number: "200+", label: "Doanh nghiệp đối tác" },
    { number: "10,000+", label: "Sinh viên tham gia" },
    { number: "85%", label: "Tỷ lệ có việc làm" }
  ];

  return (
    <section id="unixpo" className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-secondary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-900/90">Uni</span>
            <span className="gradient-text">Xpo</span>
            <span className="text-foreground"> - Hành trình khám phá</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            Chương trình kết nối độc đáo, nơi doanh nghiệp đến trường tổ chức các hoạt động 
            trải nghiệm nghề nghiệp trực tiếp với sinh viên.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="glass-effect p-6 rounded-2xl text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-smooth">
                <div className="text-primary-foreground">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Benefits */}
          <div>
            <h3 className="text-3xl font-bold mb-8">
              Lợi ích khi tham gia 
              <span className="text-blue-900/90"> Uni</span>
              <span className="gradient-text">Xpo </span>
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <CheckCircle className="w-6 h-6 text-secondary mt-0.5 group-hover:text-accent transition-colors" />
                  <span className="text-foreground-secondary group-hover:text-foreground transition-colors">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Đăng ký tham gia UniXpo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Xem lịch tour
              </Button>
            </div>
          </div>

          {/* Process Steps */}
          <div className="glass-effect p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Quy trình 
              <span className="text-blue-900/90"> Uni</span>
              <span className="gradient-text">Xpo </span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Đăng ký & Lên kế hoạch</h4>
                  <p className="text-sm text-foreground-secondary">Trường đăng ký và lên kế hoạch cho hoạt động</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Doanh nghiệp đến trường</h4>
                  <p className="text-sm text-foreground-secondary">Doanh nghiệp cử chuyên gia đến trường tổ chức hoạt động</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Workshop & Giao lưu</h4>
                  <p className="text-sm text-foreground-secondary">Tổ chức workshop, seminar và giao lưu tại trường</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Kết nối & Tuyển dụng</h4>
                  <p className="text-sm text-foreground-secondary">Tuyển dụng trực tiếp và kết nối cơ hội việc làm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UniXpo;
