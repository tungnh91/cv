import Container from 'components/Container';
import ExperienceSection from 'components/home/ExperienceSection';
import Hero from 'components/home/Hero';
import ProfileLinks from 'components/home/ProfileLinks';

export default function Home() {
  return (
    <Container description="Tim Nguyen — principal engineer and builder across AI, ML infrastructure, automotive software, and developer platforms.">
      <section className="mx-auto flex max-w-3xl flex-col gap-10 pb-20">
        <Hero />

        <div className="flex items-center">
          <span className="h-px w-full bg-gradient-to-r from-transparent via-brand-200 to-transparent dark:via-brand-800" />
        </div>

        <ProfileLinks />
      </section>

      <ExperienceSection />
    </Container>
  );
}
