import BackButton from "../components/BackButton";
import Image from "../components/Image";
import CommunityCoding1 from "../images/Community-Coding.png";
function CommunityCoding() {
  return (
    <>
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <BackButton />
      <h1>Community Coding</h1>
      <h3 className="mx-3 mx-md-5">
        I offered free Java lessons to members of the community in collaboration
        with Professor Jey Veerasamy of UT-Dallas. These problems were held over
        zoom and featured a variety of Java problems that help kids learn Java
        and problem solving skills. This achievement demonstrates my ability to
        communicate effectively and my passion for coding.
      </h3>
      <Image className="info-img" src={CommunityCoding1}></Image>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}
export default CommunityCoding;
