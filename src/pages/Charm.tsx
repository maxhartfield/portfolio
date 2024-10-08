import Image from "../components/Image";
import fetch from "../images/fetch.png";
import decode from "../images/decode.png";
import execute from "../images/execute.png";
import mw from "../images/m&w.png";
import BackButton from "../components/BackButton";
function Charm() {
  return (
    <>
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <BackButton />
      <h1>chArm-v2 System Emulator</h1>
      <h3>
        In my computer architecture class at the University of Texas at Austin,
        I implemented a pipeline with cache simulator for chArm-v2 instruction
        set architecture using C. The instructions in this subset of Arm A64
        include LDUR, STUR, MOVK, MOVZ, ADRP, ADD, ADDS, SUB, SUBS, CMP, MVN,
        OR, EOR, ANDS, TST, LSL, LSR, UBFM, ASR, B, B.cond, BL, RET, NOP, and
        HLT. I programmed the five stages for each instruction: Fetch, Decode,
        Execute, Memory, and Writeback. I also handled the data and control
        hazards that come with this pipeline implementation.
      </h3>
      <br className="spacer" />
      <h2>Fetch</h2>
      <Image className="info-img" src={fetch}></Image>
      <h3>
        In the fetch stage, I took the current PC (program counter) and fetched
        the instruction associated with it.
      </h3>
      <br className="spacer" />
      <h2>Decode</h2>
      <Image className="info-img" src={decode}></Image>
      <h3>
        In the decode stage, I decoded the instruction to get the correct
        operation and I set the control signals for future stages.
      </h3>
      <br className="spacer" />
      <h2>Execute</h2>
      <Image className="info-img" src={execute}></Image>
      <h3>
        In the execute stage, I passed the instruction through the arithmetic
        logic unit and the operation actually gets performed.
      </h3>
      <br className="spacer" />
      <h2>Memory and Writeback</h2>
      <Image className="info-img" src={mw}></Image>
      <h3>
        In the memory stage, I accessed memory if it is needed to execute an
        instruction. I implemented a write back cache using LRU (Least Recently
        Used) replacement policy to improve the efficiency of this stage. In the
        writeback stage, I saved the result of the instruction.
      </h3>
      <br className="spacer" />
      <h3>
        I handled data and control hazards from the pipeline implementation by
        inserting bubble (NOP) and stall instructions. I also forwarded values
        from the execute, memory, and writeback stages back to decode.
      </h3>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}
export default Charm;
