export const addUser = async (username, email, password) => {
    try {
      
      const response = await fetch("http://localhost/users/register", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "username": username,
          "email": email,
          "password": password,
        }),
      });
  
      const data = response.json();
      console.log("data: ", data);
  
    } catch (error) {
      console.log(error);
    }
  };