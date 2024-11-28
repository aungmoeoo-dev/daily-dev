import { Provider } from "./components/ui/provider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Router from "./Router";

export default function App() {
  return (
    <HelmetProvider>
      <Provider>
        <Helmet>
          <title>Aung's Daily DEV</title>
        </Helmet>
        <Router />
      </Provider>
    </HelmetProvider>
  );
}
