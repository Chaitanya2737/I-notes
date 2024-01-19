const Alert = (props) => {
  const capital = (word) => {
    if (word === "danger") {
      return "Error";
    }

    // Capitalize the first letter of the word
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capital(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;
