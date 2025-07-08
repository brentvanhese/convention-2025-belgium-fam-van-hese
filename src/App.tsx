import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router";
import Home from "./home/Home";
import { NavBar } from "./_components";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const previousLanguage = localStorage.getItem("i18nextLng");
    if (!previousLanguage) {
      localStorage.setItem("i18nextLng", i18n.language);
    } else {
      i18n.changeLanguage(previousLanguage);
    }
  }, [i18n]);

  return (
    <>
      <NavBar />
      <div className="flex px-8 py-4">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            path="person"
            element={
              <div>
                <Outlet />
              </div>
            }
          >
            <Route index element={<Navigate to="/" replace />} />
            <Route path=":name" element={<div>person Name</div>} />
          </Route>
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
