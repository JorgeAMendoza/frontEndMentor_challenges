import styled from 'styled-components';

export const UserGitHubStatsStyled = styled.div`
  grid-area: UserGitHubStats;
  background-color: ${({ theme }) => theme.userStats.background};
  text-align: center;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 10px;
  padding: 1.5em 2.2em;
  margin-top: 1.5rem;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.6em;
    font-weight: normal;
    color: ${({ theme }) => theme.userStats.statTitle};
  }

  p {
    font-size: 1.6rem;
    font-weight: bold;
    color: ${({ theme }) => theme.userStats.statNum};
  }
`;
