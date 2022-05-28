const Button = (props) => {
  const { className, label } = props;

  return <button className={`button ${className}`}>{label}</button>;
};

const element = (
  <div className="bg-container">
    <div className="content-container">
      <h1 class="heading">Social Buttons</h1>
      <div class="button-container">
        <Button label="Like" className="button-like" />
        <Button label="comment" className="button-comment" />
        <Button label="share" className="button-share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
