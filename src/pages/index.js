import React from "react";

import youtubeList from "../assets/data/youtube";
import { YoutubeItem } from "../components/YoutubeItem";
import { Player } from "../components/Player";
import { LeftSide, CenterSide, RightSide, UnorderedList } from "../styles";

const Index = ({ onSelectedChannel, selectedChannel }) => {
  console.info("--> selectedChannel ggwp 4444", selectedChannel);
  return (
    <>
      <LeftSide>LeftSide ggwp</LeftSide>
      <CenterSide>
        <Player />
      </CenterSide>
      <RightSide>
        <UnorderedList>
          {youtubeList.map(item => (
            <YoutubeItem
              key={item.id || item.custom_id}
              onSelectedChannel={onSelectedChannel}
              {...item}
            />
          ))}
        </UnorderedList>
      </RightSide>
    </>
  );
};

export default Index;
