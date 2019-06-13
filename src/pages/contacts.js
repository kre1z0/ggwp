import React from "react";

import { People } from "../components/Icons/People";
import { Location } from "../components/Icons/Location";
import { Developer } from "../components/Icons/Developer";
import { Github } from "../components/Icons/Github";
import { Email } from "../components/Icons/Email";
import { Telegram } from "../components/Icons/Telegram";
import {
  Container,
  Tags,
  Block,
  Photo,
  Name,
  ContactLink,
  Fields,
  Field,
} from "../styles/contacts";

const Contacts = () => {
  return (
    <Container>
      <Block>
        <Photo src="https://avatars1.githubusercontent.com/u/10591102?s=460&v=4" alt="photo" />
        <Fields>
          <Field Icon={Developer} name="profession" value="GIS Front-end developer" />
          <Field Icon={People} name="company" value="Everpoint" />
          <Field Icon={Location} name="location" value="Ukraine, Khmelnytskyi" />
          <Field Icon={Github} name="github" value="https://github.com/kre1z0" />
          <Tags
            tags={[
              "react",
              "ES6",
              "typescript",
              "git",
              "redux",
              "jest",
              "npm",
              "webpack",
              "rollup",
              "css",
              "leaflet",
              "canvas",
              "svg",
              "gatsby",
              "netlify-cms",
              "youtube api",
              "twitch api",
            ]}
          />
        </Fields>
      </Block>
      <Name>Igor Ivchuk</Name>
      <ContactLink href="mailto:thekreizo@gmail.com">
        <Email /> thekreizo@gmail.com
      </ContactLink>
      <br />
      <ContactLink href="tg://resolve?domain=kreizo">
        <Telegram /> telegram
      </ContactLink>
    </Container>
  );
};

export default Contacts;
