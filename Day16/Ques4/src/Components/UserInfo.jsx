import React from 'react';

const UserInfo = (props) => {
  return (
    <div style={styles.container}>
      <h2>User Information</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Email:</strong> {props.age}</p>
    </div>
  );
};

// Inline styles (optional)
const styles = {
  container: {
    border: '1px solid #ccc',
    padding: '15px',
    borderRadius: '8px',
    width: '300px',
    margin: '10px auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor:"royalblue",
    color:"white",
    fontStyle:"Italic"
  },
 
};

export default UserInfo;
