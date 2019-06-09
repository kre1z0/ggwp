import React, { PureComponent } from "react";

import { getYoutubeChannelData } from "../../api/youtube/getChannel";
import { ListItem } from "./styled";

export class YoutubeItem extends PureComponent {
  state = {
    channel: null,
  };

  componentDidMount() {
    const { id, custom_id } = this.props;

    getYoutubeChannelData(id, custom_id).then(({ data }) => this.setState({ channel: data }));
  }

  render() {
    const { channel } = this.state;
    const { name, onSelectedChannel } = this.props;

    return <ListItem onClick={() => onSelectedChannel(channel)}>{name}</ListItem>;
  }
}
