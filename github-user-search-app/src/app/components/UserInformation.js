import locationIcon from '../../assets/icon-location.svg';
import twitterIcon from '../../assets/icon-twitter.svg';
import websiteIcon from '../../assets/icon-website.svg';
import companyIcon from '../../assets/icon-company.svg';
import { UserInformationStyled } from './styles/UserInformationStyled.styled';

export const UserInformation = ({ location, twitter, blog, company }) => {
  return (
    <UserInformationStyled>
      <p>
        <span>
          <img src={locationIcon} alt="Location"></img>
        </span>
        {location}
      </p>
      <p>
        <span>
          <img src={websiteIcon} alt="Webiste"></img>
        </span>
        <a target="__blank" href={blog}>
          {blog ? blog : 'Not Availble'}
        </a>
      </p>
      <p>
        <span>
          <img src={twitterIcon} alt="Twitter Handle"></img>
        </span>
        <span>{twitter}</span>
      </p>
      <p>
        <span>
          <img src={companyIcon} alt="Company"></img>
        </span>
        {company}
      </p>
    </UserInformationStyled>
  );
};
