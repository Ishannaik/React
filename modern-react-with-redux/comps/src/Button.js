const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  return (
    <div>
      <button className=" px-3 py-2 border border-blue-600 bg-blue-500 text-white">
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        `You can only use one variation at a time. You have used ${count} variations.`
      );
    }
  },
};

export default Button;
