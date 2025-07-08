import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { CustomAvatar } from "./CustomAvatar";
import { useTranslation } from "react-i18next";
import { Language } from "@/_translations/i18n";
import { cn } from "@/lib/utils";
import { useTheme } from "@/_context/ThemeProvider";
import familyPhoto from "@/_assets/_images/familyPhotoBornem.jpg";
import avatarBrent from "@/_assets/_images/avatarBrent.jpg";
import avatarDebora from "@/_assets/_images/avatarDebora.jpg";
import avatarDavid from "@/_assets/_images/avatarDavid.jpg";
import logoConvention from "@/_assets/_images/logoConvention.png";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const NavBar = () => {
  const { i18n, t } = useTranslation();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div
      className="w-full sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
      ref={mobileMenuRef}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center">
            <img
              src={logoConvention}
              alt="Convention Logo"
              className="h-24 w-auto hover:opacity-80 transition-opacity ml-4"
            />
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">
                  {t("NAV_BAR.NAVIGATION.HOME")}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {t("NAV_BAR.NAVIGATION.FAMILY.TITLE")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[500px] grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md relative overflow-hidden"
                          href="/"
                        >
                          <div
                            className={cn(
                              "absolute inset-0 bg-cover bg-center",
                              resolvedTheme === "light"
                                ? "opacity-40"
                                : "opacity-20"
                            )}
                            style={{
                              backgroundImage: `url(${familyPhoto})`,
                            }}
                          ></div>
                          <div className="relative z-10 mb-2 mt-4 text-lg font-medium">
                            {t("NAV_BAR.NAVIGATION.FAMILY.SUB_TITLE")}
                          </div>
                          <p
                            className={cn(
                              "relative z-10 text-sm leading-tight",
                              resolvedTheme === "light"
                                ? "text-foreground"
                                : "text-muted-foreground"
                            )}
                          >
                            {t("NAV_BAR.NAVIGATION.FAMILY.DESCRIPTION")}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/convention-2025-belgium-fam-van-hese/person/david"
                        >
                          <div className="flex items-center gap-2">
                            <CustomAvatar
                              name="David"
                              fallBackUrl="DA"
                              imageUrl={avatarDavid}
                            />
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/convention-2025-belgium-fam-van-hese/person/debora"
                        >
                          <div className="flex items-center gap-2">
                            <CustomAvatar
                              name="Debora"
                              fallBackUrl="DE"
                              imageUrl={avatarDebora}
                            />
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/convention-2025-belgium-fam-van-hese/person/brent"
                        >
                          <div className="flex items-center gap-2">
                            <CustomAvatar
                              name="Brent"
                              fallBackUrl="BR"
                              imageUrl={avatarBrent}
                            />
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {t("NAV_BAR.SETTINGS.LANGUAGE.TITLE")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 w-[180px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left",
                            i18n.language === Language.en &&
                              "bg-accent text-accent-foreground"
                          )}
                          disabled={i18n.language === Language.en}
                          onClick={() => i18n.changeLanguage(Language.en)}
                        >
                          <div className="flex items-center justify-between gap-2">
                            {t("NAV_BAR.SETTINGS.LANGUAGE.EN")}
                            {i18n.language === Language.en && (
                              <span className="text-xs">✓</span>
                            )}
                          </div>
                        </button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left",
                            i18n.language === Language.nl &&
                              "bg-accent text-accent-foreground"
                          )}
                          disabled={i18n.language === Language.nl}
                          onClick={() => i18n.changeLanguage(Language.nl)}
                        >
                          <div className="flex items-center justify-between gap-2">
                            {t("NAV_BAR.SETTINGS.LANGUAGE.NL")}
                            {i18n.language === Language.nl && (
                              <span className="text-xs">✓</span>
                            )}
                          </div>
                        </button>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {t("NAV_BAR.SETTINGS.THEME.TITLE")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 w-[180px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left",
                            theme === "system" &&
                              "bg-accent text-accent-foreground"
                          )}
                          disabled={theme === "system"}
                          onClick={() => setTheme("system")}
                        >
                          <div className="flex items-center justify-between gap-2">
                            {t("NAV_BAR.SETTINGS.THEME.SYSTEM")}
                            {theme === "system" && (
                              <span className="text-xs">✓</span>
                            )}
                          </div>
                        </button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left",
                            theme === "light" &&
                              "bg-accent text-accent-foreground"
                          )}
                          disabled={theme === "light"}
                          onClick={() => setTheme("light")}
                        >
                          <div className="flex items-center justify-between gap-2">
                            {t("NAV_BAR.SETTINGS.THEME.LIGHT")}
                            {theme === "light" && (
                              <span className="text-xs">✓</span>
                            )}
                          </div>
                        </button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left",
                            theme === "dark" &&
                              "bg-accent text-accent-foreground"
                          )}
                          disabled={theme === "dark"}
                          onClick={() => setTheme("dark")}
                        >
                          <div className="flex items-center justify-between gap-2">
                            {t("NAV_BAR.SETTINGS.THEME.DARK")}
                            {theme === "dark" && (
                              <span className="text-xs">✓</span>
                            )}
                          </div>
                        </button>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center px-4 py-2">
        <a href="/" className="flex items-center">
          <img
            src={logoConvention}
            alt="Convention Logo"
            className="h-20 w-auto"
          />
        </a>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {/* Navigation Section */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {t("NAV_BAR.NAVIGATION.TITLE")}
              </div>
              <div className="space-y-2">
                <a
                  href="/"
                  className="block py-2 px-3 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("NAV_BAR.NAVIGATION.HOME")}
                </a>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground px-3">
                    {t("NAV_BAR.NAVIGATION.FAMILY.TITLE")}
                  </div>
                  <div className="pl-6 space-y-1">
                    <a
                      href="/convention-2025-belgium-fam-van-hese/person/david"
                      className="flex items-center gap-2 py-2 px-3 rounded-md text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <CustomAvatar
                        name="David"
                        fallBackUrl="DA"
                        imageUrl={avatarDavid}
                      />
                    </a>
                    <a
                      href="/convention-2025-belgium-fam-van-hese/person/debora"
                      className="flex items-center gap-2 py-2 px-3 rounded-md text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <CustomAvatar
                        name="Debora"
                        fallBackUrl="DE"
                        imageUrl={avatarDebora}
                      />
                    </a>
                    <a
                      href="/convention-2025-belgium-fam-van-hese/person/brent"
                      className="flex items-center gap-2 py-2 px-3 rounded-md text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <CustomAvatar
                        name="Brent"
                        fallBackUrl="BR"
                        imageUrl={avatarBrent}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-border my-4"></div>

            {/* Settings Section */}
            <div className="space-y-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {t("NAV_BAR.SETTINGS.TITLE")}
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground px-3">
                    {t("NAV_BAR.SETTINGS.LANGUAGE.TITLE")}
                  </div>{" "}
                  <div className="pl-6 space-y-1">
                    <button
                      className={cn(
                        "flex items-center w-full py-2 px-3 rounded-md text-sm text-left transition-colors",
                        i18n.language === Language.en
                          ? "bg-accent text-accent-foreground cursor-default"
                          : "text-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                      disabled={i18n.language === Language.en}
                      onClick={() => {
                        i18n.changeLanguage(Language.en);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {t("NAV_BAR.SETTINGS.LANGUAGE.EN")}
                      {i18n.language === Language.en && (
                        <span className="ml-auto text-xs">✓</span>
                      )}
                    </button>
                    <button
                      className={cn(
                        "flex items-center w-full py-2 px-3 rounded-md text-sm text-left transition-colors",
                        i18n.language === Language.nl
                          ? "bg-accent text-accent-foreground cursor-default"
                          : "text-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                      disabled={i18n.language === Language.nl}
                      onClick={() => {
                        i18n.changeLanguage(Language.nl);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {t("NAV_BAR.SETTINGS.LANGUAGE.NL")}
                      {i18n.language === Language.nl && (
                        <span className="ml-auto text-xs">✓</span>
                      )}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground px-3">
                    {t("NAV_BAR.SETTINGS.THEME.TITLE")}
                  </div>
                  <div className="pl-6 space-y-1">
                    <button
                      className={cn(
                        "flex items-center w-full py-2 px-3 rounded-md text-sm text-left transition-colors",
                        theme === "system"
                          ? "bg-accent text-accent-foreground cursor-default"
                          : "text-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                      disabled={theme === "system"}
                      onClick={() => {
                        setTheme("system");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {t("NAV_BAR.SETTINGS.THEME.SYSTEM")}
                      {theme === "system" && (
                        <span className="ml-auto text-xs">✓</span>
                      )}
                    </button>
                    <button
                      className={cn(
                        "flex items-center w-full py-2 px-3 rounded-md text-sm text-left transition-colors",
                        theme === "light"
                          ? "bg-accent text-accent-foreground cursor-default"
                          : "text-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                      disabled={theme === "light"}
                      onClick={() => {
                        setTheme("light");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {t("NAV_BAR.SETTINGS.THEME.LIGHT")}
                      {theme === "light" && (
                        <span className="ml-auto text-xs">✓</span>
                      )}
                    </button>
                    <button
                      className={cn(
                        "flex items-center w-full py-2 px-3 rounded-md text-sm text-left transition-colors",
                        theme === "dark"
                          ? "bg-accent text-accent-foreground cursor-default"
                          : "text-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                      disabled={theme === "dark"}
                      onClick={() => {
                        setTheme("dark");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {t("NAV_BAR.SETTINGS.THEME.DARK")}
                      {theme === "dark" && (
                        <span className="ml-auto text-xs">✓</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
