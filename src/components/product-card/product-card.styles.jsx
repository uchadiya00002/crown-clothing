import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 85%;

    object-fit: cover;
    margin-bottom: 5px;
    
  @media screen and (min-width: 550px) {
    height: 85%; // Medium screens: 2 columns
  }

  @media screen and (min-width: 900px) {
    height: 95%; // Large screens: 4 columns
  }
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 235px;

    display: none;
    @media screen and (min-width: 550px) {
      
      top: 235px;

    }
  
    @media screen and (min-width: 900px) {
      top: 255px;
    }
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
