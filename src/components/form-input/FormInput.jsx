import "./FormInput.scss";
export const FormInput = ({
  transformLabel = true,
  label,
  errors,
  touched = false,
  ...otherProps
}) => {
  return (
    <div className="form-input-group">
      <label
        className={`${otherProps.value ? "shrink" : ""} ${
          transformLabel ? "form-input-label" : "form-input-label-no-transform"
        } `}
      >
        {label}
      </label>
      <input className="form-input" {...otherProps} />
      {errors && touched ? <span>{errors}</span> : <></>}
    </div>
  );
};
