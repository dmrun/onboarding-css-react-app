import wep1 from "../img/weapon1.png";
import wep2 from "../img/weapon2.png";
import wep3 from "../img/weapon3.png";
import Image from "../components/Image.js";
import RegularParagraph from "../components/RegularParagraph.js";

{
  /* <RegularParagraph
text="
If you want to talk about a project, hire me for some service, or talk
about ninjas..."
/>
        <RegularParagraph
        text={[
          "Developed by ",
          <span className="detail">Ninja - Time to Code</span>,
        ]}
      /> */
}

const Projects = () => {
  return (
    <>
      {/* Skills Start */}
      <section id="skills-section">
        <div className="container">
          <div className="skills-container">
            <Image src={wep1} alt="Weapons" />
            <h3>Development</h3>
            <RegularParagraph text="My biggest passion is developing web projects" />
            <RegularParagraph text="Languages ​​I use:" cName="subtitle" />
            <RegularParagraph text="HTML, CSS, JS, PHP and Python" />
            <RegularParagraph text="Projects I can develop:" cName="subtitle" />
            <RegularParagraph text="E-commerces, Institutional Sites, Systems of any complexity" />
            {/* <p>My biggest passion is developing web projects</p>
            <p className="subtitle">Languages ​​I use:</p>
            <p>HTML, CSS, JS, PHP and Python</p>
            <p className="subtitle">Projects I can develop:</p>
            <p>E-commerces, Institutional Sites, Systems of any complexity</p> */}
          </div>
          <div className="skills-container central">
            <Image src={wep2} alt="Weapons" />
            <h3>Creation</h3>
            <RegularParagraph text="I also work in project analysis and management" />
            <RegularParagraph text="My knowledge:" cName="subtitle" />
            <RegularParagraph
              text="Software Analysis, Requirements Engineering, Infrastructure
              Analysis"
            />
            {/* <p>I also work in project analysis and management</p>
            <p className="subtitle">My knowledge:</p> 
            <p>
              Software Analysis, Requirements Engineering, Infrastructure
              Analysis
            </p>*/}
          </div>
          <div className="skills-container">
            <Image src={wep3} alt="Weapons" />
            <h3>Infrastructure</h3>
            <RegularParagraph text="I can measure your servers, making the project more performative" />
            <RegularParagraph text="Cloud Services:" cName="subtitle" />
            <RegularParagraph text="AWS, Google Cloud, Microsoft Azure" />
            <RegularParagraph text="What can I do:" cName="subtitle" />
            <RegularParagraph text="Clusters, CDN servers, decrease request time" />
            {/* <p>
              I can measure your servers, making the project more performative
            </p>
            <p className="subtitle">Cloud Services:</p>
            <p>AWS, Google Cloud, Microsoft Azure</p>
            <p className="subtitle">What can I do:</p>
            <p>Clusters, CDN servers, decrease request time</p> */}
          </div>
        </div>
      </section>
      {/* Skills end */}
    </>
  );
};

export default Projects;
