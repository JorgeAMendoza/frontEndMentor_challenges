import { convertDate } from '../utils/convert-date';
import { UserGithubStats } from './UserGitHubStats';
import { UserInformation } from './UserInformation';

export const DisplayResult = ({ data }) => {
  return (
    <section>
      <div>
        <img src={data.avatar_url} alt="User Profile"></img>
      </div>
      <div>
        <div>
          <h2>{data.name}</h2>
          <a target="__blank" href={data.html_url}>
            @{data.login}
          </a>
          <p>Joined {convertDate(data.created_at)}</p>
        </div>

        <p>{data.bio}</p>

        <UserGithubStats
          repos={data.public_repos}
          followers={data.followers}
          following={data.following}
        ></UserGithubStats>

        {/* User Information */}
        <UserInformation
          location={data.location}
          twitter={data.twitter_username}
          blog={data.blog}
          company={data.company}
        ></UserInformation>
      </div>
    </section>
  );
};
