import { useEffect, useState } from "react";
const useToken = (user) => {
  const [token, setToken] = useState("");
  const email = user?.user?.email;
  const currentUser = { email: email };

  useEffect(() => {
    fetch(`https://enigmatic-journey-32306.herokuapp.com/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.token);
        // const accessToken = data.token;
        // localStorage.setItem("accessToken", accessToken);
        // setToken(accessToken);
      });
  }, [user]);
  return [token];
};

export default useToken;
