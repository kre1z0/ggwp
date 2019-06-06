import React from "react";

import youtubeList from "../assets/data/youtube";
import { YoutubeItem } from "../components/YoutubeItem";
import { UnorderedList } from "../styles/youtube";

const Index = () => {
  return (
    <UnorderedList>
      {youtubeList.map(item => (
        <YoutubeItem key={item.id || item.custom_id} {...item} />
      ))}
    </UnorderedList>
  );
};

export default Index;
