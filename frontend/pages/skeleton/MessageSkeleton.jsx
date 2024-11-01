// MessageSkeleton.jsx
import React from 'react';
import './MessageSkeleton.css';

const MessageSkeleton = () => {
  return (
    <>
      <div className="message-skeleton-row">
        <div className="skeleton avatar-skeleton"></div>
        <div className="message-skeleton-text">
          <div className="skeleton line-skeleton"></div>
          <div className="skeleton line-skeleton"></div>
        </div>
      </div>
      <div className="message-skeleton-row reverse">
        <div className="message-skeleton-text">
          <div className="skeleton line-skeleton"></div>
        </div>
        <div className="skeleton avatar-skeleton"></div>
      </div>
    </>
  );
};

export default MessageSkeleton;
