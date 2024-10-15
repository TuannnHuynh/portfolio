import project1 from "../assets/project1.png";
import project from "../assets/project.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Junior",
    company: "University Of Industry And Trade",
    description:
      "Developed and maintained interactive web applications using HTML, CSS, JavaScript, and SCSS. Gained experience with jQuery for dynamic and responsive front-end development, ensuring cross-browser compatibility and improved user experiences.",
    teachnologies: ["Html", "Css", "Javascript", "Scss", "Jquery"],
  },
  {
    year: "2023 - Present",
    role: "Senior",
    company: "University Of Industry And Trade",
    description:
      "Focused on building scalable and efficient web applications using React.js and TypeScript. Integrated state management with Redux, and utilized Tailwind CSS and Bootstrap for responsive and modern UI designs. Continuously enhancing skills in front-end development, particularly with TypeScript for type safety and code maintainability.",
    teachnologies: [
      "ReactJS",
      "Typescript",
      "Redux",
      "TailwindCSS",
      "Bootstrap",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Vegatable Project",
    time: "May - 2022",
    img: project,
    github: "https://github.com/TuannnHuynh/web-js-vegetable",
    link: "https://web-js-vegatable.surge.sh/",
    description:
      "This project, built using HTML, CSS, and JavaScript, was created when I first started learning web development. It features essential e-commerce functionalities, including search, add, edit, and delete products within a shopping cart. This project helped me grasp core front-end development concepts while building functional web applications.",
    technologies: ["Html", "Css", "Scss", "Javascipt"],
  },
  {
    title: "Marketo Project",
    time: "August - 2022",
    img: project1,
    github: "https://github.com/TuannnHuynh/marketo-project",
    link: "https://marketo-project.surge.sh/",
    description:
      "I developed a responsive e-commerce web application using HTML, CSS, JavaScript, and jQuery. The project allows users to add, edit, and remove items from the shopping cart. It features a dynamic search bar to filter products, and product data is fetched and rendered from a JSON file.",
    technologies: ["Html", "Css", "Scss", "Javascript", "Jquery"],
  },
  {
    title: "Manage User",
    time: "September - 2024",
    img: project2,
    github: "https://github.com/TuannnHuynh/react-js",
    link: "https://project-myapp.surge.sh/",
    description:
      "This ReactJS project is a user management system developed after extensive learning and practice with React, Redux. It integrates the Reqres API for managing users and features CRUD functionality, allowing users to be listed, created, edited, and deleted. Axios is used for API requests, and user authentication is implemented, requiring login to access the Manage Users page. ",
    technologies: ["Html", "Css", "Bootstrap", "React", "Javascript", "Redux"],
  },
  {
    title: "Personal Todos",
    time: "October - 2024",
    img: project3,
    github: "https://github.com/TuannnHuynh/react-ts-todo",
    link: "https://reactts-todos.netlify.app/",
    description:
      "This React TypeScript project implements a todo management system using Redux Toolkit. Key features include listing, creating, editing, deleting todos, and searching todos by title. Users can also filter todos by their completion status (completed or not). The project utilizes React-Toastify for real-time notifications of success and error actions, such as adding or deleting todos. Tailwind CSS is used for fast, responsive.",
    technologies: [
      "Html",
      "Css",
      "TailwindCSS",
      "React",
      "Typescript",
      "Redux-toolkit",
    ],
  },
];
