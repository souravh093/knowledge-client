import axios from "axios";

export const saveUser = (user, url) => {
  const currentUser = {
    email: user?.email,
    name: user?.displayName,
    image: url
  };

  axios
    .put(`http://localhost:5000/users/${user?.email}`, currentUser)
    .then((data) => console.log(data));
};
