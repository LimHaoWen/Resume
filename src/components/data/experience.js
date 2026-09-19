import egis from "/src/images/EGIS.jpeg";
import foodpanda from "/src/images/foodpanda.png";

const EGIS_DESCRIPTION =
  "I gained proficiency in Svelte 5, JavaScript, Tailwind CSS, MongoDB, and backend API development " +
  "while building end-to-end features for a Laboratory Information System. I actively contributed to developing " +
  "complex laboratory workflows, role-based access controls, import and export functions, security features, reusable " +
  "frontend components, performance improvements, bug fixes, and technical documentation. Collaborating closely with " +
  "my team, I participated in technical discussions and helped formulate scalable, secure, and maintainable solutions.";

const FOODPANDA_DESCRIPTION =
  "I gained proficiency in Golang, MySQL, Redis, and other tech services. I actively " +
  "contributed to developing robust endpoints for new features, continous improvements, bug fixes, and addressing " +
  "technical debt. Collaborating seamlessly with my team, I participated in discussions and " +
  "played a role in formulating long-term solutions.";

export const desktopExperience = [
  {
    mt: "mt-8",
    company: "EGIS Healthcare Technologies",
    period: "Jul 2025 / Current",
    role: "Full Stack Developer",
    description: EGIS_DESCRIPTION,
    src: egis,
  },
  {
    mt: "-mt-0.5",
    company: "foodpanda",
    period: "Oct 2023 / Mar 2024",
    role: "Backend Software Engineer (Contract)",
    description: FOODPANDA_DESCRIPTION,
    src: foodpanda,
  },
];

export const mobileExperience = [
  {
    mt: "mt-12",
    company: "EGIS Healthcare Technologies",
    period: "Jul 2025 / Current",
    role: "Full Stack Developer",
    description: EGIS_DESCRIPTION,
    src: egis,
  },
  {
    mt: "-mt-0.5",
    h: "h-[88%]",
    company: "foodpanda",
    period: "Oct 2023 / Mar 2024",
    role: "Software Engineer Trainee (backend)",
    description: FOODPANDA_DESCRIPTION,
    src: foodpanda,
  },
];

export const resumeLinks = {
  desktop: "https://docs.google.com/document/d/1unwNV2UpejiQb4n4H2GuV9bn7rUnABp_mf81GhEZy1A/edit?usp=sharing",
  mobile: "https://docs.google.com/document/d/1M2Xypin3QxIH1XFZ2_OkJw-5-BcSrklrKyol5Vm7GKA/edit?usp=sharing",
};
