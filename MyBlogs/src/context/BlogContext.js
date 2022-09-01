import React, { createContext } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={"This is data from context"}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
