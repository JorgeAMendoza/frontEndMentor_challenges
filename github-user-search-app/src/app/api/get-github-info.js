import { Octokit } from 'octokit';

const getGithubInfo = async (userName) => {
  const octokit = new Octokit({ auth: process.env.GITHUB_KEY });
  try {
    const res = await octokit.request('GET /search/users', {
      q: userName,
    });
    return res;
  } catch (e) {
    throw new Error('User Not Found');
  }
};

export default getGithubInfo;
