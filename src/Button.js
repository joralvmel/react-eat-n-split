/**
 * Button component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content of the button.
 * @param {Function} props.onClick - The click event handler for the button.
 * @returns {JSX.Element} The rendered Button component.
 */
export function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
