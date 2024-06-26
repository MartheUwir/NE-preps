import PropTypes from "prop-types";

export const Input = ({
  type,
  name,
  placeholder,
  value,
  defaultInputValue,
  onChange,
  labelName,
}) => {
  return (
    <>
      {labelName && (
        <label className="block">
          {labelName}
        </label>
      )}
      <input
        type={type}
        name={name}
        className="w-full px-6 py-3 mt-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500 placeholder-gray text-sm"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        defaultValue={defaultInputValue}
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultInputValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labelName: PropTypes.string,
};
