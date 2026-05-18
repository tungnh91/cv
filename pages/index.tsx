import Container from 'components/Container';
import Hero from 'components/home/Hero';

export default function Home() {
  return (
    <Container description="Tim Nguyen — principal engineer and builder across AI, ML infrastructure, automotive software, and developer platforms.">
      <section className="mx-auto flex max-w-3xl flex-col pb-20">
        <Hero />
      </section>
    </Container>
  );
}
