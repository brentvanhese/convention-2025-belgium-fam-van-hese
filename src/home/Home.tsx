import { CustomCarousel, PersonCard } from "@/_components";
import { useTranslation } from "react-i18next";

import sintNiklaasPhoto from "@/_assets/_images/sintNiklaas.jpg";
import avatarBrent from "@/_assets/_images/avatarBrent.jpg";
import avatarDavidAndDebora from "@/_assets/_images/avatarDavidAndDebora.jpg";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="font-bold text-matisse text-4xl lg:text-5xl">
          {t("HOME.TITLE")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("HOME.DESCRIPTION")}
        </p>
      </header>

      <CustomCarousel className="mx-auto" />

      <section className="text-center space-y-4">
        <h2 className="font-semibold text-matisse text-2xl lg:text-3xl">
          {t("HOME.ABOUT_US.TITLE")}
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {t("HOME.ABOUT_US.DESCRIPTION")}
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-center text-matisse font-semibold text-2xl lg:text-3xl">
          {t("HOME.SINT_NIKLAAS.TITLE")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <p className="text-muted-foreground leading-relaxed">
              {t("HOME.SINT_NIKLAAS.DESCRIPTION")}
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={sintNiklaasPhoto}
              alt="Family Photo"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-center text-matisse font-semibold text-2xl lg:text-3xl">
          {t("HOME.FAMILY_MEMBERS.TITLE", "Meet Our Family")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <PersonCard
            name="David & Debora"
            imgUrl={avatarDavidAndDebora}
            href="/person/david_and_debora"
            btnName={t("HOME.FAMILY_MEMBERS.NAVIGATE_PERSON_DETAIL")}
          />
          <PersonCard
            name="Brent"
            imgUrl={avatarBrent}
            href="/person/brent"
            btnName={t("HOME.FAMILY_MEMBERS.NAVIGATE_PERSON_DETAIL")}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
