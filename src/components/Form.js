const Form = (props) => {
  return (
    <>
      <form action={props.action} method={props.method}>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your e-mail" />
        <textarea name="msg" placeholder="Write your message"></textarea>
        <input type="submit" value="Send" />
      </form>{" "}
    </>
  );
};

export default Form;
