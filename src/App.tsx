import { DefaultUi, Hls, Player } from "@vime/react";

// import video from "./assets/videos/1080p.mp4";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="player-container">
        <Player autoplay>
          {/* <Video>
            <source data-src={video} type="video/mp4" />
          </Video> */}
          <Hls poster="https://media.vimejs.com/poster.png">
            <source
              data-src="https://media.vimejs.com/hls/index.m3u8"
              type="application/x-mpegURL"
            />
          </Hls>
          <DefaultUi />
        </Player>
      </div>
    </div>
  );
}

export default App;
