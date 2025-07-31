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
    id: "amazon",
    title: "Amazon",
    image: require("../images/Amazon.png"),
    tags: [
      "Software Development Engineer", "Full-stack", "Java", "Web Application", "AWS", "EC2", "S3", "CloudFront", "Performance Analysis", "Log Analysis", "Bytecode Instrumentation", "Dashboard", "Regex", "Authentication"
    ],
    description: "Software Development Engineer Intern at Amazon, developing performance analysis tools and log extraction systems.",
    content: [
      {
        type: 'text',
        content: 'As a Software Development Engineer Intern at Amazon, I developed a comprehensive full-stack log analysis web application designed to pinpoint performance bottlenecks and accelerate root cause analysis. The project involved enhancing a Java instrumentation agent to inject bytecode-level logging for tracking method and database operation timings, building a performance analysis dashboard to visualize method call hierarchies and execution metrics, and implementing a pattern library system for targeted log extraction and anonymization using reusable regex patterns. The application was deployed on AWS using EC2, S3, and CloudFront, with integration of Amazon\'s internal authentication for secure access.'
      },
      {
        type: 'text',
        content: 'The application consists of three core features Log Extraction, File Comparison, and Timing Analysis.'
      },
      {
        type: 'image',
        content: require("../images/FlowChart.png"),
        className: 'mb-4',
        imageSize: 'large'
      },
      {
        type: 'text',
        content: 'Log Extraction: This feature applies regex patterns for text anonymization and targeted extraction. It allows users to define custom patterns to extract specific information from logs while anonymizing nonrelevant data. This allows for the user to quickly identify meaningful differences when comparing two logs.'
      },
      {
        type: 'image',
        content: require("../images/LogExtraction.png"),
        className: 'mb-3',
        imageSize: 'large'
      },
      {
        type: 'image',
        content: require("../images/LogExtractionTool.png"),
        className: 'mb-4',
        imageSize: 'large'
      },
      {
        type: 'text',
        content: 'File Comparison: This tool compares line counts between two anonymized logs, enabling the user to quickly identify which lines one log has that the other doesn\'t. When used with the log extraction feature to anonymize the logs, a 2GB log can be reduced to 1000 lines of differences, greatly speeding up root cause analysis.'
      },
      {
        type: 'image',
        content: require("../images/FileComparison.png"),
        className: 'mb-3',
        imageSize: 'small'
      },
      {
        type: 'text',
        content: 'Timing Analysis: This component provides detailed views of method and database operation execution times provided from the java instrumentation agent. The user can search for specific methods/database operations and sort by execution time to identify slow operations. This enables the user to have a view of every method/database operation executed in their application and find performance bottlenecks.'
      },
      {
        type: 'image',
        content: require("../images/TimingAnalysis.png"),
        className: 'mb-3'
      },
    ]
  },
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