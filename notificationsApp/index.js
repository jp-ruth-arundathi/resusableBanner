const Notification = (props) => {
  const { text, className, imgSource } = props;
  const containerClassName = `notification-container ${className}`;

  return (
    <div className={containerClassName}>
      <img className="image-size" src={imgSource} />
      <p className="content">{text}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <div className="list-container">
      <Notification
        text="Information Message"
        className="content-container1"
        imgSource="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />

      <Notification
        text="Success Message"
        className="content-container2"
        imgSource="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />

      <Notification
        text="Warning Message"
        className="content-container3"
        imgSource="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />

      <Notification
        text="Error Message"
        className="content-container4"
        imgSource="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
