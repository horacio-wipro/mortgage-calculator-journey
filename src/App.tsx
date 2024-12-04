import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import MortgageScreen1Final from "./pages/MortgageScreen1Final";
import MortgageScreen2Final from "./pages/MortgageScreen2Final";
import MortgageScreen3Final from "./pages/MortgageScreen3Final";
import MortgageScreen4Final from "./pages/MortgageScreen4Final";
import MortgageScreen5Final from "./pages/MortgageScreen5Final";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/mortgage-screen-2-final":
        title = "";
        metaDescription = "";
        break;
      case "/mortgage-screen-4-final":
        title = "";
        metaDescription = "";
        break;
      case "/mortgage-screen-3-final":
        title = "";
        metaDescription = "";
        break;
      case "/mortgage-screen-5-final":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MortgageScreen1Final />} />

      <Route
        path="/mortgage-screen-2-final"
        element={<MortgageScreen2Final />}
      />
      <Route
        path="/mortgage-screen-3-final"
        element={<MortgageScreen3Final />}
      />
      <Route
        path="/mortgage-screen-4-final"
        element={<MortgageScreen4Final />}
      />
      <Route
        path="/mortgage-screen-5-final"
        element={<MortgageScreen5Final />}
      />
    </Routes>
  );
}
export default App;
