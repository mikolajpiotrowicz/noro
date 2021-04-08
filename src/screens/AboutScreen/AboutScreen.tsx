import * as React from "react";
import { SectionHeading } from "../../styled/reusable";
import { Header1, RainbowText } from "../../styled/typography";
import {
  AboutWrapper,
  AboutContent,
  AboutCharter,
  Date,
  NewDate,
  AboutRow,
} from "./styled";
import { getStaticContent } from "../../services/static-file";
import { Text } from "../../styled/typography";
import { useTranslation } from "react-i18next";

export const AboutScreen = () => {
  const { t } = useTranslation();
  return (
    <div>
      <SectionHeading>
        <Header1>{t("pageHeading.about")}</Header1>
      </SectionHeading>
      <AboutWrapper>
        <AboutRow>
          <img src={getStaticContent("misc/me2.jpg")} alt="It's me!" />
          <AboutContent>
            <b>NORO ART</b> {t("aboutPage.me1")} <br /> {t("aboutPage.me2")}{" "}
            <br /> {t("aboutPage.me3")} <br /> {t("aboutPage.me4")} <br />
          </AboutContent>
        </AboutRow>
        <AboutRow>
          <img src={getStaticContent("misc/me3.jpg")} alt="It's me!" />
          <AboutContent>
            <AboutCharter>EXHIBITIONS</AboutCharter>
            <Date>
              <b>2019:</b>
            </Date>
            <Text>
              <b>{t("aboutPage.exhibition2019v1")}</b>
            </Text>
            <Date>
              <b>2018:</b>
            </Date>
            <Text>
              <b>{t("aboutPage.exhibition2018v1")}</b>
            </Text>
            <Text>
              <b>{t("aboutPage.exhibition2018v2")}</b>
            </Text>
            
            <AboutCharter>education</AboutCharter>
            <Text>
              <b>{t("aboutPage.educationData")}</b>
            </Text>
          </AboutContent>
        </AboutRow>
      </AboutWrapper>
    </div>
  );
};
