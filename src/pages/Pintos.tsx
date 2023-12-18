import Image from "../components/Image";
import Threads from "../images/Threads.png";
import UserPrograms from "../images/UserPrograms.png";
import VM from "../images/VM.png";
import FS from "../images/FS.png";

function Pintos() {
  return (
    <>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <h1>Pintos</h1>
      <h3>
        Pintos is a simple operating system framework for the 80x86
        architecture. It supports kernel threads, loading and running user
        programs, and a file system. In my operating systems class at the
        University of Texas at Austin, I adjusted threads to handle priority
        scheduling and priority donation, implemented argument passing and 18
        system calls for user programs to call upon, allowed stack growth and
        virtual memory with paging, and strengthened the file system to handle
        indexed and extensible files and subdirectories. I also handled
        synchronization for all of these features throughout the project. This
        project demonstrates my understanding of operating systems and how they
        are implemented.
      </h3>
      <div className="spacer">.........</div>
      <h2>Threads</h2>
      <Image className="info-img" src={Threads}></Image>
      <h3>
        In the threads portion of this project, I added a priority variable to
        the thread's TCB (Thread control block) and changed the ready queue to
        be sorted by a thread's priority. I also implemented a method to set the
        priority of a thread. Priority inversion, the problem when a low
        priority thread holds a mutex that a higher priority thread needs, is
        solved by priority donation. The higher priority thread donates its
        priority to the lower priority thread in order to get hold of the mutex
        it needs as fast as possible.
      </h3>
      <div className="spacer">.........</div>
      <h2>User Programs</h2>
      <Image className="info-img bigger" src={UserPrograms}></Image>
      <h3>
        In the user programs portion of this project, I created system calls
        needed to execute user programs like halt, exit, exec, wait, create,
        remove, open, filesize, read, write, seek, tell, and close. I also
        allocated one page for the stack for each user program and implemented
        argument passing so the user can successfully make the system calls.
      </h3>
      <div className="spacer">.........</div>
      <h2>Virtual Memory</h2>
      <Image className="info-img bigger" src={VM}></Image>
      <h3>
        In the virtual memory portion of this project, I extended my user
        program implementation to account for stack growth. I also implemented
        paging with a supplemental page table, a frame table, and a swap table.
        The frame table evicts pages based off the enhanced clock algorithm,
        which accounts for dirty pages as well as recently used pages. I allowed
        for dirty pages to be evicted to the swap partition of disk. I
        implemented demand paging, where pages get added to physical memory in a
        page fault when they are accessed.
      </h3>
      <div className="spacer">.........</div>
      <h2>File Systems</h2>
      <Image className="info-img bigger" src={FS}></Image>
      <h3>
        In the file systems portion of this project, I adjusted the file system
        to be a multilevel indexed structure with 10 direct blocks, 1 indirect
        block, and 1 double indirect block. I designed this structure to support
        files of all types of sizes. The maximum file size supported by this
        structure is 8459264 bytes. I also updated the write method to account
        for writes that extend a file. I added a current working directory to
        each thread and implemented system calls like chdir, mkdir, readdir,
        isdir, and inumber in order to allow the file system to support
        subdirectories.
      </h3>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
    </>
  );
}
export default Pintos;
