import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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

export const NavBar = () => {
  const { i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full flex justify-between items-center px-4 py-2">
      <div className="flex items-center gap-6">
        <a href="/" className="flex items-center">
          <img
            src={logoConvention}
            alt="Convention Logo"
            className="h-24 w-auto hover:opacity-80 transition-opacity"
          />
        </a>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Family</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md relative overflow-hidden"
                        href="/"
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-20"
                          style={{
                            backgroundImage: `url(${familyPhoto})`,
                          }}
                        ></div>
                        <div className="relative z-10 mb-2 mt-4 text-lg font-medium">
                          Family Van Hese
                        </div>
                        <p className="relative z-10 text-sm leading-tight text-muted-foreground">
                          Meet the family members
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
              <NavigationMenuTrigger>Language</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 w-[200px]">
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
                        <div className="flex items-center gap-2">English</div>
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
                        <div className="flex items-center gap-2">
                          Nederlands
                        </div>
                      </button>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Theme</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 w-[200px]">
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
                        <div className="flex items-center gap-2">System</div>
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
                        <div className="flex items-center gap-2">Light</div>
                      </button>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <button
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left",
                          theme === "dark" && "bg-accent text-accent-foreground"
                        )}
                        disabled={theme === "dark"}
                        onClick={() => setTheme("dark")}
                      >
                        <div className="flex items-center gap-2">Dark</div>
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
  );
};
