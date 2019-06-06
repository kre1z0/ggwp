import React, { Component } from "react";

import youtubeList from "../assets/data/youtube";

class Youtube extends Component {
  render() {
    return (
      <div>
        {youtubeList.map(({ name, title, id, custom_id }) => (
          <div key={id || custom_id}>{name}</div>
        ))}
      </div>
    );
  }
}

export default Youtube;
