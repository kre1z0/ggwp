import React from "react";

import { isMobile } from "../utils/browser";
import { People } from "../components/Icons/People";
import { Location } from "../components/Icons/Location";
import { Developer } from "../components/Icons/Developer";
import { Github } from "../components/Icons/Github";
import { Email } from "../components/Icons/Email";
import { Telegram } from "../components/Icons/Telegram";
import projects from "../assets/data/projects";
import {
  Container,
  Tags,
  Block,
  ContactsBlock,
  ContactsLeftSide,
  ContactsRightSide,
  PhotoLink,
  Photo,
  Name,
  ContactLink,
  Fields,
  Field,
  Table,
} from "../styles/about";

const github = "https://github.com/kre1z0";

const Contacts = () => (
  <ContactsBlock>
    <ContactsLeftSide>
      <Name>Igor Ivchuk</Name>
      <br />
      <ContactLink href="mailto:thekreizo@gmail.com">
        <Email /> thekreizo@gmail.com
      </ContactLink>
      <br />
      <ContactLink href="tg://resolve?domain=kreizo">
        <Telegram /> telegram
      </ContactLink>
    </ContactsLeftSide>
    <ContactsRightSide>
      CSS-архиепископ, гуру каскадного программирования. Это мой личный блог в котором я пишу на
      любые темы.
    </ContactsRightSide>
  </ContactsBlock>
);

const About = () => {
  return (
    <Container>
      <Block>
        <PhotoLink href={github} target="_blank">
          <Photo />
        </PhotoLink>
        {isMobile() && <Contacts />}
        <Fields>
          <Field Icon={Developer} name="profession" value="GIS front-end developer" />
          <Field Icon={People} name="company" value="Everpoint" />
          <Field Icon={Location} name="location" value="Ukraine, Khmelnytskyi" />
          <Field Icon={Github} name="github" value={github} />
          <Tags
            tags={[
              "react.js",
              "ES6",
              "typescript",
              "git",
              "redux",
              "jest",
              "npm",
              "webpack",
              "rollup",
              "lodash",
              "css",
              "leaflet",
              "canvas",
              "svg",
              "gatsby",
              "styled-components",
              "netlify-cms",
              "youtube api",
              "twitch api",
            ]}
          />
        </Fields>
      </Block>
      {!isMobile() && <Contacts />}
      <Table
        cellWidth={[20, 8, 8, 30]}
        headers={["Проект", "Repo", "Demo", "Технологии", "Описание"]}
        data={projects}
      />
    </Container>
  );
};

export default About;
