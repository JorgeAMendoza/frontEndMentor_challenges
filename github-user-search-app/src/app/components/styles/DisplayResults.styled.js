import styled from 'styled-components';

export const DisplayResultsStyled = styled.section`
  background-color: ${({ theme }) => theme.resultsBackground};
  margin-top: 3rem;
  padding: 1.2em;
  border-radius: 15px;

  display: grid;
  grid-template-areas:
    'userImage userName'
    'UserBio UserBio'
    'UserGitHubStats UserGitHubStats'
    'UserInformation UserInformation';
  gap: 0.2rem;
  grid-template-columns: 1fr 1.6fr;
`;
