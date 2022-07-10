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

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <GlobalStyle />
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/form" element={<Form />} />
              <Route path="*" element={<Navigate to="/form" />} />
            </Routes>
          </BrowserRouter>
        </Layout>
        <ToastContainer />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
