import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 top-16 bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 text-6xl">🏠</div>
          <CardTitle className="text-2xl font-bold">
            {t("NOT_FOUND.TITLE", "404 - Page Not Found")}
          </CardTitle>
          <CardDescription className="text-lg">
            {t(
              "NOT_FOUND.DESCRIPTION",
              "Oops! The page you're looking for doesn't exist."
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            {t(
              "NOT_FOUND.MESSAGE",
              "It seems like you've wandered off the path. Let's get you back home!"
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link to="/">{t("NOT_FOUND.GO_HOME", "Go Home")}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
