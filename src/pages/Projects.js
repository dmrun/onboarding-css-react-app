import wep1 from "../img/weapon1.png";
import wep2 from "../img/weapon2.png";
import wep3 from "../img/weapon3.png";

const Projects = () => {
  return (
    <>
      {/* Skills Start */}
      <section id="skills-section">
        <div className="container">
          <div className="skills-container">
            <img src={wep1} alt="Weapons" />
            <h3>Development</h3>
            <p>My biggest passion is developing web projects</p>
            <p className="subtitle">Languages ​​I use:</p>
            <p>HTML, CSS, JS, PHP and Python</p>
            <p className="subtitle">Projects I can develop:</p>
            <p>E-commerces, Institutional Sites, Systems of any complexity</p>
          </div>
          <div className="skills-container central">
            <img src={wep2} alt="Weapons" />
            <h3>Creation</h3>
            <p>I also work in project analysis and management</p>
            <p className="subtitle">My knowledge:</p>
            <p>
              Software Analysis, Requirements Engineering, Infrastructure
              Analysis
            </p>
          </div>
          <div className="skills-container">
            <img src={wep3} alt="Weapons" />
            <h3>Infrastructure</h3>
            <p>
              I can measure your servers, making the project more performative
            </p>
            <p className="subtitle">Cloud Services:</p>
            <p>AWS, Google Cloud, Microsoft Azure</p>
            <p className="subtitle">What can I do:</p>
            <p>Clusters, CDN servers, decrease request time</p>
          </div>
        </div>
      </section>
      {/* Skills end */}
    </>
  );
};

export default Projects;
