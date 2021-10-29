import { useState } from 'react';
import searchIcon from '../assets/icon-search.svg';
import { DisplayResult } from './components/DisplayResult/DisplayResult';

const GitHubSearch = () => {
  const [search, setSearch] = useState('');
  const [errorText, setErrorText] = useState('');

  const searchUser = () => {
    if (!search) setErrorText('No Results');
    else setErrorText('');
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
