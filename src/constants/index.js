import { meta, zynrah, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    php,
    git,
    github,
    html,
    javascript,
    linkedin,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "php",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "Zynrah",
        icon: zynrah,
        iconBg: "#b7e4c7",
        date: "Jan 2023 - Jan 2025",
        points: [
            "Learning to develop and manage web applications using the CodeIgniter 3 framework.",
            "Built a simple e-commerce website as a hands-on project to understand MVC architecture.",
            "Practiced working with MySQL databases to manage user data, products, and transactions.",
            "Focused on improving code structure, reusability, and understanding backend logic.",
            "Explored basic user authentication, CRUD functionality, and admin dashboards.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "Developer Portfolio",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Januari 2025 - Mei 2025",
        points: [
            "Developed a personal developer portfolio using React.js and Tailwind CSS to showcase projects and skills.",
            "Designed responsive and mobile-friendly layouts to ensure a seamless user experience across devices.",
            "Utilized component-based architecture for clean, reusable, and maintainable code.",
            "Styled user interface elements using Tailwind CSS for a modern and consistent design system.",
            "Integrated animations and transitions to enhance the visual appeal and interactivity of the site.",
        ],
    },
    {
        title: "Front-End Learner",
        company_name: "Self-Learning",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2021 - Present",
        points: [
            "Studying the fundamentals of front-end development using HTML and CSS.",
            "Built basic static web pages to understand structure, layout, and styling.",
            "Practiced using Flexbox and Grid for responsive designs.",
            "Focused on semantic HTML and clean CSS to improve accessibility and maintainability.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Abdurrahim0119',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/abdurrahim-rahim',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Zynrah Shop',
        description: 'Developed a web-based e-commerce application using CodeIgniter 3 as part of my learning journey. The platform includes features like user authentication, product management, shopping cart, and transaction handling to simulate a real online store experience.',
        link: 'https://github.com/Abdurrahim0119',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Island3D',
        description: 'CBuilt a modern and responsive personal portfolio website using React.js and Tailwind CSS to showcase my projects, skills, and learning journey as an aspiring developer.',
        link: 'https://github.com/https://github.com/Abdurrahim0119/Island3D',
    },
    
];