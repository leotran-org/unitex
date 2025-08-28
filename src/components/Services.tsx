import { Button } from "@/components/ui/button";
import { Calendar, Briefcase, BookOpen, Trophy } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Calendar className="w-10 h-10" />,
      prefix: "Uni",
      name: "Tour",
      brief: "Hành Trình Đại Học",
      description: "Tổ chức seminar, workshop, hackathon tại các trường đại học, cao đẳng khắp Việt Nam",
      features: ["Seminar chuyên đề", "Workshop thực hành", "Hackathon công nghệ", "Networking events"],
      href: "#unitour"
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      name: "Xpo",
      prefix: "Uni",
      brief: "Kết nối Tuyển dụng",
      description: "Khu vực tuyển dụng và kết nối trực tiếp giữa doanh nghiệp với sinh viên tài năng",
      features: ["Job matching", "Career counseling", "Company visits", "Internship programs"],
      href: "#unixpo"
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      prefix: "Talent",
      name: "Xpo",
      brief: "Hội thảo chuyên đề",
      description: "Nội dung chất lượng về khởi nghiệp, công nghệ, kỹ năng mềm dành cho thế hệ trẻ",
      features: ["Startup insights", "Tech trends", "Skill development", "Industry analysis"],
      href: "#talentxpo"
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      prefix: "Uni",
      name: "Com",
      brief: "Cuộc thi & Hackathon",
      description: "Tổ chức các cuộc thi, hackathon với giải thưởng hấp dẫn và cơ hội nghề nghiệp",
      features: ["Coding competitions", "Business plan contests", "Innovation challenges", "Mentorship programs"],
      href: "#unicomp"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mx-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-effect p-8 rounded-2xl hover:shadow-card transition-smooth group hover:scale-105 flex flex-col justify-between bg-gradient-to-br from-white to-sky-100/30 hover:from-white hover:to-sky-100/60"
            >
              <div>
                <div className="text-primary mb-6 group-hover:text-accent transition-smooth">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">
                  <span className="text-blue-900/90">{service.prefix}</span>
                  <span className="gradient-text">{service.name}</span>
                  <span className="text-lg text-foreground-secondary font-normal"> - {service.brief}</span>
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
              
              <a href={service.href} className="w-full">
                <Button variant="outline" className="w-full group-hover:border-primary mt-6">
                  Tìm hiểu thêm
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

