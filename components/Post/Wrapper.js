import styled from 'styled-components'

const Wrapper = styled.div`
  border-bottom: 1px solid #ddd;

  a {
    padding: 15px;
    text-decoration: none;
    display: block;

    &:hover {
      background: #F5F5F5;

      h3 { color: #387EF5 }
    }
  }

  h3 {
    color: #222;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 35px;
    font-family: "PT Sans", sans-serif;
    text-transform: capitalize;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    line-height: 35px;
    color: #444;
    font-family: "PT Serif", sans-serif;
    margin: 0;
  }
`

export default Wrapper
