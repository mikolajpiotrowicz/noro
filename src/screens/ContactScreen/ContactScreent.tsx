import * as React from "react";
import { SectionHeading } from "../../styled/reusable";
import { Header1 } from "../../styled/typography";
import { ContactWrapper, ContactInfo } from "./styled";
import { getStaticContent } from "../../services/static-file";

export const ContactScreen = () => {
  return (
    <div>
      <SectionHeading>
        <Header1>
          Have Something in Mind? <br />
          Don’t Hesitate to Get in Touch.
        </Header1>
      </SectionHeading>
      <ContactWrapper>
        <img src={getStaticContent("2020/10/me1.jpg")} />
        <ContactInfo>
          For general inquiries / interviews: <br />
          <b>noroart.contact@gmail.com</b>
          <br />
          <br />
          Currently working and living in <br />
          Wrocław, Poland
        </ContactInfo>
      </ContactWrapper>
    </div>
  );
};
