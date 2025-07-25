import { ContentSection } from './projects';

export interface InternshipData {
  id: string;
  title: string;
  image: any;
  tags: string[];
  description: string;
  content?: ContentSection[];
}

export const internships: InternshipData[] = [
  {
    id: "cox-automotive",
    title: "Cox Automotive",
    image: require("../images/Cox.png"),
    tags: [
      "Software Engineering", "Fullstack", "AWS", "Stencil.js", ".NET", "TypeScript", "C#", "Swagger", "Terraform", "GitHub Actions", "YAML", "Agile Development", "Scrum", "Google Chrome Extension", "Content Delivery Network"
    ],
    description: "Software Engineer Intern at Cox Automotive, working on fullstack projects and cloud technologies.",
    content: [
      {
        type: 'text',
        content: 'During the summer of 2024, I completed my first software engineering internship. Cox Automotive was a great oppurtunity for me to learn how developers use agile development to push code to production. The company was amazing and the people were very supportive. I expanded my programming skills in the frontend and backend and got exposure to Stencil.js, .NET, C#, AWS, Terraform, Github Actions, and much more. This internship boosted my confidence as a programmer as I transitioned from the fundamentals taught in school to real world experiences. It also made me even more sure that software engineering is the path I want to take in the future. Here is my final presentation from my internship that highlights what I worked on during the 12 weeks:'
      },
      {
        type: 'image',
        content: require("../images/CoxPresentation.jpeg"),
        className: 'mb-3'
      }
    ]
  }
]; 