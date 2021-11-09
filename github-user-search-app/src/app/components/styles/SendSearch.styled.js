import styled from 'styled-components';

export const SendSearch = styled.div`
  display: flex;

  p {
    font-size: 1.3rem;
    display: none;
    color: ${({ theme }) => theme.errorText};
  }
`;
