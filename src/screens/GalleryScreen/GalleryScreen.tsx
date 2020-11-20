import * as React from "react";
import { SectionHeading } from "../../styled/reusable";
import { Header1 } from "../../styled/typography";
import { Gallery } from "../../components/Gallery";
import { useTranslation } from "react-i18next";

export const GalleryScreen = () => {
  const { t } = useTranslation();
  return (
    <div>
      <SectionHeading>
        <Header1>{t("pageHeading.gallery")}</Header1>
      </SectionHeading>
      <Gallery />
    </div>
  );
};
