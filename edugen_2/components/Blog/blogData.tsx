import { Blog } from "@/types/blog";
const blogData: Blog[] = [
  {
    id: 1,
    title: "Create a Courses",
    paragraph:
      "Adding course description here......",
    image: "/images/blog/pexels-katerina-holmes-5905710.jpg",
    author: {
      name: "Author name",
      image: "/images/blog/pexels-katerina-holmes-5905710.jpg",
      designation: "Frontend Developer",
    },
    tags: ["Mention-type"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Essential UI Components for Building Modern Websites",
    paragraph:
      "Mastering frontend development requires a solid understanding of UI components. Here, we've compiled a list of the must-have components for building modern and user-friendly websites.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Vishal",
      image: "/images/blog/author1.png",
      designation: "Frontend Developer",
    },
    tags: ["Front-end"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Effective Strategies to Enhance Your Backend Development",
    paragraph:
      "Whether you're a seasoned backend developer or just starting out, refining your skills is essential for success in today's tech landscape. Here are nine practical tips to take your backend development skills to the next level.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Anugragha",
      image: "/images/blog/author-02.png",
      designation: "Backend Developer",
    },
    tags: ["Backend"],
    publishDate: "2024",
  },
  {
    id: 4,
    title: "Fullstack Fundamentals",
    paragraph:
      "Speed is key in today's fast-paced development environment. Whether you're working on the frontend or backend, improving your coding speed can enhance your productivity and efficiency.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Janaranjini",
      image: "/images/blog/author-01.png",
      designation: "Fullstack Developer",
    },
    tags: ["fullstack"],
    publishDate: "2024",
  },{
    id: 5,
    title: "Boost Your Coding Speed: Tips for Fullstack Developers",
    paragraph:
      "Speed is key in today's fast-paced development environment. Whether you're working on the frontend or backend, improving your coding speed can enhance your productivity and efficiency.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Janaranjini",
      image: "/images/blog/author-01.png",
      designation: "Fullstack Developer",
    },
    tags: ["fullstack"],
    publishDate: "2024",
  },
];
export default blogData;
