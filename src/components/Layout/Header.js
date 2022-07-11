import { BaseHeader, BaseHeaderContent, Logo } from "../../styles/wrapper";
import img from "../../assets/img/form-icon.svg";
import { NavbarLink } from "../../styles/text";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <BaseHeader>
      <BaseHeaderContent>
        <img height={"80%"} src={img} alt="logo " />

        {location.pathname == "/form" ? (
          <>
            <Logo>{t("page.home")}</Logo>
            <NavbarLink to={"/get-user"}>{t("page.get")}</NavbarLink>
          </>
        ) : (
          <>
            <Logo>{t("page.get")}</Logo>
            <NavbarLink to={"/"}>{t("page.home")}</NavbarLink>
          </>
        )}
      </BaseHeaderContent>
    </BaseHeader>
  );
};

export default Header;
