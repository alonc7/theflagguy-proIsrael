import React, { useState, useEffect } from "react";
import Button from "./Button";
import PostCard from "./PostCard";
import TypingAnimation from "./design/TypingAnimation";
import AddItemForm from "./AddItemForm";
import axios from "../api/axios";

const PostContainer = () => {
  const [filterOption, setFilterOption] = useState("latest");
  const [videosToShow, setVideosToShow] = useState(3);
  const [posts, setPosts] = useState([]);
  const maxVideosToShow = 910;

  const getPost = "/api/posts";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(getPost);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleLoadMoreVideos = () => {
    setVideosToShow(prevCount => Math.min(prevCount + 6, maxVideosToShow));
  };

  const handleFilterChange = (option) => {
    setFilterOption(option);
    // Add logic to refetch or filter posts based on the option if needed
  };

  return (
    <section id="VideosContainer" className="pt-16 -mt-20">
      <div className="container relative">
        <h2>
          <TypingAnimation
            text="Our Collective Voice"
            interval={1000}
            style="text-3xl font-bold text-gray-700"
            loop={false}
          />
        </h2>

        <div className="flex justify-center space-x-4 mb-6">
          {['latest', 'views'].map(option => (
            <button
              key={option}
              onClick={() => handleFilterChange(option)}
              className={`px-4 py-2 rounded-md ${
                filterOption === option
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {option === 'latest' ? 'Latest Videos' : 'By Views'}
            </button>
          ))}
        </div>

        <AddItemForm />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, videosToShow).map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>

        {videosToShow < posts.length && (
          <Button
            onClick={handleLoadMoreVideos}
            className="mx-auto mt-6 p-2"
            px={12}
            white={false}
          >
            Load More Videos
          </Button>
        )}
      </div>
    </section>
  );
};

export default PostContainer;
