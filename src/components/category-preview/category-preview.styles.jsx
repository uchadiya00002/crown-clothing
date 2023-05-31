import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); // Default: 1 column

  @media screen and (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr); // Medium screens: 2 columns
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr); // Large screens: 4 columns
  }

  column-gap: 20px;
`;
