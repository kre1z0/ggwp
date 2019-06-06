import axios from "axios";

import { SEARCH_REQUEST, NUMBER_OF_VIDEOS } from "./";

export const getYoutubeChannelVideos = id => {
  const url = `${SEARCH_REQUEST}maxResults=${NUMBER_OF_VIDEOS}&channelId=${id}&order=date`;
  return axios
    .get(url)
    .then(response => response)
    .catch(error => console.error(error));
};
