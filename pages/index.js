import Head from "next/head";
import { Twitter, GitHub, Mail, Linkedin, Link } from "react-feather";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Aaron Dack</title>
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <h1>Aaron Dack</h1>
      <h4>Engineer, Dreamer, Futurist</h4>
      <div className="icons">
        <a
          href="https://www.github.com/aarondack"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHub />
        </a>
        <a
          href="https://twitter.com/thatsdack"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Twitter />
        </a>
        <a
          href="https://www.linkedin.com/in/aarondack/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Linkedin />
        </a>
        <a
          href="mailto: adackbusiness@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Mail />
        </a>
      </div>
      <style jsx global>{`
        @font-face {
          font-family: "Cereal";
          src: url("/fonts/Cereal.woff2");
          font-style: normal;
          font-display: swap;
        }
        .container {
          background: linear-gradient(
              230deg,
              rgb(75, 207, 147),
              rgb(75, 121, 207),
              rgb(162, 75, 207)
            )
            0% 0% / 300% 300%;
          animation: 60s ease 0s infinite normal none running move;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        body {
          margin: 0;
        }

        .icons {
          padding-top: 1em;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .icons > svg {
          padding: 0.5em;
        }

        a {
          color: black;
          text-decoration: none;
          padding-right: 1em;
        }

        @-webkit-keyframes move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @-moz-keyframes move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          font-family: "Cereal";
          margin: 0;
          padding-bottom: 0.5em;
        }

        h4 {
          margin: 0;
        }
      `}</style>
    </div>
  );
}
