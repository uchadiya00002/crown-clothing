import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); // Default: 1 column

  @media screen and (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr); // Medium screens: 2 columns
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr); // Large screens: 4 columns
  }
  column-gap: 20px;
  row-gap: 50px;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
