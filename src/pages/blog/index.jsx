import React, { useEffect, useState } from "react";
import "./style.scss";
import { scrollToUp } from "../../utils/scrollToUp";

const Blog = () => {
  scrollToUp();

  return (
    <div className="block_section">
      <iframe
        className="videoBlock"
        src="https://www.youtube.com/embed/KhRsGfsij6M"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Blog;
