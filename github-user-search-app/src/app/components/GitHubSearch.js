import { useEffect, useState } from 'react';
import searchIcon from '../../assets/icon-search.svg';
import { DisplayResult } from './DisplayResult';
import getGithubInfo from '../api/get-github-info';

export const GitHubSearch = () => {
  const [search, setSearch] = useState('');
  const [errorText, setErrorText] = useState('');
  const [userData, setUserData] = useState({});

  useEffect(() => {
    searchUser('octocat');
  }, []);

  async function searchUser(username) {
    try {
      const results = await getGithubInfo(username);
      setUserData(Object.assign({}, results));
    } catch (e) {
      setErrorText('No Results');
    }
  }

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!search) {
            setErrorText('Please Enter Username');
            return;
          }
          setErrorText('');
          searchUser(search);
        }}
      >
        <label htmlFor="userSearch">
          <img src={searchIcon} alt="Search Icon" />
          <input
            id="userSearch"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            onBlur={(e) => setSearch(e.target.value)}
          />
        </label>

        <div>
          <p>{errorText}</p>
          <button>Search</button>
        </div>
      </form>

      <DisplayResult data={userData}></DisplayResult>
    </main>
  );
};
