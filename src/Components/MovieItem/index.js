import styled from 'styled-components'

export const Wrapper = styled.div`
  .Avengers-home-background {
    background-image: url(${props => props.$bgImage});
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    width: 100%;
  }
`;
