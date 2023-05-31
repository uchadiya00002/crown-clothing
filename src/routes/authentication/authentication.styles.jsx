import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 767px) {
    flex-direction: column; // Stack components vertically
    align-items: center; // Center components horizontally
    width:450px;
  }
`;
