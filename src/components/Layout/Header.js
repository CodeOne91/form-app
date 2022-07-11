import { BaseHeader, BaseHeaderContent, Logo } from "../../styles/wrapper";
import img from "../../assets/img/form-icon.svg";
import { NavbarLink } from "../../styles/text";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  return (
    <BaseHeader>
      <BaseHeaderContent>
        <>
          <img height={"80%"} src={img} alt="logo " />
          <Logo>{t("page.home")}</Logo>
        </>
        <>
          {location.pathname == "/form" ? (
            <NavbarLink to={"/get-user"}>{t("page.get")}</NavbarLink>
          ) : (
            <NavbarLink to={"/"}>{t("page.home")}</NavbarLink>
          )}
        </>
      </BaseHeaderContent>
    </BaseHeader>
  );
};

export default Header;
