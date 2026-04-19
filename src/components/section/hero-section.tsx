/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between max-[450px]:items-center">
          <div className="gap-2 flex flex-col order-2 md:order-1 max-[450px]:items-center">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl max-[450px]:text-center"
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
            />
            <BlurFadeText
              className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl max-[450px]:text-center"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2 max-[450px]:self-center">
            <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
              <AvatarImage
                alt={DATA.name}
                src={DATA.avatarUrl}
                className="object-cover object-[center_20%]"
              />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
