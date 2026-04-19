import BlurFade from "@/components/magicui/blur-fade";
import AboutSection from "@/components/section/about-section";
import ContactSection from "@/components/section/contact-section";
import EducationSection from "@/components/section/education-section";
import HeroSection from "@/components/section/hero-section";
import ProjectsSection from "@/components/section/projects-section";
import SkillsSection from "@/components/section/skills-section";
import WorkExperienceSection from "@/components/section/work-experience-section";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <HeroSection />
      <AboutSection />
      <WorkExperienceSection />
      <EducationSection />
      <SkillsSection />
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
