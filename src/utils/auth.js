const isBrowser = typeof window !== `undefined`;

const getUser = () =>
  window.localStorage.user ? JSON.parse(window.localStorage.user) : {};

const setUser = (user) => (window.localStorage.user = JSON.stringify(user));

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false;

  if (username === `demo` && password === `demo`) {
    console.log(`Credentials match! Setting the active user.`);
    return setUser({
      name: `Demo`,
      email: `demo@example.org`,
    });
  }

  return false;
};

export const isLoggedIn = () => {
  if (!isBrowser) return false;

  const user = getUser();

  return !!user.email;
};

export const getCurrentUser = () => isBrowser && getUser();

export const logout = (callback) => {
  if (!isBrowser) return;

  console.log(`Ensuring the \`user\` property exists.`);
  setUser({});
  callback();
};
