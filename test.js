import React, { useState, useEffect } from "react";

function App() {
  // Define state variables to store user data and user details
  const [users, setUsers] = useState([]); // users state to store the list of users
  const [userDetails, setUserDetails] = useState([]); // userDetails state to store user details

  // Use the useEffect hook to perform data fetching when the component mounts
  useEffect(() => {
    // Fetch the list of users from the first API
    fetch("https://api.example.com/users") // Make a GET request to the first API endpoint
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        // When the data is successfully fetched:

        // Update the users state with the list of users
        setUsers(data);

        // Once you have the list of users, you can fetch details for each user from the second API
        const promises = data.map(
          (user) =>
            fetch(`https://api.example.com/user-details/${user.id}`) // Fetch user details for each user
              .then((response) => response.json()) // Parse the JSON response for user details
        );

        // Use Promise.all to wait for all user detail requests to complete
        Promise.all(promises)
          .then((userDetailsData) => {
            // When all promises resolve successfully:

            // Update the userDetails state with the fetched user details
            setUserDetails(userDetailsData);
          })
          .catch((error) => {
            // Handle errors that may occur while fetching user details
            console.error("Error fetching user details:", error);
          });
      })
      .catch((error) => {
        // Handle errors that may occur while fetching the list of users
        console.error("Error fetching users:", error);
      });
  }, []); // The empty array [] ensures that this effect runs only once when the component mounts

  return (
    <div>
      <h1>User Details</h1>
      <ul>
        {userDetails.map((userDetail) => (
          <li key={userDetail.id}>
            <p>Name: {userDetail.name}</p>
            <p>Email: {userDetail.email}</p>
            {/* Add more user details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
