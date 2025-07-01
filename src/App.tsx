import { useTranslation } from "react-i18next";
import { ModeToggle } from "./_components/ModeToggle";
import { Button } from "./components/ui/button";
import { Language } from "./_translations/i18n";

function App() {
  const { i18n, t } = useTranslation();

  console.log("Current language:", i18n.language);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-3xl font-bold underline">WORK IN PROGRESS</p>
        <p className="text-xl italic mt-4">
          The verry beginning of the convention website of family Van Hese
        </p>
        <ModeToggle />
        <Button
          onClick={() => i18n.changeLanguage(Language.en)}
          disabled={i18n.language === Language.en}
        >
          {"CHANGE LANG TO EN"}
        </Button>
        <Button
          onClick={() => i18n.changeLanguage(Language.nl)}
          disabled={i18n.language === Language.nl}
        >
          {"CHANGE LANG TO NL"}
        </Button>
        <p>{t("HOME.TITLE")}</p>
      </div>
    </div>
  );
}

export default App;
