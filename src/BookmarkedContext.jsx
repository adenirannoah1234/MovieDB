// BookmarkContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';

const BookmarkContext = createContext();

export const useBookmark = () => {
  return useContext(BookmarkContext);
};

export const BookmarkProvider = ({ children }) => {
  // Load bookmarked movies from localStorage or initialize an empty array
  const storedBookmarkedMovies =
    JSON.parse(localStorage.getItem('bookmarkedMovies')) || [];
  const [bookmarks, setBookmarks] = useState(storedBookmarkedMovies);

  // Update localStorage whenever bookmarks change
  useEffect(() => {
    localStorage.setItem('bookmarkedMovies', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (movie) => {
    const isBookmarked = bookmarks.some((bookmark) => bookmark.id === movie.id);

    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter(
        (bookmark) => bookmark.id !== movie.id
      );
      setBookmarks(updatedBookmarks);
    } else {
      setBookmarks([...bookmarks, movie]);
    }
  };
  const removeBookmark = (movieId) => {
    // Remove the movie with the specified ID from bookmarkedMovies array
    const updatedBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== movieId
    );
    setBookmarks(updatedBookmarks);
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, toggleBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
