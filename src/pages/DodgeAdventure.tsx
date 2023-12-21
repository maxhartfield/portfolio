import { Player } from "video-react";
const video = require("../videos/Dodge-Adventure.mov");
function DodgeAdventure() {
  return (
    <>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <h1>Dodge Adventure</h1>
      <h3>
        Dodge Adventure is a game I created in Java using Graphics2D where a red
        square acts as a player and must move (WASD or arrow keys) to the end of
        the screen while dodging blue obstacles and avoiding the black walls.
        There are seven unique levels that get increasingly harder. I enabled
        the user to change the speed of the player to make the game easier or
        harder. I implemented a death and coin counter to encourage
        replayability and competition. This project demonstates my ability to
        code in Java and create a game from scratch.
      </h3>
      <div className="spacer">.........</div>
      <video className="video" controls>
        <source src={video + "#t=0.001"} type="video/mp4"></source>
      </video>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
    </>
  );
}
export default DodgeAdventure;
