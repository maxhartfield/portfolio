import BackButton from "../components/BackButton";
import Image from "../components/Image";
import UTCSShell1 from "../images/UTCSShell.png";
function UTCSShell() {
  return (
    <>
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <BackButton />
      <h1>UTCS Shell</h1>
      <h3>
        In my operating systems class at the University of Texas at Austin, I
        built simple, fully-functioning Unix shell in C. This project
        demonstrates my ability to code in C and my understanding of how a shell
        operates in the OS.
      </h3>
      <Image className="info-img" src={UTCSShell1}></Image>
      <h3>
        I implemented built in commands of cd, exit, and path, and external
        commands that run from PATH which is default set to /bin. I also allowed
        the shell to support scripts, output redirection, and concurrent
        commands.
      </h3>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}
export default UTCSShell;
