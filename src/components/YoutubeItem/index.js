import React, { Component } from "react";

import { getYoutubeChannelData } from "../../api/youtube/getChannel";
import { ListItem } from "./styled";

export class YoutubeItem extends Component {
  componentDidMount() {
    const { id, custom_id } = this.props;

    getYoutubeChannelData(id, custom_id).then(({ data }) =>
      console.info("--> data ggwp 4444", data),
    );
  }

  render() {
    const { name } = this.props;

    return <ListItem>{name}</ListItem>;
  }
}
