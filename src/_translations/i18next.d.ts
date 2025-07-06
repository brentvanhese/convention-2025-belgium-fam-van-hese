import resources from "./resources";
import "i18next";

// Only need to import 1 file because keys are the same for all languages
declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof resources;
  }
}
