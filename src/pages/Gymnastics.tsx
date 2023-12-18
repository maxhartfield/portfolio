import { Player } from "video-react";
import ScrollToTop from "../components/ScrollToTop";
const video1 = require("../videos/GymnasticsVideo1.mov");
const video2 = require("../videos/GymnasticsVideo2.mov");
const video3 = require("../videos/GymnasticsVideo3.mov");
const video4 = require("../videos/GymnasticsVideo4.mov");
function Gymnastics() {
  return (
    <>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <h1>Gymnastics National Qualifier</h1>
      <h3>
        I have done gymnastics for 13 years of my life. Although I retired after
        senior year of high school, gymnastics still played a major part in my
        life and instilled skills like dedication, persistence, and time
        management. Gymnastics is a time consuming and physicaly demanding
        sport, and it was very difficult to manage school and 20 hours of
        gymnastics a week. Despite fracturing my spine twice, I recovered and
        eventually qualified for nationals. Here are some of my highlights:
      </h3>
      <div className="spacer">.........</div>
      <div className="video">
        <Player playsInline src={video4} />
      </div>
      <div className="spacer">.........</div>
      <div className="video">
        <Player playsInline src={video2} />
      </div>
      <div className="spacer">.........</div>
      <div className="video">
        <Player playsInline src={video1} />
      </div>
      <div className="spacer">.........</div>
      <div className="video">
        <Player playsInline src={video3} />
      </div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
    </>
  );
}
export default Gymnastics;
