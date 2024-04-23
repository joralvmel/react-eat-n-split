import { useState } from "react";
import { FormSplitBill } from "./FormSplitBill";
import { Button } from "./Button";
import { FormAddFriend } from "./FormAddFriend";
import { FriendList } from "./FriendList";

const initialFriends = [
  {
    id: "44eaffa4-47fc-4cbb-a29c-221d7f97194c",
    name: "Mark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -10,
  },
  {
    id: "a2650aa3-9c3f-44bc-a1c1-0496f3bac34e",
    name: "Maria",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 40,
  },
  {
    id: "05a5efec-a945-4673-af55-f5fcd5422964",
    name: "Pete",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

/**
 * The main component of the application.
 * @returns {JSX.Element} The JSX element representing the App component.
 */
export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  /**
   * Toggles the visibility of the add friend form.
   */
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  /**
   * Adds a new friend to the list of friends.
   * @param {object} friend - The friend object to be added.
   */
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  /**
   * Selects a friend from the friend list.
   * @param {object} friend - The friend object to be selected.
   */
  function handleSelectFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  /**
   * Splits the bill and updates the friend's balance.
   * @param {number} value - The value to be added to the friend's balance.
   */
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelectFriend}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
