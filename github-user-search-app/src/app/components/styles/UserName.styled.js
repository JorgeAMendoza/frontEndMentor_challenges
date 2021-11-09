import styled from 'styled-components';

export const UserName = styled.div`
  grid-area: userName;
  h2 {
    color: ${({ theme }) => theme.userName};
  }

  a {
    color: ${({ theme }) => theme.searchName};
  }

  p {
    color: ${({ theme }) => theme.dateJoined};
  }
`;
