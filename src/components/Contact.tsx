import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Liên hệ với chúng tôi</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            Sẵn sàng tham gia hành trình kết nối và phát triển cùng Unitex? 
            Hãy liên hệ với chúng tôi ngay hôm nay!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 gradient-text-secondary">Gửi tin nhắn</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Họ và tên
                  </label>
                  <Input 
                    placeholder="Nhập họ tên của bạn"
                    className="bg-background-card border-border focus:border-primary transition-smooth"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background-card border-border focus:border-primary transition-smooth"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Chủ đề
                </label>
                <Input 
                  placeholder="Chủ đề tin nhắn"
                  className="bg-background-card border-border focus:border-primary transition-smooth"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nội dung
                </label>
                <Textarea 
                  placeholder="Chia sẻ ý tưởng, câu hỏi hoặc đề xuất của bạn..."
                  rows={6}
                  className="bg-background-card border-border focus:border-primary transition-smooth resize-none"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full group">
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Gửi tin nhắn
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text-secondary">Thông tin liên hệ</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-foreground-secondary">contact@unitex.vn</p>
                    <p className="text-foreground-secondary">partnership@unitex.vn</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Điện thoại</h4>
                    <p className="text-foreground-secondary">+84 123 456 789</p>
                    <p className="text-foreground-secondary">+84 987 654 321</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Địa chỉ</h4>
                    <p className="text-foreground-secondary">
                      Tầng 10, Tòa nhà ABC<br />
                      123 Đường Tech Hub, Quận 1<br />
                      TP. Hồ Chí Minh, Việt Nam
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-effect p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 text-foreground">Kết nối nhanh</h3>
              
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Chat với chúng tôi trên Zalo
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-5 h-5 mr-3" />
                  Đặt lịch tư vấn miễn phí
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="w-5 h-5 mr-3" />
                  Đăng ký nhận newsletter
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-effect p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 text-foreground">Theo dõi chúng tôi</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="ghost" className="justify-start">
                  Facebook
                </Button>
                <Button variant="ghost" className="justify-start">
                  Instagram
                </Button>
                <Button variant="ghost" className="justify-start">
                  LinkedIn
                </Button>
                <Button variant="ghost" className="justify-start">
                  TikTok
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;