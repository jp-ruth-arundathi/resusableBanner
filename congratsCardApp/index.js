const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="bg-profile">
      <img
        className="image-size"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="profile-name">Kiran V</h1>
      <p className="para">Hitech Institute of Engineering and Technology</p>
      <img
        className="image-size"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
