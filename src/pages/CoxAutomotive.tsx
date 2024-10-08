import BackButton from "../components/BackButton";
import CoxPresentation from "../images/CoxPresentation.jpeg";
import Image from "../components/Image";
function CoxAutomotive() {
  return (
    <>
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <BackButton />
      <h1>Software Engineer Intern at Cox Automotive</h1>
      <h3 className="mx-3 mx-md-5">
        During the summer of 2024, I completed my first software engineering
        internship. Cox Automotive was a great oppurtunity for me to learn how
        developers use agile development to push code to production. The company
        was amazing and the people were very supportive. I expanded my
        programming skills in the frontend and backend and got exposure to
        Stencil.js, .NET, C#, AWS, Terraform, Github Actions, and much more.
        This internship boosted my confidence as a programmer as I transitioned
        from the fundamentals taught in school to real world experiences. It
        also made me even more sure that software engineering is the path I want
        to take in the future. Here is my final presentation from my internship
        that highlights what I worked on during the 12 weeks:
      </h3>
      <Image className="info-img" src={CoxPresentation}></Image>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}
export default CoxAutomotive;
