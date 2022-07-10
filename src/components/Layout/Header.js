import { BaseHeader, BaseHeaderContent, Logo } from "../../styles/wrapper";
import img from "../../assets/img/form-icon.svg";

const Header = () => {
  return (
    <BaseHeader>
      <BaseHeaderContent>
        <img height={"80%"} src={img} alt="logo " />
        <Logo>Form Component </Logo>
      </BaseHeaderContent>
    </BaseHeader>
  );
};

export default Header;
