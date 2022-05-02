import ninjaTop from "../img/ninja.png";
import Title from "../components/Title.js";
import Image from "../components/Image.js";
import RegularParagraph from "../components/RegularParagraph.js";

const Home = () => {
  return (
    <>
      <main>
        {/* Banner start */}
        <div id="main-banner">
          <div id="banner-info">
            <h1>Hello! My name is Ninja!</h1>
            <Image src={ninjaTop} alt="Ninja Profile" />
            <RegularParagraph text="Programming Ninja" />
            {/* <p>Programming Ninja</p> */}
          </div>
        </div>
        {/* Banner end */}
        {/* About start */}
        <section id="about-section">
          <Title text={"About my very good ninja skills"} />
          <RegularParagraph
            text="Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups."
          />
          {/* <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p> */}
        </section>
        {/* About end */}
      </main>
    </>
  );
};

export default Home;
