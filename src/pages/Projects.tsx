import React from "react";
import { Card, Row, Col, Ratio } from "react-bootstrap";
import { Link, Routes, Route, useParams } from "react-router-dom";

const projects = [
  {
    id: "tts",
    title: "Trauma Support Website",
    image: require("../images/TTS.png"),
    link: "/projects/tts",
    tags: ["React", "Full Stack", "AWS"],
    description: "A dynamic React.js website hosted on AWS Amplify to aid trauma survivors."
  },
  {
    id: "chess-website",
    title: "Chess Website",
    image: require("../images/Chess-Website.png"),
    link: "/projects/chess-website",
    tags: ["JavaScript", "HTML", "CSS"],
    description: "A website for two people to play chess on the same computer."
  },
  {
    id: "easy-cook",
    title: "Easy Cook",
    image: require("../images/cook.png"),
    link: "/projects/easy-cook",
    tags: ["Flutter", "Dart", "OpenAI API"],
    description: "A mobile app to track calories and generate recipes using AI."
  },
  {
    id: "os",
    title: "OS Projects",
    image: require("../images/OS.png"),
    link: "/projects/os",
    tags: ["C", "Operating System"],
    description: "Operating system projects including Pintos and UTCS Shell."
  },
  {
    id: "comparch",
    title: "Computer Architecture",
    image: require("../images/charm.png"),
    link: "/projects/comparch",
    tags: ["C", "Computer Architecture"],
    description: "Projects from computer architecture class, including chArm-v2 emulator."
  },
  {
    id: "dodge-adventure",
    title: "Dodge Adventure",
    image: require("../images/Dodge-Adventure.png"),
    link: "/projects/dodge-adventure",
    tags: ["Java", "Game Design"],
    description: "A Java game where you dodge obstacles and reach the end."
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    image: require("../images/Portfolio.png"),
    link: "/projects/portfolio-website",
    tags: ["React.js", "TypeScript", "Bootstrap"],
    description: "This portfolio website, built with React and Bootstrap."
  }
];

const osSubProjects = [
  {
    id: "pintos",
    title: "Pintos",
    image: require("../images/OS.png"),
    tags: ["C", "Operating System", "Synchronization", "Threads", "User Programs", "Virtual Memory", "File Systems"],
    description: "Pintos is a simple operating system framework for the 80x86 architecture. Kernel threads, user programs, file system, and more.",
  },
  {
    id: "utcs-shell",
    title: "UTCS Shell",
    image: require("../images/UTCSShell.png"),
    tags: ["C", "Linux", "Unix", "Concurrency", "Paralellism", "Operating System"],
    description: "A simple, fully-functioning Unix shell in C. Built-in and external commands, scripts, redirection, concurrency.",
  }
];

const compArchSubProjects = [
  {
    id: "charm",
    title: "chArm-v2 System Emulator",
    image: require("../images/charm.png"),
    tags: ["C", "Collaborative", "Computer Architecture", "Assembly", "Cache", "Pipeline"],
    description: "Pipeline and cache simulator for chArm-v2 ISA. Handles hazards, forwarding, and LRU cache.",
  },
  {
    id: "dma",
    title: "Dynamic Memory Allocator",
    image: require("../images/DMA.png"),
    tags: ["C", "Collaborative", "Linked List", "Heap", "Computer Architecture", "Operating System"],
    description: "Dynamic memory allocator in C using a free list and coalescing. Implements malloc and free.",
  }
];

const OSGroupPage: React.FC = () => (
  <div>
    <h2 className="mb-4">Operating System Projects</h2>
    <Row xs={1} sm={2} md={2} className="g-4">
      {osSubProjects.map((proj, idx) => (
        <Col key={idx}>
          <Card className="h-100 shadow-sm">
            <Link to={proj.id} style={{ textDecoration: "none", color: "inherit" }}>
              <Card.Img variant="top" src={proj.image} alt={proj.title} />
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.description}</Card.Text>
                <div className="mb-2">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="badge bg-secondary me-1">{tag}</span>
                  ))}
                </div>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

