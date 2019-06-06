import axios from "axios";

import { CHANNEL_REQUEST } from "./";
import { getYoutubeChannelVideos } from "./getVideos";

export const getYoutubeChannelData = (id, customId) => {
  const url = customId
    ? `${CHANNEL_REQUEST}forUsername=${customId}&maxResults=15`
    : `${CHANNEL_REQUEST}id=${id}&maxResults=15`;

  return axios
    .get(url)
    .then(({ data }) => {
      if (data.items.length > 0) {
        return getYoutubeChannelVideos(data.items[0].id);
      } else {
        return { data: null };
      }
    })
    .catch(error => console.error(error));
};
