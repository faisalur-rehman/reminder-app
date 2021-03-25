import React from "react";

export const UserContext = React.createContext();
const superUser = { name: "Software Hub Pro", email: "softwarehub@gmail.com", password: "password123456789" }

export const UserProvider = ({ children }) => {
  const [users, setUsers] = React.useState([superUser]);
  const [isAuth, setIsAuth] = React.useState(false);

  const handleLogin = (user) => {
    const _user = findUserByEmail(user.email);
    if (!_user) return false;
    if (_user.password !== user.password) return false;
    setIsAuth(true);
    return true;
  };

  const handleRegister = (user) => {
    const _user = findUserByEmail(user.email);
    if (!_user) {
      const _users = users.slice();
      _users.push(user);
      setUsers(_users);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuth(false);
  };

  const findUserByEmail = (email) => {
    return users.find((user) => user.email === email);
  };

  return (
    <UserContext.Provider
      value={{ users, isAuth, handleLogin, handleRegister, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
