export interface ContentSection {
  type: 'text' | 'image' | 'video' | 'image-grid' | 'video-grid' | 'pdf';
  content: string | string[] | { src: string; alt: string }[] | { src: string; title: string }[];
  className?: string;
  imageSize?: 'small' | 'medium' | 'large';
}

export interface ProjectData {
  id: string;
  title: string;
  image: any;
  tags: string[];
  description: string;
  content?: ContentSection[];
  isGroup?: boolean;
  subProjects?: string[];
}

export const projects: ProjectData[] = [
  {
    id: "gatherly",
    title: "Gatherly",
    image: require("../images/GatherlyImg.png"),
    tags: [
      "Swift", "Xcode", "Storyboard", "Mobile App", "iOS", "Firebase Authentication", "Firestore", "RSVP", "Calendar Sync", "Apple Calendar"
    ],
    description: "A mobile app to streamline party planning and event coordination.",
    content: [
      {
        type: 'text',
        content: `Gatherly is a mobile app designed to streamline party planning and event coordination. Built in Swift using Xcode and Storyboard, the app allows users to easily create parties, join events, update RSVPs, and view all upcoming invitations. Real-time data storage and authentication are handled through Firebase Authentication and Firestore, ensuring a seamless and secure experience for all users. One of Gatherly's standout features is calendar syncing, which lets users add events directly to their Apple Calendar from within the app. Check out the demo video below!`
      },
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/YZNXz11_2XU'
      }
    ]
  },
  {
    id: "tts",
    title: "Trauma Support Website",
    image: require("../images/TTS.png"),
    tags: [
      "Software Engineering", "React", "JavaScript", "HTML", "CSS", "Python", "SQL", "Bootstrap", "Docker", "Postman", "AWS Amplify", "Full Stack", "RESTful APIs", "Puppeteer", "Unit Testing", "Jest", "Selenium", "Continuous Integration", "Gitlab Pipelines", "YAML"
    ],
    description: "A dynamic React.js website hosted on AWS Amplify to aid trauma survivors.",
    content: [
      {
        type: 'text',
        content: 'In my software engineering class at the University of Texas at Austin, I collaborated with 4 colleagues to build a dynamic React.js website hosted on AWS Amplify to aid trauma survivors. This project demonstrates my ability to develop full stack and utilize common software engineering practices like unit testing and continuous integration.'
      },
      {
        type: 'text',
        content: 'Here is the landing page. We utilized bootstrap to style the website and use components like the navigation bar.'
      },
      {
        type: 'image',
        content: require("../images/TTS.png"),
        className: 'mb-3'
      },
      {
        type: 'text',
        content: 'This is the about page showing my collaborators. We utilized GitLab api to display the number of commits, issues closed, and unit tests written per person.'
      },
      {
        type: 'image',
        content: require("../images/TTS2.png"),
        className: 'mb-3'
      },
      {
        type: 'text',
        content: 'These are the therapists, trauma facilities, and trauma support group pages. In order to get the data for these page we utilized Puppeteer to programmatically scrape data from 3 data sources for 410 instances of therapists, 301 instances of trauma facilities, and 2851 instance of trauma support groups. We populated the data into a SQL database and implemented an API for the frontend to seamlessly retrieve the data from the backend.'
      },
      {
        type: 'image-grid',
        content: [
          { src: require("../images/TTS3.png"), alt: "Therapists Page" },
          { src: require("../images/TTS5.png"), alt: "Facilities Page" },
          { src: require("../images/TTS6.png"), alt: "Support Groups Page" }
        ],
        className: 'mb-3'
      },
      {
        type: 'text',
        content: 'In the backend, we implemented searching for key words.'
      },
      {
        type: 'image',
        content: require("../images/TTS10.png"),
        className: 'mb-3'
      },
      {
        type: 'text',
        content: 'We also implemented sorting and filtering by attributes of the data in all three pages'
      },
      {
        type: 'image',
        content: require("../images/TTS7.png"),
        className: 'mb-3'
      },
      {
        type: 'text',
        content: 'We developed navigation through the instances at the bottom of the pages.'
      },
      {
        type: 'image',
        content: require("../images/TTS4.png"),
        className: 'mb-3'
      },
      {
        type: 'text',
        content: 'We also integrated a global searching feature in the navigation bar at the top of all pages.'
      },
      {
        type: 'image',
        content: require("../images/TTS8.png"),
        className: 'mb-3'
      },
      {
        type: 'text',
        content: 'Finally, we demonstrate how to use our API to create visualizations of the data stored in our database on the visualizations page.'
      },
      {
        type: 'image',
        content: require("../images/TTS9.png"),
        className: 'mb-3'
      },
      {
        type: 'text',
        content: 'Although I helped a lot in all parts of the project, I was primarily responsible for the sorting, filtering, and searching in the backend. Ultimately, this was a great project to expand my software engineering skills. We utilized many tools like AWS, Docker, Postman, Jest, Selenium, and more.'
      }
    ]
  },
  {
    id: "easy-cook",
    title: "Easy Cook",
    image: require("../images/cook.png"),
    tags: ["Flutter", "Dart", "Mobile Development", "OpenAI API"],
    description: "A mobile app to track calories and generate recipes using AI.",
    content: [
      {
        type: 'text',
        content: 'I participated in a hackathon where I built a mobile app help users track calories and generate recipes given ingredients or a specified meal/cuisine. I programmed in Dart and utilized Flutter and OpenAI API to make a unique and flexible experience for both IOS and Android users. Watch my demo:'
      },
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/hYcTRBI4TOw'
      }
    ]
  },
  {
    id: "chess-website",
    title: "Chess Website",
    image: require("../images/Chess-Website.png"),
    tags: ["JavaScript", "HTML", "CSS"],
    description: "A website for two people to play chess on the same computer.",
    content: [
      {
        type: 'text',
        content: 'Chess Website is a website that two people can play chess on using the same computer. I tought myself HTML, CSS, and JavaScript and made this website over the summer of 2023 using what I learned. This project was extremely fun to make since I play chess as a hobby. This project demonstrates my ability to utilize HTML, CSS, and JavaScript to create a complex website from scratch. Take a look yourself: maxhartfield.github.io/Chess-Website'
      },
      {
        type: 'text',
        content: 'The chess pieces are unicode characters. I implemented a user friendly design throughout this project with CSS. The possible moves for each piece are highlighted in green. The last move is highlighted in yellow. The clicked piece is highlighted in black. The hovered square is highlighted blue.'
      },
      {
        type: 'image',
        content: require("../images/Chess-Website2.png"),
        className: 'mb-3'
      },
      {
        type: 'text',
        content: 'The king is highlighted red when in check. A message is printed at the bottom upon checkmate, stalemate, and insufficient material.'
      },
      {
        type: 'image',
        content: require("../images/Chess-Website3.png"),
        className: 'mb-3'
      },
      {
        type: 'text',
        content: 'All the chess features like promotion, castling, en passant, pinned pieces, etc. are implemented.'
      },
      {
        type: 'image',
        content: require("../images/Chess-Website4.png"),
        className: 'mb-3'
      },
      {
        type: 'text',
        content: 'I have added a board editor, so it is possible to start playing from any position. I have also added a undo function that undos the last move.'
      },
      {
        type: 'image',
        content: require("../images/Chess-Website5.png"),
        className: 'mb-3'
      },
    ]
  },
  {
    id: "dodge-adventure",
    title: "Dodge Adventure",
    image: require("../images/Dodge-Adventure.png"),
    tags: ["Java", "Game Design", "Graphics2D"],
    description: "A Java game where you dodge obstacles and reach the end.",
    content: [
      {
        type: 'text',
        content: 'Dodge Adventure is a game I created in Java using Graphics2D where a red square acts as a player and must move (WASD or arrow keys) to the end of the screen while dodging blue obstacles and avoiding the black walls. There are seven unique levels that get increasingly harder. I enabled the user to change the speed of the player to make the game easier or harder. I implemented a death and coin counter to encourage replayability and competition. This project demonstates my ability to code in Java and create a game from scratch.'
      },
      {
        type: 'video',
        content: require("../videos/Dodge-Adventure.mov")
      }
    ]
  },
  {
    id: "comp-graphics",
    title: "Computer Graphics",
    image: require('../images/ComputerGraphicsImg.png'),
    tags: [],
    description: "A collection of advanced computer graphics projects, each demonstrating a different technique or algorithm.",
    isGroup: true,
    subProjects: [
      "raytracing",
      "acceleration-structures",
      "menger-sponge",
      "skinning-mesh-interactivity",
      "keyframing-animation",
      "non-photorealistic-lighting"
    ]
  },
  {
    id: "os",
    title: "OS Projects",
    image: require("../images/OS.png"),
    tags: [],
    description: "Operating system projects including Pintos and UTCS Shell.",
    isGroup: true,
    subProjects: ["pintos", "utcs-shell"]
  },
  {
    id: "comparch",
    title: "Computer Architecture",
    image: require("../images/charm.png"),
    tags: [],
    description: "Projects from computer architecture class, including chArm-v2 emulator.",
    isGroup: true,
    subProjects: ["charm", "dma"]
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    image: require("../images/Portfolio.png"),
    tags: ["React.js", "TypeScript", "CSS", "Bootstrap"],
    description: "This portfolio website, built with React and Bootstrap.",
    content: [
      {
        type: 'text',
        content: 'This website was made to demonstrate my skills and expand on my projects and achievements with pictures and videos. I created react components for each of the project descriptions to enhance reusability. I designed this website to be capable of adjusting to a variety of screen sizes. This project demonstrates my ability to use React, TypeScript, and CSS to make a website.'
      },
      {
        type: 'image',
        content: require("../images/Portfolio.png"),
        className: 'mb-3'
      }
    ]
  },
  // OS Sub-projects
  {
    id: "pintos",
    title: "Pintos",
    image: require("../images/OS.png"),
    tags: ["C", "Collaborative", "Operating System", "Synchronization", "Threads", "User Programs", "Virtual Memory", "File Systems"],
    description: "Pintos is a simple operating system framework for the 80x86 architecture. Kernel threads, user programs, file system, and more.",
    content: [
      {
        type: 'text',
        content: 'Pintos is a simple operating system framework for the 80x86 architecture. It supports kernel threads, loading and running user programs, and a file system. In my operating systems class at the University of Texas at Austin, I adjusted threads to handle priority scheduling and priority donation, implemented argument passing and 18 system calls for user programs to call upon, allowed stack growth and virtual memory with paging, and strengthened the file system to handle indexed and extensible files and subdirectories. I also handled synchronization for all of these features throughout the project. This project demonstrates my understanding of operating systems and how they are implemented.'
      },
      {
        type: 'text',
        content: 'In the threads portion of this project, I added a priority variable to the thread\'s TCB (Thread control block) and changed the ready queue to be sorted by a thread\'s priority. I also implemented a method to set the priority of a thread. Priority inversion, the problem when a low priority thread holds a mutex that a higher priority thread needs, is solved by priority donation. The higher priority thread donates its priority to the lower priority thread in order to get hold of the mutex it needs as fast as possible.'
      },
      {
        type: 'image',
        content: require("../images/Threads.png"),
        className: 'mb-2'
      },
      {
        type: 'text',
        content: 'In the user programs portion of this project, I created system calls needed to execute user programs like halt, exit, exec, wait, create, remove, open, filesize, read, write, seek, tell, and close. I also allocated one page for the stack for each user program and implemented argument passing so the user can successfully make the system calls.'
      },
      {
        type: 'image',
        content: require("../images/UserPrograms.png"),
        className: 'mb-2'
      },
      {
        type: 'text',
        content: 'In the virtual memory portion of this project, I extended my user program implementation to account for stack growth. I also implemented paging with a supplemental page table, a frame table, and a swap table. The frame table evicts pages based off the enhanced clock algorithm, which accounts for dirty pages as well as recently used pages. I allowed for dirty pages to be evicted to the swap partition of disk. I implemented demand paging, where pages get added to physical memory in a page fault when they are accessed.'
      },
      {
        type: 'image',
        content: require("../images/VM.png"),
        className: 'mb-2'
      },
      {
        type: 'text',
        content: 'In the file systems portion of this project, I adjusted the file system to be a multilevel indexed structure with 10 direct blocks, 1 indirect block, and 1 double indirect block. I designed this structure to support files of all types of sizes. The maximum file size supported by this structure is 8459264 bytes. I also updated the write method to account for writes that extend a file. I added a current working directory to each thread and implemented system calls like chdir, mkdir, readdir, isdir, and inumber in order to allow the file system to support subdirectories.'
      },
      {
        type: 'image',
        content: require("../images/FS.png"),
        className: 'mb-2'
      },
    ]
  },
  {
    id: "utcs-shell",
    title: "UTCS Shell",
    image: require("../images/UTCSShell.png"),
    tags: ["C", "Collaborative", "Linux", "Unix", "Concurrency", "Paralellism", "Operating System"],
    description: "A simple, fully-functioning Unix shell in C. Built-in and external commands, scripts, redirection, concurrency.",
    content: [
      {
        type: 'text',
        content: 'In my operating systems class at the University of Texas at Austin, I built simple, fully-functioning Unix shell in C. This project demonstrates my ability to code in C and my understanding of how a shell operates in the OS.'
      },
      {
        type: 'text',
        content: 'I implemented built in commands of cd, exit, and path, and external commands that run from PATH which is default set to /bin. I also allowed the shell to support scripts, output redirection, and concurrent commands.'
      },
      {
        type: 'image',
        content: require("../images/UTCSShell.png")
      },
    ]
  },
  // Computer Architecture Sub-projects
  {
    id: "charm",
    title: "chArm-v2 System Emulator",
    image: require("../images/charm.png"),
    tags: ["C", "Collaborative", "Computer Architecture", "Assembly", "Cache", "Pipeline"],
    description: "Pipeline and cache simulator for chArm-v2 ISA. Handles hazards, forwarding, and LRU cache.",
    content: [
      {
        type: 'text',
        content: 'In my computer architecture class at the University of Texas at Austin, I implemented a pipeline with cache simulator for chArm-v2 instruction set architecture using C. The instructions in this subset of Arm A64 include LDUR, STUR, MOVK, MOVZ, ADRP, ADD, ADDS, SUB, SUBS, CMP, MVN, OR, EOR, ANDS, TST, LSL, LSR, UBFM, ASR, B, B.cond, BL, RET, NOP, and HLT. I programmed the five stages for each instruction: Fetch, Decode, Execute, Memory, and Writeback. I also handled the data and control hazards that come with this pipeline implementation.'
      },
      {
        type: 'text',
        content: 'In the fetch stage, I took the current PC (program counter) and fetched the instruction associated with it.'
      },
      {
        type: 'image',
        content: require("../images/fetch.png"),
        className: 'mb-2'
      },
      {
        type: 'text',
        content: 'In the decode stage, I decoded the instruction to get the correct operation and I set the control signals for future stages.'
      },
      {
        type: 'image',
        content: require("../images/decode.png"),
        className: 'mb-2'
      },
      {
        type: 'text',
        content: 'In the execute stage, I passed the instruction through the arithmetic logic unit and the operation actually gets performed.'
      },
      {
        type: 'image',
        content: require("../images/execute.png"),
        className: 'mb-2'
      },
      {
        type: 'text',
        content: 'In the memory stage, I accessed memory if it is needed to execute an instruction. I implemented a write back cache using LRU (Least Recently Used) replacement policy to improve the efficiency of this stage. In the writeback stage, I saved the result of the instruction.'
      },
      {
        type: 'image',
        content: require("../images/m&w.png"),
        className: 'mb-2'
      },
      {
        type: 'text',
        content: 'I handled data and control hazards from the pipeline implementation by inserting bubble (NOP) and stall instructions. I also forwarded values from the execute, memory, and writeback stages back to decode.'
      }
    ]
  },
  {
    id: "dma",
    title: "Dynamic Memory Allocator",
    image: require("../images/DMA.png"),
    tags: ["C", "Collaborative", "Linked List", "Heap", "Computer Architecture", "Operating System"],
    description: "Dynamic memory allocator in C using a free list and coalescing. Implements malloc and free.",
    content: [
      {
        type: 'text',
        content: 'In my computer architecture class at the University of Texas at Austin, I created a dynamic memory allocator in C. This project demonstrates my understanding of the C language and how memory gets allocated and deallocated within the heap.'
      },
      {
        type: 'text',
        content: 'My implementation of malloc and free utilized a linked list that kept track of free blocks of memory. I stored meta data in each block like the size of the block, allocation status, and next block pointer. When the user calls malloc, my program looks for the first free block that fits the request, removes it from the free list, and returns it to the user. When the user calls free, my program will insert the block back into the free list in sorted order and coalesce with its neighbors if necessary. If there is no space in the free list, then my program will request more memory from the operating system.'
      },
      {
        type: 'image',
        content: require("../images/FreeList.png"),
        className: 'mb-2'
      },
    ]
  },
  // Computer Graphics Sub-projects
  {
    id: "raytracing",
    title: "Raytracing",
    image: require('../images/RayTracingImg.png'),
    tags: ["C++", "Raytracing", "Phong Shading", "Reflection", "Refraction", "Shadow Rays", "Anti-aliasing", "Cube Mapping", "Barycentric Coordinates", "Computer Graphics", "Multi-threading"],
    description: "Raytracing project: Implementation of Phong shading, light attenuation, shadow rays, reflection, refraction, ray-triangle intersection, barycentric coordinates, and cube mapping.",
    content: [
      {
        type: 'text',
        content: `This project implements a raytracer with Phong shading, light attenuation, shadow rays, reflection, refraction, ray-triangle intersection, barycentric coordinates, and cube mapping. See the PDF below for full details, code snippets, and results.`
      },
      {
        type: 'pdf',
        content: require('../assets/RayTracing.pdf')
      }
    ]
  },
  {
    id: "acceleration-structures",
    title: "Acceleration Structures",
    image: require('../images/AccelerationStructuresImg.jpg'),
    tags: ["C++", "Acceleration Structures", "KDTree", "Anti-aliasing", "Raytracing", "Spatial Data Structures", "Trimesh", "Computer Graphics", "Broad Phase", "Bounding Box"],
    description: "Acceleration structures project: Implementation of anti-aliasing and KDTree spatial data structures for efficient raytracing.",
    content: [
      {
        type: 'text',
        content: `This project implements anti-aliasing and KDTree-based acceleration structures for efficient raytracing, including geometry and trimesh support. See the PDF below for full details, code snippets, and results.`
      },
      {
        type: 'pdf',
        content: require('../assets/AcceleratedStructures.pdf')
      }
    ]
  },
  {
    id: "menger-sponge",
    title: "Menger Sponge",
    image: require('../images/MengerSpongeImg.jpg'),
    tags: ["C++", "Menger Sponge", "Fractal", "Computer Graphics", "WebGL", "3D Rendering", "Recursive Geometry"],
    description: "Menger Sponge project: Implementation and rendering of a 3D fractal structure using recursive geometry techniques.",
    content: [
      {
        type: 'text',
        content: `This project implements and renders a 3D Menger Sponge fractal using recursive geometry techniques. See the PDF below for full details, code snippets, and results.`
      },
      {
        type: 'pdf',
        content: require('../assets/MengerSponge.pdf')
      }
    ]
  },
  {
    id: "skinning-mesh-interactivity",
    title: "Skinning and Mesh Interactivity",
    image: require('../images/SkinningAndMeshInteractivityImg.png'),
    tags: ["C++", "Skinning", "Mesh Interactivity", "Bone Picking", "Linear Blend Skinning", "Texture Mapping", "Computer Graphics", "Skeleton Hierarchy", "WebGL", "Shaders"],
    description: "Skinning and mesh interactivity project: Implementation of bone picking, skeleton updating, linear blend skinning, and texture mapping.",
    content: [
      {
        type: 'text',
        content: `This project implements skinning and mesh interactivity, including bone picking, skeleton updating, linear blend skinning, and texture mapping. See the PDF below for full details, code snippets, and results.`
      },
      {
        type: 'pdf',
        content: require('../assets/SkinningAndMeshInteractivity.pdf')
      }
    ]
  },
  {
    id: "keyframing-animation",
    title: "KeyFraming and Animation",
    image: require('../images/KeyFramingImg.jpg'),
    tags: ["C++", "Keyframing", "Animation", "Skeletal Animation", "Computer Graphics", "SLERP", "Quaternions", "Interpolation", "Playback"],
    description: "Keyframing and animation project: Implementation of keyframe storage, interpolation, and playback for skeletal animation.",
    content: [
      {
        type: 'text',
        content: `This project implements keyframing and animation for skeletal meshes, including keyframe storage, interpolation using SLERP, and playback. See the PDF below for full details, code snippets, and results.`
      },
      {
        type: 'pdf',
        content: require('../assets/KeyFramingAnimation.pdf')
      }
    ]
  },
  {
    id: "non-photorealistic-lighting",
    title: "Non-photorealistic Lighting",
    image: require('../images/Toon-shader.jpg'),
    tags: ["C++", "Raytracing", "OpenGL", "Cel Shading", "Technical Drawing", "Non-Photorealistic Rendering", "Computer Graphics", "Shader", "Phong Model", "GUI"],
    description: "Non-photorealistic lighting project: Cel shading and Technical Drawing shading implemented in a raytracing framework.",
    content: [
      {
        type: 'text',
        content: `This project explores non-photorealistic lighting techniques, including Cel shading and Technical Drawing shading, implemented in a raytracing framework. See the PDF below for full details, code snippets, and results.`
      },
      {
        type: 'pdf',
        content: require('../assets/ComputerGraphicsFinalProject.pdf')
      }
    ]
  }
]; 