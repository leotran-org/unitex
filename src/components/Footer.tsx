import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navGroups = [
    {
      title: "Liên Kết Nhanh",
      items: [
        { name: "Trang chủ", href: "#home" },
        { name: "Giới thiệu", href: "#about" },
        { name: "UniXpo", href: "#unixpo" },
        { name: "TalentXpo", href: "#talentxpo" },
        { name: "Liên hệ", href: "#contact" },
      ],
    },
  ];

  const socials = [
    { name: "Facebook", href: "#", Icon: Facebook },
    { name: "Instagram", href: "#", Icon: Instagram },
    { name: "LinkedIn", href: "#", Icon: Linkedin },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/20">
      {/* Background layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background/40 to-background"
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* ======== MAIN ======== */}
        {/*
        <div
          className="
            py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12
            gap-y-10 gap-x-6
          "
        >
        */}
        <div
          className="
    py-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-9
    gap-y-10 gap-x-6
          "
        >

          {/* Brand / About */}
          <section className="md:col-span-3 lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 grid place-items-center shadow-sm">
                <span className="text-primary-foreground font-bold text-2xl">U</span>
              </div>
              <div className="leading-none">
                <span className="text-2xl font-extrabold text-blue-900">Uni</span>
                <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  tex
                </span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Cầu nối sinh viên & doanh nghiệp, tạo môi trường cọ xát thực tế cho
              thế hệ trẻ. Xây dựng nền tảng số 1 về kết nối sinh viên - doanh
              nghiệp tại Việt Nam.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail aria-hidden className="w-4 h-4 text-primary" />
                <a
                  href="mailto:info@unitex.ventures"
                  className="hover:text-primary transition-colors"
                >
                  info@unitex.ventures
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin aria-hidden className="w-4 h-4 text-primary" />
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card hover:bg-background transition-colors"
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </section>

          {/* Links groups */}
          <nav
            aria-label="Liên kết nhanh"
            className="
              grid [grid-template-columns:repeat(auto-fit,minmax(12rem,1fr))]
              gap-6 md:col-span-1 lg:col-span-3
            "
          >
            {navGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold tracking-wide text-foreground mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ChevronRight className="mr-1.5 h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Newsletter */}
          {/*
          <section
            aria-labelledby="newsletter-title"
            className="md:col-span-2 lg:col-span-3 min-w-0"
          >
            <h3 id="newsletter-title" className="text-sm font-semibold text-foreground mb-4">
              Đăng ký nhận tin
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Cập nhật thông tin mới nhất về sự kiện, cơ hội & chương trình của Unitex.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: hook your subscribe logic here
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Nhập email của bạn"
                className="
                  w-full min-w-0 px-4 py-3 rounded-lg bg-card border border-border
                  text-foreground placeholder:text-muted-foreground
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
                  transition-shadow
                "
              />
              <Button type="submit" className="w-full sm:w-auto sm:shrink-0">
                Đăng ký
              </Button>
            </form>

            <p className="mt-2 text-xs text-muted-foreground">
              Bằng việc đăng ký, bạn đồng ý với{" "}
              <a href="#" className="underline hover:text-primary transition-colors">
                Điều khoản
              </a>{" "}
              &{" "}
              <a href="#" className="underline hover:text-primary transition-colors">
                Chính sách bảo mật
              </a>
              .
            </p>
          </section>
            */}
        </div>

        {/* ======== BOTTOM ======== */}
        <div className="py-6 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 Unitex. All rights reserved. Made with ❤️ for Gen Z
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-top */}
      {showScrollTop && (
        <div className="pointer-events-none fixed right-6 bottom-[max(1.5rem,env(safe-area-inset-bottom))] z-20">
          <Button
            aria-label="Lên đầu trang"
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="
              pointer-events-auto rounded-full shadow-md border border-border/60
              bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60
            "
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      )}
    </footer>
  );
};

export default Footer;

