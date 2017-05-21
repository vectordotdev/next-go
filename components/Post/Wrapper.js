import styled from 'styled-components';

const Wrapper = styled.div`
  border-bottom: 1px solid #ddd;

  a {
    padding: 15px;
    text-decoration: none;
    display: block;

    &:hover {
      background: #EBEDEB;
    }
  }

  h3 {
    color: #3D4953;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    color: #AAB0B0;
    font-size: 14px;
  }
`;

export default Wrapper;
