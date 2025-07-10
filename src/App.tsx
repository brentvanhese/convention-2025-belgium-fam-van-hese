import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router";
import Home from "./home/Home";
import { NavBar, NotFound, ScrollToTop } from "./_components";
import { PersonDetail } from "./person";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const previousLanguage = localStorage.getItem("lang");
    if (!previousLanguage) {
      localStorage.setItem("lang", i18n.language);
    } else {
      i18n.changeLanguage(previousLanguage);
    }
  }, [i18n]);

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <div className="flex px-8 py-4">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="person" element={<Outlet />}>
            <Route index element={<Navigate to="/" replace />} />
            <Route path=":name" element={<PersonDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
