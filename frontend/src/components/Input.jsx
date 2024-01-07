import style from "./Input.module.css";

export default function Input({
  type,
  text,
  name,
  placeholder,
  value,
  handleOnChange,
}) {
  return (
    <div className={style.container_form}>
      <label htmlFor={name}>{text}: </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}
