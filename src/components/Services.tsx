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
      title: "Hội thảo chuyên đề",
      description: "Nội dung chất lượng về khởi nghiệp, công nghệ, kỹ năng mềm dành cho thế hệ trẻ",
      features: ["Startup insights", "Tech trends", "Skill development", "Industry analysis"]
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Cuộc thi & Giải thưởng",
      description: "Tổ chức các cuộc thi, hackathon với giải thưởng hấp dẫn và cơ hội nghề nghiệp",
      features: ["Coding competitions", "Business plan contests", "Innovation challenges", "Mentorship programs"]
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Hạng mục chúng tôi cung cấp</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            Unitex cung cấp hệ sinh thái hoạt động đa dạng, tạo ra giá trị thực tiễn 
            cho cả sinh viên và doanh nghiệp trong hành trình phát triển.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-effect p-8 rounded-2xl hover:shadow-card transition-smooth group hover:scale-105 flex flex-col justify-between"
            >
              <div>
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
              </div>
              
              <Button variant="outline" className="w-full group-hover:border-primary mt-6">
                Tìm hiểu thêm
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-effect p-12 rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10 pointer-events-none"></div>
            <h3 className="text-4xl font-extrabold mb-6 gradient-text-secondary">
              Tại sao chọn Unitex?
            </h3>
            <div className="flex flex-wrap justify-center gap-10 lg:gap-40 mt-10">
              <div className="flex flex-col items-center space-y-2">
                <Users2 className="w-12 h-12 text-primary" />
                <span className="text-xl md:text-2xl lg:text-3xl text-foreground-secondary font-medium leading-relaxed italic">Chuyên nghiệp</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Network className="w-12 h-12 text-primary" />
                <span className="text-xl md:text-2xl lg:text-3xl text-foreground-secondary font-medium leading-relaxed italic">Chất lượng</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Trophy className="w-12 h-12 text-primary" />
                <span className="text-xl md:text-2xl lg:text-3xl text-foreground-secondary font-medium leading-relaxed italic">Tận tâm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
