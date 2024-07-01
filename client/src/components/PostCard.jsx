import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const PostCard = ({ post }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
      <div className="relative">
        <div className="aspect-w-12 aspect-h-3">
          <InstagramEmbed url={post.url} maxwidth={500} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
