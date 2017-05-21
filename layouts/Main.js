import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
    </Head>
    <header>
      <Nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/about'><a>About</a></Link> |
        <Link href='/contact'><a>Contact</a></Link>
      </Nav>
    </header>

    { children }

    <Footer>
      Footer
    </Footer>
  </div>
)