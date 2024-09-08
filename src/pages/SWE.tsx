import Image from "../components/Image";
import TTS from "../images/TTS.png";

function SWE() {
  return (
    <>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <h1>Trauma Support Website</h1>
      <h3>
        In my software engineering class at the University of Texas at Austin, I
        created a dynamic trauma support website useing react. This project
        demonstrates my ability to develop full stack and practice common
        software engineering practices like testing and continuous integration.
      </h3>
      <Image className="info-img" src={TTS}></Image>
      <h3>...</h3>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
    </>
  );
}
export default SWE;
