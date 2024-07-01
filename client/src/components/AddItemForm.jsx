import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { useState } from "react";
import "../components/design/AddItemFormStyles";

import axios from "../api/axios";
const addPost_URL = "/api/addUrl";

const AddItemForm = () => {
  const { auth } = useContext(AuthContext);
  const [newItemUrl, setNewItemUrl] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setNewItemUrl(e.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    if (newItemUrl === "") {
      setIsInputFocused(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const urlPattern = /^https:\/\/www\.instagram\.com\/p\/[a-zA-Z0-9_-]+\/$/;

      // regex test
      if (!urlPattern.test(newItemUrl)) {
        setNewItemUrl(""); // Clear input field after submitting
        setIsInputFocused(false); // Reset input focus state
        return;
      }

      const response = await axios.post(
        addPost_URL,
        JSON.stringify({ url: newItemUrl }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      setNewItemUrl(""); // Clear input field after submitting
    } catch (error) {
      console.error("Error adding URL: ", error);
      setError("Error adding URL. Please try again."); // Set error message state
      setIsInputFocused(false); // Reset input focus state
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-blue-600 to-white rounded-lg shadow-lg overflow-hidden mb-4">
      {auth.accessToken ? (
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div
            className={`relative ${
              isInputFocused || newItemUrl !== "" ? "mt-2" : ""
            }`}
          >
            <input
              type="text"
              placeholder=" "
              value={newItemUrl}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              required
              className="w-full px-4 py-3 bg-transparent border-b-2 border-yellow-100 placeholder-gray-700 focus:outline-none focus:border-blue-500"
            />
            <label
              className={`absolute left-0 top-0 transition-all duration-300 ${
                isInputFocused || newItemUrl !== ""
                  ? "text-xs text-gray-600"
                  : "text-base"
              }`}
            >
              Enter your post URL from Instagram
            </label>
          </div>
          {error && <p className="text-red-500">{error}</p>}{" "}
          {/* Display error message */}
          <button
            type="submit"
            className="w-full bg-transparent-100 text-gray-500 py-3 rounded-lg font-semibold"
          >
            Add Item
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default AddItemForm;
