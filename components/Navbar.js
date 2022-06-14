import styled from 'styled-components';
import Link from 'next/link';
import {FaWhatsapp} from "react-icons/fa";


const Nav = styled.nav`
font-size: 30px;
font-weight: bolder;
height: 80px;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #192024;
}
`;




const StyledLink = styled.a`
  padding: 0rem 2rem;
`


const Navbar = () => {
  return (
    <Nav>
      <div>
          <Link href="/" passHref>
              <StyledLink>Web-Gamma</StyledLink>
          </Link>
      </div>
      <div>
      <Link href="/" passHref>
              <StyledLink>Projects</StyledLink>
          </Link>
          <Link href="/" passHref>
              <StyledLink>Services</StyledLink>
          </Link>
          <Link href="/" passHref>
              <StyledLink>Contact</StyledLink>
          </Link>
          <Link href="/" passHref>
              <StyledLink>About Us</StyledLink>
          </Link>
      </div>
    </Nav>
  );
};

export default Navbar