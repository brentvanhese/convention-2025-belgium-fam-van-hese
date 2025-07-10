import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

import sintNiklaasPhoto from "@/_assets/_images/sintNiklaas.jpg";
import Icon from "@/_components/Icon";

export const PersonDetail = () => {
  const { t } = useTranslation();
  const params = useParams<{ name: string }>();

  console.log("PersonDetail params:", params.name);
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <header className="text-center space-y-6">
        <Avatar className="mx-auto w-32 h-32">
          <AvatarImage src="@./src" />
          <AvatarFallback className="text-2xl font-semibold">
            {params.name?.slice(0, 2).toUpperCase() || "DD"}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h1 className="text-3xl lg:text-4xl font-bold text-matisse">
            {params.name || "Person"}
          </h1>
        </div>
      </header>

      <section className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {t("HOME.SINT_NIKLAAS.DESCRIPTION")}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={sintNiklaasPhoto}
              alt="Family Photo"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1 flex justify-center">
            <img
              src={sintNiklaasPhoto}
              alt="Personal Photo"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {t("HOME.SINT_NIKLAAS.DESCRIPTION")}
            </p>
          </div>
        </div>
      </section>

      <section>
        <Icon name={"WhatsAppLogo"} className="fill-black" />
      </section>
    </div>
  );
};
