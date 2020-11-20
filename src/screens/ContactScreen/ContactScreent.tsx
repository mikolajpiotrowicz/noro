import * as React from "react";
import { SectionHeading } from "../../styled/reusable";
import { Header1, RainbowText } from "../../styled/typography";
import { ContactWrapper, ContactInfo } from "./styled";
import { getStaticContent } from "../../services/static-file";
import { useTranslation } from "react-i18next";

export const ContactScreen: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionHeading>
        <Header1>
          {t("pageHeading.contactR1")}
          <br />
          {t("pageHeading.contactR2")}
        </Header1>
      </SectionHeading>
      <ContactWrapper>
        <img src={getStaticContent("misc/me1.jpg")} />
        <ContactInfo>
          {t("contactPage.row1")}
          <br />
          <RainbowText>
            <b>noroart.contact@gmail.com</b>
          </RainbowText>
          {t("contactPage.row2")}
        </ContactInfo>
      </ContactWrapper>
    </>
  );
};
