import Layout from "../components/Layout";
import { Icon } from "@iconify/react";
// I start of by importing my layout template

// I then create a arrow function using the export default

export default () => (
  // I then use my layout template and create a h1 and ul to list my skills and projects
  // Note i haven't deployed an app on heroku as you have to pay now
  // I then use a tags to link my github
  // I then use style-jsx styling below
  <Layout>
    <div>
      <h1>Projects & Dev Skills</h1>
      <br></br>
      <h4>Dev Skills</h4>
      <ul>
        <li>
          <Icon icon="logos:javascript" />
          Javascript
        </li>
        <li>
          <Icon icon="dashicons:html" />
          HTML
        </li>
        <li>
          <Icon icon="logos:css-3" />
          CSS
        </li>
        <li>
          <Icon icon="devicon:react-wordmark" />
          React.JS
        </li>
        <li>
          <Icon icon="skill-icons:expressjs-dark" />
          Express.js
        </li>
        <li>
          <Icon icon="devicon:mongodb-wordmark" />
          MongoDb
        </li>
        <li>
          <Icon icon="devicon:nextjs" />
          Next.js
        </li>
      </ul>
      <br></br>
      <h4>Projects</h4>
      <p>
        Projects on my :
        <a href="https://github.com/Zub0711?tab=repositories">Github</a>
      </p>
      <style global jsx>
        {`
          body {
            background: azure;
            color: black;
            border: 5px solid black;
          }
          ul {
            list-style: none;
            text-align: center;
            font-family: monospace;
          }
          h1 {
            text-align: center;
            text-decoration: underline;
            font-weight: light;
            font-family: monospace;
          }
          h4 {
            text-align: center;
            padding: 10px;
            font-family: monospace;
            font-style: italic;
            text-decoration: underline;
          }
          p {
            text-align: center;
            font-family: monospace;
          }
          a {
            text-align: center;
            color: black;
            text-decoration: underline;
            font-style: italic;
            border: 2px solid 2px black;
            font-family: monospace;
          }
        `}
      </style>
    </div>
  </Layout>
);
