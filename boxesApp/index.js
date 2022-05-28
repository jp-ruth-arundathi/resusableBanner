const Box = (props) => {
  const { name, className } = props;
  return (
    <div className={`${className}`}>
      <p className="box-name">{name}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box">
      <Box className="box-small" name="Small" />
      <Box className="box-medium" name="Medium" />
      <Box className="box-large" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
