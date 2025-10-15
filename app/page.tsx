import { Button } from "@/components/ui/button";
import { ButtonArrow } from "@/app/components/ButtonArrow";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="">
      <section id="hero" className="">
        <Button>
          اطلب مشروعك الان
          <ButtonArrow color="#ffffff" />
        </Button>
        <Button variant={"outline"} className="group">
          اتصل بنا
          <span className="transition-all duration-300 group-hover:rotate-45">
            <ButtonArrow
              className="transition-all duration-300 group-hover:text-white"
              color="#7e22ce"
            />
          </span>
        </Button>
        <Badge>اطلب مشروعك الان</Badge>
      </section>
    </main>
  );
}
