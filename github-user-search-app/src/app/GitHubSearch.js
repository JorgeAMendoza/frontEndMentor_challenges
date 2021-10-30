import { useState } from 'react';
import searchIcon from '../assets/icon-search.svg';
import { DisplayResult } from './components/DisplayResult/DisplayResult';
import getGithubInfo from './api/get-github-info';

const GitHubSearch = () => {
  const [search, setSearch] = useState('');
  const [errorText, setErrorText] = useState('');

  const searchUser = async () => {
    if (!search) {
      setErrorText('Please Enter Username');
      return;
    }
    setErrorText('');

    try {
      const results = await getGithubInfo(search);
      const userData = results.data.items[0];

      if (userData) console.log(userData);
      else throw new Error('No User Found');

      
    } catch (e) {
      console.log('Something went wrong, username not found');
      setErrorText('No Results');
    }
  };

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchUser();
        }}
      >
        <label htmlFor="userSearch">
          <img src={searchIcon} alt="Search Icon" />
          <input
            id="userSearch"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onBlur={(e) => setSearch(e.target.value)}
          />
        </label>

        <div>
          <p>{errorText}</p>
          <button>Search</button>
        </div>
      </form>

      <DisplayResult></DisplayResult>
    </main>
  );
};

export default GitHubSearch;
