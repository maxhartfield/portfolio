import { ContentSection } from './projects';

export interface AchievementData {
  id: string;
  title: string;
  image: any;
  tags: string[];
  description: string;
  content?: ContentSection[];
}

export const achievements: AchievementData[] = [
  {
    id: "eagle-scout",
    title: "Eagle Scout",
    image: require("../images/EagleScout2.png"),
    tags: ["Leadership", "Teamwork", "Communication"],
    description: "Achieved the highest rank in scouting, demonstrating leadership and teamwork.",
    content: [
      {
        type: 'text',
        content: 'I have been part of scouting since I was a kid and it has tought me many skills like leadership, communication, and teamwork. After many years I finally achieved the highest rank, Eagle Scout.'
      },
      {
        type: 'image-grid',
        content: [
          { src: require("../images/EagleScout.png"), alt: "Eagle Scout Badge" },
          { src: require("../images/EagleScout2.png"), alt: "Eagle Scout Ceremony" }
        ],
        className: 'mb-3'
      },
      {
        type: 'text',
        content: 'My eagle scout project was a 42 ft x 8 ft screening fence located at Saint Andrew\'s United Methodist Church in Plano. It took a total of 14 hours to complete with me and my fellow scouts. Building and designing this fence was an intricate task and took a great deal of effort. My favorite part of this project was personally welding together the gate. My eagle scout project demonstrates my ability to prepare, manage a budget, delagate tasks, communicate with my fellow scouts and my benificiary, etc. Here are some photos documenting the project:'
      },
      {
        type: 'image-grid',
        content: [
          { src: require("../images/Welding.jpeg"), alt: "Welding" },
          { src: require("../images/Eagle-Project4.jpeg"), alt: "Eagle Project 4" },
          { src: require("../images/Eagle-Project5.jpeg"), alt: "Eagle Project 5" }
        ],
        className: 'mb-3'
      },
      {
        type: 'image',
        content: require("../images/Eagle-Project.jpg"),
        className: 'mb-3'
      }
    ]
  },
  {
    id: "gymnastics",
    title: "Gymnastics National Qualifier",
    image: require("../images/GymnasticsImage.jpg"),
    tags: ["Gymnastics", "Dedication", "Persistence", "Time Management"],
    description: "Qualified for nationals after 13 years of gymnastics, showing dedication and persistence.",
    content: [
      {
        type: 'text',
        content: 'I have done gymnastics for 13 years of my life. Although I retired after senior year of high school, gymnastics still played a major part in my life and instilled skills like dedication, persistence, and time management. Gymnastics is a time consuming and physicaly demanding sport, and it was very difficult to manage school and 20 hours of gymnastics a week. Despite fracturing my spine twice, I recovered and eventually qualified for nationals. Here are some of my highlights:'
      },
      {
        type: 'video-grid',
        content: [
          { src: require("../videos/GymnasticsVideo4.mov"), title: "Gymnastics Video 4" },
          { src: require("../videos/GymnasticsVideo2.mov"), title: "Gymnastics Video 2" }
        ],
        className: 'mb-3'
      },
      {
        type: 'video-grid',
        content: [
          { src: require("../videos/GymnasticsVideo1.mov"), title: "Gymnastics Video 1" },
          { src: require("../videos/GymnasticsVideo3.mov"), title: "Gymnastics Video 3" }
        ],
        className: 'mb-3'
      }
    ]
  },
  {
    id: "community-coding",
    title: "Community Coding",
    image: require("../images/Community-Coding.png"),
    tags: ["Teaching", "Java", "Problem Solving", "Communication"],
    description: "Offered free Java lessons to the community, demonstrating communication and coding skills.",
    content: [
      {
        type: 'text',
        content: 'I offered free Java lessons to members of the community in collaboration with Professor Jey Veerasamy of UT-Dallas. These problems were held over zoom and featured a variety of Java problems that help kids learn Java and problem solving skills. This achievement demonstrates my ability to communicate effectively and my passion for coding.'
      },
      {
        type: 'image',
        content: require("../images/Community-Coding.png"),
        className: 'mb-3'
      }
    ]
  }
]; 