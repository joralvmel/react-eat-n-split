import { Friend } from "./Friend";

/**
 * Renders a list of friends.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.friends - The array of friend objects.
 * @param {Function} props.onSelection - The function to handle friend selection.
 * @param {Object} props.selectedFriend - The currently selected friend object.
 * @returns {JSX.Element} The rendered friend list component.
 */
export function FriendList({ friends, onSelection, selectedFriend }) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
}
