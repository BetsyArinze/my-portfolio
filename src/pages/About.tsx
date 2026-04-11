import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1>About Me</h1>

        <p>
          I am a Software Engineer based in Lagos, Nigeria, with a deep focus on
          building accessible, high-performance web products. My path into
          engineering was driven by curiosity and ambition. I earned a First
          Class degree in Computer Science from a top Nigerian university, and
          never stopped building.
        </p>

        <p>
          That same drive led me to ship production systems used by 400,000+
          people across global markets. I don't just write code, I architect
          solutions, lead teams, and obsess over the details that turn good
          products into great ones.
        </p>

        <p>
          When I'm not building products or mentoring engineers, you'll find me
          travelling, baking, or reading a book.
        </p>

        <h2>The Specs</h2>
        <ul>
          <li>Location: Lagos, Nigeria</li>
          <li>Languages: English (Fluent)</li>
          <li>Education: B.Sc Computer Science, University of Ibadan</li>
        </ul>

        <h2>Tech Stack</h2>
        <ul>
          <li>Core Frontend: React, TypeScript, Next.js, Tailwind CSS</li>
          <li>Backend & Runtimes: Node.js, .NET, Firebase</li>
          <li>APIs & Data: GraphQL, REST APIs, PostgreSQL, MongoDB</li>
          <li>Testing: Jest, React Testing Library, Playwright, Cypress</li>
          <li>Infrastructure & Cloud: Docker, AWS, Kubernetes, Vercel</li>
          <li>CI/CD & Workflow: Git, GitLab, CI/CD Pipelines</li>
          <li>Currently Exploring: React Native, Go</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
