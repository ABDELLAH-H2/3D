const config = {
  title: "Abdellah Alioua | Full Stack Developer",
  description: {
    long: "Explore the portfolio of Abdellah Alioua, a Full Stack Developer specializing in building robust web applications and automating workflows. Focused on architecting scalable MERN stack solutions and optimizing workflows with AI and n8n. Experience in visitor management systems, web scraping tools, and e-commerce solutions.",
    short:
      "Discover the portfolio of Abdellah Alioua, a Full Stack Developer building scalable web applications and automation solutions.",
  },
  keywords: [
    "Abdellah",
    "Abdellah Alioua",
    "abdellah alioua",
    "Full Stack Developer",
    "portfolio",
    "MERN Stack",
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "web development",
    "n8n automation",
    "AI workflows",
    "WordPress",
    "E-commerce",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
  ],
  author: "Abdellah Alioua",
  email: "contact@abdellahalioua.com",
  site: "https://abdellah.dev",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/ABDELLAH-H2",
    linkedin: "https://www.linkedin.com/in/abdellah-alioua-7b8289384/",
    whatsapp: "https://wa.me/212605341594",
  },
};
export { config };