const CompArchGroupPage: React.FC = () => (
  <div>
    <h2 className="mb-4">Computer Architecture Projects</h2>
    <Row xs={1} sm={2} md={2} className="g-4">
      {compArchSubProjects.map((proj, idx) => (
        <Col key={idx}>
          <Card className="h-100 shadow-sm">
            <Link to={proj.id} style={{ textDecoration: "none", color: "inherit" }}>
              <Card.Img variant="top" src={proj.image} alt={proj.title} />
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.description}</Card.Text>
                <div className="mb-2">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="badge bg-secondary me-1">{tag}</span>
                  ))}
                </div>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

const ProjectDetail: React.FC = () => {
  const { projectId, subId } = useParams();
  if (projectId === "os") {
    switch (subId) {
      case "pintos":
        return (
          <Card className="shadow-lg p-4">
            <Card.Title as="h2">Pintos</Card.Title>
            <Card.Text>Pintos is a simple operating system framework for the 80x86 architecture. It supports kernel threads, loading and running user programs, and a file system. In my operating systems class at the University of Texas at Austin, I adjusted threads to handle priority scheduling and priority donation, implemented argument passing and 18 system calls for user programs to call upon, allowed stack growth and virtual memory with paging, and strengthened the file system to handle indexed and extensible files and subdirectories. I also handled synchronization for all of these features throughout the project. This project demonstrates my understanding of operating systems and how they are implemented.</Card.Text>
            <Card.Img variant="top" src={require("../images/Threads.png")} alt="Threads" className="mb-2" />
            <Card.Text>In the threads portion of this project, I added a priority variable to the thread's TCB (Thread control block) and changed the ready queue to be sorted by a thread's priority. I also implemented a method to set the priority of a thread. Priority inversion, the problem when a low priority thread holds a mutex that a higher priority thread needs, is solved by priority donation. The higher priority thread donates its priority to the lower priority thread in order to get hold of the mutex it needs as fast as possible.</Card.Text>
            <Card.Img variant="top" src={require("../images/UserPrograms.png")} alt="User Programs" className="mb-2" />
            <Card.Text>In the user programs portion of this project, I created system calls needed to execute user programs like halt, exit, exec, wait, create, remove, open, filesize, read, write, seek, tell, and close. I also allocated one page for the stack for each user program and implemented argument passing so the user can successfully make the system calls.</Card.Text>
            <Card.Img variant="top" src={require("../images/VM.png")} alt="Virtual Memory" className="mb-2" />
            <Card.Text>In the virtual memory portion of this project, I extended my user program implementation to account for stack growth. I also implemented paging with a supplemental page table, a frame table, and a swap table. The frame table evicts pages based off the enhanced clock algorithm, which accounts for dirty pages as well as recently used pages. I allowed for dirty pages to be evicted to the swap partition of disk. I implemented demand paging, where pages get added to physical memory in a page fault when they are accessed.</Card.Text>
            <Card.Img variant="top" src={require("../images/FS.png")} alt="File System" className="mb-2" />
            <Card.Text>In the file systems portion of this project, I adjusted the file system to be a multilevel indexed structure with 10 direct blocks, 1 indirect block, and 1 double indirect block. I designed this structure to support files of all types of sizes. The maximum file size supported by this structure is 8459264 bytes. I also updated the write method to account for writes that extend a file. I added a current working directory to each thread and implemented system calls like chdir, mkdir, readdir, isdir, and inumber in order to allow the file system to support subdirectories.</Card.Text>
          </Card>
        );
      case "utcs-shell":
        return (
          <Card className="shadow-lg p-4">
            <Card.Title as="h2">UTCS Shell</Card.Title>
            <Card.Text>In my operating systems class at the University of Texas at Austin, I built simple, fully-functioning Unix shell in C. This project demonstrates my ability to code in C and my understanding of how a shell operates in the OS.</Card.Text>
            <Card.Img variant="top" src={require("../images/UTCSShell.png")} alt="UTCS Shell" />
            <Card.Text>I implemented built in commands of cd, exit, and path, and external commands that run from PATH which is default set to /bin. I also allowed the shell to support scripts, output redirection, and concurrent commands.</Card.Text>
          </Card>
        );
      default:
        return <OSGroupPage />;
    }
  }
  if (projectId === "comparch") {
    switch (subId) {
      case "charm":
        return (
          <Card className="shadow-lg p-4">
            <Card.Title as="h2">chArm-v2 System Emulator</Card.Title>
            <Card.Text>In my computer architecture class at the University of Texas at Austin, I implemented a pipeline with cache simulator for chArm-v2 instruction set architecture using C. The instructions in this subset of Arm A64 include LDUR, STUR, MOVK, MOVZ, ADRP, ADD, ADDS, SUB, SUBS, CMP, MVN, OR, EOR, ANDS, TST, LSL, LSR, UBFM, ASR, B, B.cond, BL, RET, NOP, and HLT. I programmed the five stages for each instruction: Fetch, Decode, Execute, Memory, and Writeback. I also handled the data and control hazards that come with this pipeline implementation.</Card.Text>
            <Card.Img variant="top" src={require("../images/fetch.png")} alt="Fetch Stage" className="mb-2" />
            <Card.Text>In the fetch stage, I took the current PC (program counter) and fetched the instruction associated with it.</Card.Text>
            <Card.Img variant="top" src={require("../images/decode.png")} alt="Decode Stage" className="mb-2" />
            <Card.Text>In the decode stage, I decoded the instruction to get the correct operation and I set the control signals for future stages.</Card.Text>
            <Card.Img variant="top" src={require("../images/execute.png")} alt="Execute Stage" className="mb-2" />
            <Card.Text>In the execute stage, I passed the instruction through the arithmetic logic unit and the operation actually gets performed.</Card.Text>
            <Card.Img variant="top" src={require("../images/m&w.png")} alt="Memory & Writeback" className="mb-2" />
            <Card.Text>In the memory stage, I accessed memory if it is needed to execute an instruction. I implemented a write back cache using LRU (Least Recently Used) replacement policy to improve the efficiency of this stage. In the writeback stage, I saved the result of the instruction.</Card.Text>
            <Card.Text>I handled data and control hazards from the pipeline implementation by inserting bubble (NOP) and stall instructions. I also forwarded values from the execute, memory, and writeback stages back to decode.</Card.Text>
          </Card>
        );
      case "dma":
        return (
          <Card className="shadow-lg p-4">
            <Card.Title as="h2">Dynamic Memory Allocator</Card.Title>
            <Card.Text>In my computer architecture class at the University of Texas at Austin, I created a dynamic memory allocator in C. This project demonstrates my understanding of the C language and how memory gets allocated and deallocated within the heap.</Card.Text>
            <Card.Img variant="top" src={require("../images/FreeList.png")} alt="Free List" className="mb-2" />
            <Card.Text>My implementation of malloc and free utilized a linked list that kept track of free blocks of memory. I stored meta data in each block like the size of the block, allocation status, and next block pointer. When the user calls malloc, my program looks for the first free block that fits the request, removes it from the free list, and returns it to the user. When the user calls free, my program will insert the block back into the free list in sorted order and coalesce with its neighbors if necessary. If there is no space in the free list, then my program will request more memory from the operating system.</Card.Text>
          </Card>
        );
      default:
        return <CompArchGroupPage />;
    }
  }
  switch (projectId) {
    case "tts":
      return (
        <Card className="shadow-lg p-4">
          <Card.Title as="h2">Trauma Support Website</Card.Title>
          <Card.Text>
            In my software engineering class at the University of Texas at Austin, I collaborated with 4 colleagues to build a dynamic React.js website hosted on AWS Amplify to aid trauma survivors. This project demonstrates my ability to develop full stack and utilize common software engineering practices like unit testing and continuous integration.
          </Card.Text>
          <Card.Img variant="top" src={require("../images/TTS.png")} alt="TTS Landing Page" className="mb-3" />
          <Card.Text>Here is the landing page. We utilized bootstrap to style the website and use components like the navigation bar.</Card.Text>
          <Card.Img variant="top" src={require("../images/TTS2.png")} alt="TTS About Page" className="mb-3" />
          <Card.Text>This is the about page showing my collaborators. We utilized GitLab api to display the number of commits, issues closed, and unit tests written per person.</Card.Text>
          <Row className="mb-3">
            <Col md={4}><Card.Img src={require("../images/TTS3.png")} alt="Therapists Page" className="mb-2" /></Col>
            <Col md={4}><Card.Img src={require("../images/TTS5.png")} alt="Facilities Page" className="mb-2" /></Col>
            <Col md={4}><Card.Img src={require("../images/TTS6.png")} alt="Support Groups Page" className="mb-2" /></Col>
          </Row>
          <Card.Text>These are the therapists, trauma facilities, and trauma support group pages. In order to get the data for these page we utilized Puppeteer to programmatically scrape data from 3 data sources for 410 instances of therapists, 301 instances of trauma facilities, and 2851 instance of trauma support groups. We populated the data into a SQL database and implemented an API for the frontend to seamlessly retrieve the data from the backend.</Card.Text>
          <Card.Img variant="top" src={require("../images/TTS10.png")} alt="Backend Search" className="mb-3" />
          <Card.Text>In the backend, we implemented searching for key words.</Card.Text>
          <Card.Img variant="top" src={require("../images/TTS7.png")} alt="Sorting and Filtering" className="mb-3" />
          <Card.Text>We also implemented sorting and filtering by attributes of the data in all three pages</Card.Text>
          <Card.Img variant="top" src={require("../images/TTS4.png")} alt="Navigation" className="mb-3" />
          <Card.Text>We developed navigation through the instances at the bottom of the pages.</Card.Text>
          <Card.Img variant="top" src={require("../images/TTS8.png")} alt="Global Search" className="mb-3" />
          <Card.Text>We also integrated a global searching feature in the navigation bar at the top of all pages.</Card.Text>
          <Card.Img variant="top" src={require("../images/TTS9.png")} alt="Visualizations" className="mb-3" />
          <Card.Text>Finally, we demonstrate how to use our API to create visualizations of the data stored in our database on the visualizations page.</Card.Text>
          <Card.Text>Ultimately, this was a great project to expand my software engineering skills. We utilized many tools like AWS, Docker, Postman, Jest, Selenium, and more.</Card.Text>
        </Card>
      );
    case "chess-website":
      return (
        <Card className="shadow-lg p-4">
          <Card.Title as="h2">Chess Website</Card.Title>
          <Card.Text>Chess Website is a website that two people can play chess on using the same computer. I tought myself HTML, CSS, and JavaScript and made this website over the summer of 2023 using what I learned. This project was extremely fun to make since I play chess as a hobby. This project demonstrates my ability to utilize HTML, CSS, and JavaScript to create a complex website from scratch.</Card.Text>
          <Card.Img variant="top" src={require("../images/Chess-Website2.png")} alt="Chess Website Board" className="mb-3" />
          <Card.Text>The chess pieces are unicode characters. I implemented a user friendly design throughout this project with CSS. The possible moves for each piece are highlighted in green. The last move is highlighted in yellow. The clicked piece is highlighted in black. The hovered square is highlighted blue.</Card.Text>
          <Card.Img variant="top" src={require("../images/Chess-Website3.png")} alt="Chess Website Moves" className="mb-3" />
          <Card.Text>The king is highlighted red when in check. A message is printed at the bottom upon checkmate, stalemate, and insufficient material.</Card.Text>
          <Card.Img variant="top" src={require("../images/Chess-Website4.png")} alt="Chess Website Checkmate" className="mb-3" />
          <Card.Text>All the chess features like promotion, castling, en passant, pinned pieces, etc. are implemented.</Card.Text>
          <Card.Img variant="top" src={require("../images/Chess-Website5.png")} alt="Chess Website Editor" className="mb-3" />
          <Card.Text>I have added a board editor, so it is possible to start playing from any position. I have also added a undo function that undos the last move.</Card.Text>
        </Card>
      );
    case "easy-cook":
      return (
        <Card className="shadow-lg p-4">
          <Card.Title as="h2">Easy Cook</Card.Title>
          <Card.Text>I participated in a hackathon where I built a mobile app help users track calories and generate recipes given ingredients or a specified meal/cuisine. I programmed in Dart and utilized Flutter and OpenAI API to make a unique and flexible experience for both IOS and Android users. Watch my demo:</Card.Text>
          <Card.Img variant="top" src={require("../images/cook.png")} alt="Easy Cook App" className="mb-3" />
          <Ratio aspectRatio="16x9" className="mb-3">
            <iframe
              src="https://www.youtube.com/embed/hYcTRBI4TOw"
              title="Easy Cook Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: 0 }}
            />
          </Ratio>
        </Card>
      );
    case "dodge-adventure":
      return (
        <Card className="shadow-lg p-4">
          <Card.Title as="h2">Dodge Adventure</Card.Title>
          <Card.Text>Dodge Adventure is a game I created in Java using Graphics2D where a red square acts as a player and must move (WASD or arrow keys) to the end of the screen while dodging blue obstacles and avoiding the black walls. There are seven unique levels that get increasingly harder. I enabled the user to change the speed of the player to make the game easier or harder. I implemented a death and coin counter to encourage replayability and competition. This project demonstates my ability to code in Java and create a game from scratch.</Card.Text>
          <Card.Img variant="top" src={require("../images/Dodge-Adventure.png")} alt="Dodge Adventure" className="mb-3" />
          <Ratio aspectRatio="16x9" className="mb-3">
            <video controls>
              <source src={require("../videos/Dodge-Adventure.mov")} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Ratio>
        </Card>
      );
    case "portfolio-website":
      return (
        <Card className="shadow-lg p-4">
          <Card.Title as="h2">Portfolio Website</Card.Title>
          <Card.Text>This website was made to demonstrate my skills and expand on my projects and achievements with pictures and videos. I created react components for each of the project descriptions to enhance reusability. I designed this website to be capable of adjusting to a variety of screen sizes. This project demonstrates my ability to use React, TypeScript, and CSS to make a website.</Card.Text>
          <Card.Img variant="top" src={require("../images/Portfolio.png")} alt="Portfolio Website" className="mb-3" />
        </Card>
      );
    default:
      return <div>Project not found.</div>;
  }
};

const Projects: React.FC = () => (
  <Routes>
    <Route
      path="/"
      element={
        <div>
          <h2 className="mb-4">Projects</h2>
          <Row xs={1} sm={2} md={2} lg={3} className="g-4">
            {projects.map((project, idx) => (
              <Col key={idx}>
                <Card className="h-100 shadow-sm">
                  <Link to={project.id} style={{ textDecoration: "none", color: "inherit" }}>
                    <Card.Img variant="top" src={project.image} alt={project.title} />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <div className="mb-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="badge bg-secondary me-1">{tag}</span>
                        ))}
                      </div>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      }
    />
    <Route path=":projectId" element={<ProjectDetail />} />
    <Route path=":projectId/:subId" element={<ProjectDetail />} />
  </Routes>
);

export default Projects;
