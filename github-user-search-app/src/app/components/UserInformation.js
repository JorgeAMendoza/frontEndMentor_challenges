import { UserInformationStyled } from './styles/UserInformationStyled.styled';
import { LocationIcon } from './IconComponents/LocationIcon';
import { LinkIcon } from './IconComponents/LinkIcon';
import { TwitterIcon } from './IconComponents/TwitterIcon';
import { CompanyIcon } from './IconComponents/CompanyIcon';
import { Info } from './Info';

export const UserInformation = ({ location, twitter, blog, company }) => {
  // lets do the condition here, then we place below in teh return section.
  // Or how about, we create a component for each of these (Info) which can take in the Icon, the text, and within each component we can do the conditional.
  return (
    <UserInformationStyled>
      <Info text={location} type="text" icon={<LocationIcon />} />
      <Info text={blog} type="link" icon={<LinkIcon />} />
      <Info text={twitter} type="text" icon={<TwitterIcon />} />
      <Info text={company} type="text" icon={<CompanyIcon />} />
    </UserInformationStyled>
  );
};
