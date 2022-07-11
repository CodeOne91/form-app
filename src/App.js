import "./App.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import store from "./store/store";
import { lightTheme } from "./styles/theme/theme";
import Form from "./containers/Form";
import { GlobalStyle } from "./styles/global";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <Layout>
            <Routes>
              <Route path="/form" element={<HomePage />} />
              <Route path="/get-user" element={<UserPage />} />
              <Route path="*" element={<Navigate to="/form" />} />
            </Routes>
          </Layout>
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
