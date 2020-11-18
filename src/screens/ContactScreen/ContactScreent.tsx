import * as React from "react";
import { SectionHeading } from "../../styled/reusable";
import { Header1, RainbowText } from "../../styled/typography";
import { ContactWrapper, ContactInfo } from "./styled";
import { getStaticContent } from "../../services/static-file";

export const ContactScreen: React.FC = () => {
  return (
    <>
      <SectionHeading>
        <Header1>
          Have Something in Mind? <br />
          Don’t Hesitate to Get in Touch.
        </Header1>
      </SectionHeading>
      <ContactWrapper>
        <img src={getStaticContent("misc/me1.jpg")} />
        <ContactInfo>
          For general inquiries / interviews: <br />
          <RainbowText><b>noroart.contact@gmail.com</b></RainbowText>
          Currently working and living in <br />
          Wrocław, Poland
        </ContactInfo>
      </ContactWrapper>
    </>
  );
};
