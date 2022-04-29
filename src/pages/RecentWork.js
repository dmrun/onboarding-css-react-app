const RecentWork = () => {
  return (
    <>
      {/* Jobs start */}
      <section id="jobs-section">
        <h2>Veja meus últimos trabalhos:</h2>
        <p>
          Aqui estão os meus trabalhos mais rescentes, para ver todos{" "}
          <a href="#">clique aqui.</a>
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
