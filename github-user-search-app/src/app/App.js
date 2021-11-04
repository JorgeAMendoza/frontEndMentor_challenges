import { useState } from 'react';
import moonIcon from '../assets/icon-moon.svg';
import { GitHubSearch } from './components/GitHubSearch';
import { GlobalStyles } from './components/styles/Global.styled';

function App() {
  const [theme, setTheme] = useState('Dark');
  return (
    <>
      <GlobalStyles />
      <div>
        <header>
          <h1>devfinder</h1>
          <button
            onClick={() => {
              if (theme === 'Dark') setTheme('Light');
              else setTheme('Dark');
            }}
          >
            {theme}
            <span>
              <img src={moonIcon} alt="Dark Mode Toggled" />
            </span>
          </button>
        </header>

        <GitHubSearch></GitHubSearch>
      </div>
    </>
  );
}

export default App;
