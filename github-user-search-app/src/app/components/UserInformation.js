import { UserInformationStyled } from './styles/UserInformationStyled.styled';
import { LocationIcon } from './IconComponents/LocationIcon';
import { LinkIcon } from './IconComponents/LinkIcon';
import { TwitterIcon } from './IconComponents/TwitterIcon';
import { CompanyIcon } from './IconComponents/CompanyIcon';

export const UserInformation = ({ location, twitter, blog, company }) => {
  return (
    <UserInformationStyled>
      <p>
        <span>
          <LocationIcon />
        </span>
        {location}
      </p>
      <p>
        <span>
          <LinkIcon />
        </span>
        <a target="__blank" href={blog}>
          {blog ? blog : 'Not Availble'}
        </a>
      </p>
      <p>
        <span>
          <TwitterIcon />
        </span>
        <span>{twitter}</span>
      </p>
      <p>
        <span>
          <CompanyIcon />
        </span>
        {company}
      </p>
    </UserInformationStyled>
  );
};
