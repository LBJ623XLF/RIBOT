export function Button({ className = "", children, ...props }) {
  return (
    <button className={`transition-all ${className}`} {...props}>
      {children}
    </button>
  );
}