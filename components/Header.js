import Link from "next/link";
// Import link from next

// I then create a var called line and set the margin
const link = {
  marginCenter: 15,
};

// I create the header function which will have links to my other files
// Using the imported links and p tags
const Header = () => (
  <div>
    <Link href="/">
      <p style={link}>About</p>
    </Link>
    <Link href="/projects">
      <p style={link}>Projects</p>
    </Link>
    <Link href="/contact">
      <p style={link}>Contact</p>
    </Link>
  </div>
);

// I then export the headers
export default Header;
