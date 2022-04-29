import ninjaTop from "../img/ninja.png";

const Contact = () => {
  return (
    <>
      {/* Footer start */}
      <footer>
        <h2>Me mande uma mensagem</h2>
        <p>
          Caso queira falar sobre algum projeto, me contratar para algum
          serviço, ou falar sobre ninjas...
        </p>
        <img src={ninjaTop} alt="Perfil Ninja" />
        <form action="" method="">
          <input type="text" name="name" placeholder="Seu nome" />
          <input type="email" name="email" placeholder="Seu e-mail" />
          <textarea name="msg" placeholder="Digite uma mensagem"></textarea>
          <input type="submit" value="Enviar" />
        </form>
        <p>
          Desenvolvido por{" "}
          <span className="detail">Matheus Battisti - Hora de Codar</span>
        </p>
      </footer>
      {/* Footer end */}
    </>
  );
};

export default Contact;
