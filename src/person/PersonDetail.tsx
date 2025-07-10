import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";

import turtlePhoto from "@/_assets/_images/turtle.jpg";
import trolleyPhoto from "@/_assets/_images/davidAndDeboraTrolley.jpg";
import brentLdcPhoto from "@/_assets/_images/brentLdc.jpg";
import brentRunning from "@/_assets/_images/brentRunning.jpg";
import avatarBrent from "@/_assets/_images/avatarBrent.jpg";
import avatarDavidAndDebora from "@/_assets/_images/avatarDavidAndDebora.jpg";
import Icon from "@/_components/Icon";
import { Button } from "@/components/ui/button";

// Person data mapping
const personData = {
  brent: {
    avatar: avatarBrent,
    photos: [brentRunning, brentLdcPhoto],
    names: ["Brent"],
    translationKey: "BRENT",
  },
  david_and_debora: {
    avatar: avatarDavidAndDebora,
    photos: [turtlePhoto, trolleyPhoto],
    names: ["David", "Debora"],
    translationKey: "DAVID_AND_DEBORA",
  },
} as const;

export const PersonDetail = () => {
  const { t } = useTranslation();
  const params = useParams<{ name: string }>();
  const navigate = useNavigate();

  const personName = params.name?.toLowerCase() as keyof typeof personData;
  const person = personData[personName];

  // Fallback if person not found
  const displayName = person?.names.join(" & ");
  const avatar = person?.avatar;
  const photos = person?.photos;
  const translationKey = person?.translationKey;

  if (person == null && displayName) navigate("/404");

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <header className="text-center space-y-6">
        <Avatar className="mx-auto w-32 h-32">
          <AvatarImage src={avatar} />
          <AvatarFallback className="text-2xl font-semibold">
            {displayName.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h1 className="text-3xl lg:text-4xl font-bold text-matisse">
            {displayName}
          </h1>
        </div>
      </header>

      <section className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="space-y-4">
            <p
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: t(`PERSON.${translationKey}.TEXT_1`).replace(
                  /\n/g,
                  "<br>"
                ),
              }}
            />
          </div>
          <div className="flex justify-center">
            <img
              src={photos[0]}
              alt={`${displayName} Photo 1`}
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1 flex justify-center">
            <img
              src={photos[1]}
              alt={`${displayName} Photo 2`}
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <p
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: t(`PERSON.${translationKey}.TEXT_2`).replace(
                  /\n/g,
                  "<br>"
                ),
              }}
            />
          </div>
        </div>
      </section>

      <section className="text-center space-y-4">
        {/* TODO: add translation */}
        <h2 className="font-semibold text-matisse text-2xl lg:text-3xl">
          {t("PERSON_DETAIL.CONTACT.TITLE")}
        </h2>
        <div className="flex flex-col md:flex-row  gap-8 justify-center">
          {t(`PERSON.${translationKey}.WHATSAPP_1`) != "" && (
            <Button
              variant={"secondary"}
              onClick={() =>
                window.open(t(`PERSON.${translationKey}.WHATSAPP_1`), "_blank")
              }
            >
              <Icon name={"WhatsAppLogo"} className="fill-white" />
              <p>
                {`${t("PERSON_DETAIL.CONTACT.WHATSAPP")}${
                  t(`PERSON.${translationKey}.WHATSAPP_2`) !== ""
                    ? ` ${person.names[0]}`
                    : ""
                }`}
              </p>
            </Button>
          )}
          {t(`PERSON.${translationKey}.WHATSAPP_2`) != "" && (
            <Button
              variant={"secondary"}
              onClick={() =>
                window.open(t(`PERSON.${translationKey}.WHATSAPP_2`), "_blank")
              }
            >
              <Icon name={"WhatsAppLogo"} className="fill-white" />
              <p>{`${t("PERSON_DETAIL.CONTACT.WHATSAPP")}${
                t(`PERSON.${translationKey}.WHATSAPP_2`) !== ""
                  ? ` ${person.names[1]}`
                  : ""
              }`}</p>
            </Button>
          )}
          {t(`PERSON.${translationKey}.INSTAGRAM`) !== "" && (
            <Button
              variant={"secondary"}
              onClick={() =>
                window.open(t(`PERSON.${translationKey}.INSTAGRAM`), "_blank")
              }
            >
              <Icon name={"InstagramLogo"} className="fill-white" />
              <p>{t("PERSON_DETAIL.CONTACT.INSTAGRAM")}</p>
            </Button>
          )}
          {t(`PERSON.${translationKey}.EMAIL`) != "" && (
            <Button
              variant={"secondary"}
              onClick={() => {
                window.open(t(`PERSON.${translationKey}.EMAIL`));
              }}
            >
              <Icon name={"Envelop"} className="fill-white" />
              <p>{t("PERSON_DETAIL.CONTACT.EMAIL")}</p>
            </Button>
          )}
        </div>
      </section>
    </div>
  );
};
