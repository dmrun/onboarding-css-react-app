import ninjaTop from "../img/ninja.png";

const Contact = () => {
  return (
    <>
      {/* Footer start */}
      <footer>
        <h2>Send me a message</h2>
        <p>
          If you want to talk about a project, hire me for some service, or talk
          about ninjas...
        </p>
        <img src={ninjaTop} alt="Perfil Ninja" />
        <form action="" method="">
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your e-mail" />
          <textarea name="msg" placeholder="Write your message"></textarea>
          <input type="submit" value="Send" />
        </form>
        <p>
          Developed by <span className="detail">Ninja - Time to Code</span>
        </p>
      </footer>
      {/* Footer end */}
    </>
  );
};

export default Contact;
