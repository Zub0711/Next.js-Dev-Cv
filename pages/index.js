import Layout from "../components/Layout";
// I import my template

// I then create my function
export default () => (
  // I then add my template

  // I add img,h1,br,h4, and p tags to add a img about myself and a paragraph about me
  // I then add my styling at the bottom
  <Layout>
    <div>
      <img src="/static/_HPL7630.jpg" alt="img of me" />
      <br></br>
      <h1>Zubair Hoosain Kumandan</h1>
      <h4>Web Developer</h4>
      <br></br>
      <p>
        I am a new developer thats eager to learn and expand my knowledge in
        order to grow further. I am from Cape Town and finished my HighSchool in
        New Zealand. After HighSchool my first job was selling cars in our
        family business I then in 2022 started in the real estate industry which
        I am in currently.I decided to make the switch to the tech industry as I
        wanted to expand my horizons and up skill. I am passionate about
        learning new things my other passions our Cars,fishing,Rugby,Cricket and
        Coffee.
      </p>
      <style jsx>
        {`
          img {
            width: 200px;
            height: 200px;
            display: block;
            border: 2px solid black;
            border-radius: 30px;
            margin-left: auto;
            margin-right: auto;
          }

          h1 {
            text-align: center;
            text-decoration: underline;
            font-weight: bold;
            font-family: monospace;
          }

          p {
            text-align: center;
            display: flex;
            font-size: 15px;
            padding: 5px;
            font-family: monospace;
          }

          h4 {
            text-align: center;
            padding: 10px;
            font-family: monospace;
            font-style: italic;
          }
        `}
      </style>
      <style global jsx>
        {`
          body {
            background: azure;
            color: black;
            border: 5px solid black;
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
