import BackButton from "../components/BackButton";

const video1 = require("../videos/GymnasticsVideo1.mov");
const video2 = require("../videos/GymnasticsVideo2.mov");
const video3 = require("../videos/GymnasticsVideo3.mov");
const video4 = require("../videos/GymnasticsVideo4.mov");
function Gymnastics() {
  return (
    <>
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <BackButton />
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
      <br className="spacer" />
      <video className="video" controls>
        <source src={video4 + "#t=0.001"}></source>
      </video>
      <br className="spacer" />
      <div className="video">
        <video className="video" controls>
          <source src={video2 + "#t=0.001"}></source>
        </video>
      </div>
      <br className="spacer" />
      <div className="video">
        <video className="video" controls>
          <source src={video1 + "#t=0.001"}></source>
        </video>
      </div>
      <br className="spacer" />
      <div className="video">
        <video className="video" controls>
          <source src={video3 + "#t=0.001"}></source>
        </video>
      </div>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}
export default Gymnastics;
