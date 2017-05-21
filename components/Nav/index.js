import Link from 'next/link'
import styled from 'styled-components';

const Wrapper = styled.footer`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: flex;

  a { padding: 0 15px; }
`;

const Header = () => (
  <Wrapper>
    <Link href='/'><a>Home</a></Link> |
    <Link href='/about'><a>About</a></Link> |
    <Link href='/contact'><a>Contact</a></Link>
  </Wrapper>
)

export default Header;
