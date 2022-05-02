import ninjaTop from "../img/ninja.png";
import Title from "../components/Title.js";
import Image from "../components/Image.js";
import Form from "../components/Form.js";
import RegularParagraph from "../components/RegularParagraph.js";

const Contact = () => {
  return (
    <>
      {/* Footer start */}
      <footer>
        <Title text={"Send me a message"} />
        <RegularParagraph
          text="
          If you want to talk about a project, hire me for some service, or talk
          about ninjas..."
        />
        <Image src={ninjaTop} alt="Perfil Ninja" />
        <Form action="" method=""></Form>
        <RegularParagraph
          text={[
            "Developed by ",
            <span className="detail">Ninja - Time to Code</span>,
          ]}
        />
        {/* <p>
          Developed by <span className="detail">Ninja - Time to Code</span>
        </p> */}
      </footer>
      {/* Footer end */}
    </>
  );
};

export default Contact;
