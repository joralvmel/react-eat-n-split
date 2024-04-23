import { Button } from "./Button";

/**
 * Renders a friend component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.friend - The friend object.
 * @param {Function} props.onSelection - The function to call when the friend is selected.
 * @param {Object} props.selectedFriend - The currently selected friend object.
 * @returns {JSX.Element} The friend component.
 */
export function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          {" "}
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {" "}
          {friend.name} owes you ${friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p> You and {friend.name} are even </p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
