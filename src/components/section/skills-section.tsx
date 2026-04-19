/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                {"icon" in skill && skill.icon && (
                  <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                )}
                {"logoUrl" in skill && skill.logoUrl && (
                  <img
                    src={skill.logoUrl}
                    alt={skill.name}
                    className="size-4 rounded overflow-hidden object-contain"
                  />
                )}
                <span className="text-foreground text-sm font-medium">{skill.name}</span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
