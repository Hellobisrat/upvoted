import React, { useState } from 'react';
import { FaFire } from 'react-icons/fa'; // Correct import
import './VoteButton.css'; // Assuming you have a CSS file for styling

const VoteButton = () => {
  const [hasUpvoted, setHasUpvoted] = useState(false);

  const handleVote = () => {
    setHasUpvoted(!hasUpvoted);
    console.log(hasUpvoted ? 'Removed Upvote' : 'Upvoted!');
    // Add your vote logic here
  };

  return (
    <div>
      <button onClick={handleVote} className={`vote-button ${hasUpvoted ? 'upvoted' : ''}`}>
        <FaFire size={24} color={hasUpvoted ? 'orange' : 'grey'} />
      </button>
    </div>
  );
};

export default VoteButton;
