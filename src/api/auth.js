import axios from "axios";

export const saveUser = (user, url) => {
  const currentUser = {
    email: user?.email,
    name: user?.displayName,
    image: url
  };

  axios
    .put(`https://knowledge-door-server.vercel.app/users/${user?.email}`, currentUser)
    .then((data) => console.log(data));
};
