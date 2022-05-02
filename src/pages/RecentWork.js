import Title from "../components/Title.js";
import RegularParagraph from "../components/RegularParagraph.js";

const RecentWork = () => {
  return (
    <>
      {/* Jobs start */}
      <section id="jobs-section">
        <Title text={"See my latest work:"} />
        <RegularParagraph
          text={[
            "Here are my most recent works, so you can see them all",
            " ",
            <a href="#">Click Here.</a>,
          ]}
        />
        {/* <p>
          Here are my most recent works, so you can see them all{" "}
          <a href="#">Click Here.</a>
        </p> */}
        <div className="job-container">
          <div className="job-box proj1"></div>
          <div className="job-box proj2"></div>
          <div className="job-box proj3"></div>
        </div>
        <div className="job-container">
          <div className="job-box proj2"></div>
          <div className="job-box proj3"></div>
          <div className="job-box proj1"></div>
        </div>
      </section>
      {/* Jobs end */}
    </>
  );
};

export default RecentWork;
