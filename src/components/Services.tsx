import { Button } from "@/components/ui/button";
import { Calendar, Users2, Briefcase, BookOpen, Trophy, Network } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Chuỗi Unitour",
      description: "Tổ chức seminar, workshop, hackathon tại các trường đại học, cao đẳng khắp Việt Nam",
      features: ["Seminar chuyên đề", "Workshop thực hành", "Hackathon công nghệ", "Networking events"]
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Kết nối Tuyển dụng",
      description: "Khu vực tuyển dụng và kết nối trực tiếp giữa doanh nghiệp với sinh viên tài năng",
      features: ["Job matching", "Career counseling", "Company visits", "Internship programs"]
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Blog Chuyên đề",
      description: "Nội dung chất lượng về khởi nghiệp, công nghệ, kỹ năng mềm dành cho thế hệ trẻ",
      features: ["Startup insights", "Tech trends", "Skill development", "Industry analysis"]
    },
    {
      icon: <Users2 className="w-10 h-10" />,
      title: "Quản lý Sự kiện",
      description: "Hệ thống quản lý đăng ký, thông tin sự kiện và chăm sóc khách hàng chuyên nghiệp",
      features: ["Event registration", "Participant management", "Real-time updates", "Feedback system"]
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Cuộc thi & Giải thưởng",
      description: "Tổ chức các cuộc thi, hackathon với giải thưởng hấp dẫn và cơ hội nghề nghiệp",
      features: ["Coding competitions", "Business plan contests", "Innovation challenges", "Mentorship programs"]
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "Mạng lưới Đối tác",
      description: "Xây dựng mạng lưới quan hệ rộng lớn với doanh nghiệp, startup và quỹ đầu tư",
      features: ["Strategic partnerships", "Investor connections", "Corporate collaborations", "Ecosystem building"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Dịch vụ của chúng tôi</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            Unitex cung cấp hệ sinh thái hoạt động đa dạng, tạo ra giá trị thực tiễn 
            cho cả sinh viên và doanh nghiệp trong hành trình phát triển.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-effect p-8 rounded-2xl hover:shadow-card transition-smooth group hover:scale-105"
            >
              <div className="text-primary mb-6 group-hover:text-accent transition-smooth">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:gradient-text transition-smooth">
                {service.title}
              </h3>
              
              <p className="text-foreground-secondary mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-sm text-foreground-muted flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full group-hover:border-primary">
                Tìm hiểu thêm
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-effect p-12 rounded-3xl">
            <h3 className="text-3xl font-bold mb-6 gradient-text-secondary">
              Tại sao chọn Unitex?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">99%</div>
                <div className="text-foreground-secondary">Tỷ lệ hài lòng</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-foreground-secondary">Hỗ trợ khách hàng</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-foreground-secondary">Cam kết chất lượng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;