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
            <h3>Desenvolvimento</h3>
            <p>Minha maior paixão é desenvolver projetos web</p>
            <p className="subtitle">Linguagens que utilizo:</p>
            <p>HTML, CSS, JS, PHP e Python</p>
            <p className="subtitle">Projetos que posso desenvolver:</p>
            <p>
              E-commerces, Sites institucionais, Sistemas de qualquer
              complexidade
            </p>
          </div>
          <div className="skills-container central">
            <img src={wep2} alt="Weapons" />
            <h3>Criação</h3>
            <p>Atuo também na análise e gerenciamento de projetos</p>
            <p className="subtitle">Meus conhecimentos:</p>
            <p>
              Análise de Software, Engenharia de Requisitos, Análise de Infra
            </p>
          </div>
          <div className="skills-container">
            <img src={wep3} alt="Weapons" />
            <h3>Infraestrutura</h3>
            <p>
              Posso mensurar seus servidores, deixando o projeto mais
              performático
            </p>
            <p className="subtitle">Serviços de Cloud:</p>
            <p>AWS, Google Cloud, Microsoft Azure</p>
            <p className="subtitle">O que posso fazer:</p>
            <p>Clusters, servidores de CDN, diminuir o tempo de requisição</p>
          </div>
        </div>
      </section>
      {/* Skills end */}
    </>
  );
};

export default Projects;
