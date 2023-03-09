import { useState } from "react";

import "./App.css"

import UserWrapper from "./components/userWrapper/UserWrapper";

const App = () => {

  const [user, setUser] = useState({
    username: null,
    email: null,
    token: null,
  });


  return (
    <div className="app-wrapper">
      <h1>Awesome App!</h1>
      <UserWrapper user={user} setUser={setUser} />

      <>{user.token ? (
        <p>{user.username} is logged in</p> 
      ) : (
          <p>{user.username} is not logged in</p>
        )}
      </>
    </div>
  );
}

export default App;
