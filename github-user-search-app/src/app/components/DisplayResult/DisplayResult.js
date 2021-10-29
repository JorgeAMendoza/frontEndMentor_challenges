import { UserGithubStats } from './UserGitHubStats';
import { UserInformation } from './UserInformation';

export const DisplayResult = () => {
  return (
    <section>
      <div>
        <img src="" alt="User Profile"></img>
      </div>
      <div>
        <div>
          <h2>THe Octocat</h2>
          <a href="https://github.com">@octocat</a>
          <p>Joined 25 Jan 2011</p>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipsicing elit. Donect odio.
          Quuisqueu volutpat mattis eros.
        </p>

        <UserGithubStats></UserGithubStats>

        {/* User Information */}
        <UserInformation></UserInformation>
      </div>
    </section>
  );
};
