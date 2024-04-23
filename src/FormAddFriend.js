import { useState } from "react";
import { Button } from "./Button";

/**
 * Renders a form for adding a friend.
 * @param {Object} props - The component props.
 * @param {Function} props.onAddFriend - The function to call when a friend is added.
 * @returns {JSX.Element} The rendered form.
 */
export function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  /**
   * Handles the form submission.
   * @param {Event} e - The form submit event.
   */
  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newFriend = { name, image: `${image}?=${id}`, balance: 0, id };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Select</Button>
    </form>
  );
}
