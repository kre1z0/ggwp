import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  ViberShareButton,
  ViberIcon,
  VKShareButton,
  VKIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

import { ShareContainer } from "./styled";

const socials = [
  {
    name: "telegram",
    Button: TelegramShareButton,
    Icon: TelegramIcon,
  },
  {
    quote: "facebook",
    Button: FacebookShareButton,
    Icon: FacebookIcon,
  },
  {
    name: "vk",
    Button: VKShareButton,
    Icon: VKIcon,
  },
  {
    name: "viber",
    Button: ViberShareButton,
    Icon: ViberIcon,
  },
  {
    name: "whatsapp",
    Button: WhatsappShareButton,
    Icon: WhatsappIcon,
  },
  {
    name: "twitter",
    Button: TwitterShareButton,
    Icon: TwitterIcon,
  },
];

export const Share = ({ url, twitterHandle }) => {
  return (
    <ShareContainer>
      {socials.map(({ name, quote, Button, Icon }) => (
        <Button
          key={name || quote}
          url={url}
          title={name}
          quote={quote}
          via={name === "twitter" && twitterHandle ? twitterHandle.split("@").join("") : null}
        >
          <Icon size={32} />
        </Button>
      ))}
    </ShareContainer>
  );
};
