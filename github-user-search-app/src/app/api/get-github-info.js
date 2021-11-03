import { Octokit } from 'octokit';

const getGithubInfo = async (userName) => {
  const octokit = new Octokit({ auth: process.env.GITHUB_KEY });
  let res;
  try {
    res = await octokit.request('GET /users/{username}', {
      username: userName,
    });
  } catch (e) {
    throw new Error('No Results');
  }

  return res.data;
};

export default getGithubInfo;
