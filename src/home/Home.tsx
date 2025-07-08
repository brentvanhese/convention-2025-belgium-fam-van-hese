import { CustomCarousel } from "@/_components";
import { useTranslation } from "react-i18next";

function Home() {
  const { i18n, t } = useTranslation();

  console.log("Current language:", i18n.language, t("HOME.TITLE"));

  return (
    <div className="w-full h-screen flex-1">
      <h1 className="w-full text-center font-bold text-3xl">
        Meet family Van Hese
      </h1>
      <CustomCarousel className="mx-auto" />
    </div>
  );
}

export default Home;
