const RecentWork = () => {
  return (
    <>
      {/* Jobs start */}
      <section id="jobs-section">
        <h2>See my latest work:</h2>
        <p>
          Here are my most recent works, so you can see them all{" "}
          <a href="#">Click Here.</a>
        </p>
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
