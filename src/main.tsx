import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "./components/AlertTemplate.tsx";
import App from "./components/App.tsx";
import store, { persistor } from "./redux/store.ts";
import { ALERT_OPTIONS } from "./constants/constants.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AlertProvider template={AlertTemplate} {...ALERT_OPTIONS}>
          <App />
        </AlertProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
