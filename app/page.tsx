import { Button } from "@/components/ui/button";
import { ButtonArrow } from "@/app/components/ButtonArrow";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
      <main className="">
        <section id="hero" className="">
          <Button>اطلب مشروعك الان<ButtonArrow color="#ffffff" /></Button>
          <Button
            variant={"outline"}
            className="group"
          >
            اتصل بنا
            <span className="transition-colors duration-200 group-hover:[&>svg]:text-white">
              <ButtonArrow color="#7e22ce" />
            </span>
          </Button>
        </section>
      </main>
  );
}
