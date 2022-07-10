import { Main } from "../../styles/wrapper";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
