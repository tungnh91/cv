import Head from "next/head";
import Link from "next/link";

export const config = { amp: true };

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tim Nguyen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Tim Nguyen</h1>

        <p className="description">
          <code>Software Engineer</code>
        </p>

        <div className="grid">
          <a
            target="_blank"
            href="https://linkedin.com/in/timothytungnguyen"
            className="card"
          >
            <amp-img
              src="/linkedin.svg"
              alt="LinkedIn"
              width="3rem"
              height="3rem"
            ></amp-img>
            <p>
              <code>LinkedIn</code>
            </p>
          </a>

          <a
            target="_blank"
            href="https://github.com/tungnh91"
            className="card"
          >
            <amp-img
              src="/github.svg"
              alt="github"
              width="3rem"
              height="3rem"
            ></amp-img>
            <p>
              <code>Github</code>
            </p>
          </a>

          <a target="_blank" href="https://medium.com/@9447" className="card">
            <amp-img
              src="/medium.svg"
              alt="medium"
              width="3rem"
              height="3rem"
            ></amp-img>
            <p>
              <code>Medium</code>
            </p>
          </a>

          <a target="_blank" href="mailto:tungnh91@gmail.com" className="card">
            <amp-img
              src="/mail.svg"
              alt="mail"
              width="3rem"
              height="3rem"
            ></amp-img>
            <p>
              <code>Email</code>
            </p>
          </a>
          <a
            href="https://docs.google.com/document/d/1uAT9FdEBqnd4Eil6w2MVxv2NrF6hjOeYRSZEO6y6Tw0/edit?usp=sharing"
            className="card"
          >
            <amp-img
              src="/resume.svg"
              alt="resume"
              width="3rem"
              height="3rem"
            ></amp-img>
            <p>
              <code>Resume</code>
            </p>
          </a>
        </div>
      </main>

      <footer>
        <p className="vampire">🌙</p>
        <Link href="/">
          <a>
            <amp-img
              className="vampire"
              src="/darkmodeon.svg"
              alt="resume"
              width="3rem"
              height="3rem"
            ></amp-img>
          </a>
        </Link>
      </footer>

      <style jsx>{`
        .container {
          background: black;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          color: grey;
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          color: darkgrey;
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .vampire {
          color: darkgrey;
          font-size: 0.8rem;
          margin-left: 0.2rem;
          margin-right: 0.2rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: blue;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        amp-img {
          height: 3rem;
          -webkit-filter: invert(0.75);
          filter: invert(0.75);
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
