export const UserGithubStats = ({ repos, followers, following }) => {
  return (
    <div>
      <div>
        <h3>Repos</h3>
        <p>{repos}</p>
      </div>
      <div>
        <h3>Followers</h3>
        <p>{followers}</p>
      </div>
      <div>
        <h3>Following</h3>
        <p>{following}</p>
      </div>
    </div>
  );
};
