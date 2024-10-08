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
      <a
        href="../resume.pdf"
        download="Max_Hartfield_Resume.pdf"
        className="btn btn-primary mt-3"
      >
        Download PDF
      </a>
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}
export default Resume;
