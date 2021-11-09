import styled from 'styled-components';

export const UserInformationStyled = styled.div`
  grid-area: UserInformation;
  margin-top: 1.5rem;
  p {
    display: flex;
    gap: 1.2rem;
    margin-top: 1.5rem;
    align-items: center;
    color: ${({ theme }) => theme.userSocial.color};
  }

  span {
    width: 2.5rem;
    text-align: center;

    svg path {
      fill: ${({ theme }) => theme.userSocial.color};
    }
  }

  a:visited {
    color: ${({ theme }) => theme.userSocial.color};
  }
`;
