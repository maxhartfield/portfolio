import Project from "../components/Project";
import DMA from "../images/DMA.png";
import charm from "../images/charm.png";
import BackButton from "../components/BackButton";

function CompArch() {
  return (
    <>
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <BackButton />
      <div className="container">
        <div className="row">
          <div className="col">
            <Project
              name="chArm-v2 System Emulator"
              image={charm}
              skills={[
                "C",
                "Collaborative",
                "Computer Architecture",
                "Assembly",
                "Cache",
                "Pipeline",
              ]}
              link="/Projects/CompArch/chArm"
            ></Project>
          </div>
          <div className="col">
            <Project
              name="Dynamic Memory Allocator"
              image={DMA}
              skills={[
                "C",
                "Collaborative",
                "Linked List",
                "Heap",
                "Computer Architecture",
                "Operating System",
              ]}
              link="/Projects/CompArch/Dynamic-Memory-Allocator"
            ></Project>
          </div>
        </div>
      </div>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}

export default CompArch;
