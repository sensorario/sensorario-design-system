type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children?: any;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children = "CLICK ME",
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`sensorario-button sensorario-button--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
