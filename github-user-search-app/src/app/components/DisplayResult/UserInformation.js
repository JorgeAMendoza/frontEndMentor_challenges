import locationIcon from '../../../assets/icon-location.svg';
import twitterIcon from '../../../assets/icon-twitter.svg';
import websiteIcon from '../../../assets/icon-website.svg';
import companyIcon from '../../../assets/icon-company.svg';

export const UserInformation = (props) => {
  return (
    <div>
      <p>
        <span>
          <img src={locationIcon} alt="Location"></img>
        </span>
        San Francisco
      </p>
      <p>
        <span>
          <img src={twitterIcon} alt="Twitter Handle"></img>
        </span>
        <a href="Hello">jorgemendoza</a>
      </p>
      <p>
        <span>
          <img src={websiteIcon} alt="Webiste"></img>
        </span>
        <a href="">https://github.blog</a>
      </p>
      <p>
        <span>
          <img src={companyIcon} alt="Company"></img>
        </span>
        @github
      </p>
    </div>
  );
};
