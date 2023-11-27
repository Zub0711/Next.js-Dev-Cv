import Layout from "../components/Layout";
// I import my template

// I then create my function
export default () => (
  // I add my layout template

  // I then add an h1,br and ul to list my contact info
  // I add my styling below
  <Layout>
    <div>
      <h1>Contact me</h1>
      <br></br>
      <ul>
        <li>
          Address : Apartment 205 135 Greenway Greenside , Johannesburg Gauteng
          South Africa
        </li>
        <li>Email : zubairhoosain@hotmail.com</li>
        <li>Whatsapp/Phone Number : 06472989125</li>
      </ul>
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
