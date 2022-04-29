import ninjaTop from "../img/ninja.png";

const Home = () => {
  return (
    <>
      <main>
        {/* Banner start */}
        <div id="main-banner">
          <div id="banner-info">
            <h1>Hello! My name is Ninja!</h1>
            <img src={ninjaTop} alt="Ninja Profile"></img>
            <p>Programming Ninja</p>
          </div>
        </div>
        {/* Banner end */}
        {/* About start */}
        <section id="about-section">
          <h2>About my very good ninja skills</h2>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </section>
        {/* About end */}
      </main>
    </>
  );
};

export default Home;
