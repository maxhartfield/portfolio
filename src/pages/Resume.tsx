import BackButton from "../components/BackButton";
import Image from "../components/Image";
import resume from "../images/Resume.png";
function Resume() {
  return (
    <>
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <BackButton />
      <h1>Resume</h1>
      <Image className="info-img" src={resume}></Image>
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}
export default Resume;
