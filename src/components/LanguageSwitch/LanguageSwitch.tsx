import * as React from "react";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./styled";

export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <LanguageToggle
        isActive={i18n.language === "pl"}
        onClick={() => i18n.changeLanguage("pl")}
      >
        PL
      </LanguageToggle>
      <LanguageToggle
        isActive={i18n.language === "en"}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </LanguageToggle>
    </>
  );
};
