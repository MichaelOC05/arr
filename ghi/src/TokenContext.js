import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// sets the value of internalToken to null
let internalToken = null;


export function getToken() {
  return internalToken;
}

// this function returns a JWT that is generated in the views
// think we need to change the url links referencing this page https://djwto.readthedocs.io/en/latest/
export async function getTokenInternal() {
  const url = `http://localhost:8000/monolith/tokens/mine/`;
  try {
    const response = await fetch(url, {
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      internalToken = data.token;

      return internalToken;
    }
  } catch (e) {}
  return false;
}

function handleErrorMessage(error) {
  if ("error" in error) {
    error = error.error;
    try {
      error = JSON.parse(error);
      if ("__all__" in error) {
        error = error.__all__;
      }
    } catch {}
  }
  if (Array.isArray(error)) {
    error = error.join("<br>");
  } else if (typeof error === "object") {
    error = Object.entries(error).reduce(
      (acc, x) => `${acc}<br>${x[0]}: ${x[1]}`,
      ""
    );
  }
  return error;
}

// creates a context that will be either directly imported in the case of class based functions or indirectly imported through useAuthContet in the case of function components
export const AuthContext = createContext({
  token: null,
  setToken: () => null,
});

// AuthProvider is a context provider which in this case contains the state of token and the function to change/set token
// must surround components that will need the token and setToken with AuthProvider tags 
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  // should I set the cookie value here?

  return (
    // this is what AuthProvider is the children will be the components that are placed between the tags
    // those components will have access to the variables that equal the value
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuthContext is used in function based components because they use the hook useContext instead of a Consumer
// a consumer is not used in this code because the context does not have functions
// useContext returns the current value of the context
export const useAuthContext = () => useContext(AuthContext);

// this function is the function that is imported in required components at the top 
// within the function we pull out the values and functions from, example: const [token, login] = useToken()
// this would pass the variable token and the login function
export function useToken() {
  const { token, setToken } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {

    async function fetchToken() {
      const token = await getTokenInternal();
      setToken(token);
    }
    if (!token) {
      fetchToken();
    }
  }, [setToken, token]);

  // this is the logout function (why is method delete?)
  // I think this brings us to the home page
  async function logout() {
    if (token) {
      const url = "http://localhost:8000/api/token/refresh/logout/";
      await fetch(url, { method: "delete", credentials: "include" });
      internalToken = null;
      setToken(null);
      navigate("/");
    }
  }

  // would we need an url that is linked with this or is this handled by django and djwt?
  // https://medium.com/geekculture/djwto-django-authentication-with-jwt-3ff6a6141fa6
  async function login(username, password) {
    const url = `http://localhost:8000/login/`;
    const form = new FormData();
    form.append("username", username);
    form.append("password", password);
    const response = await fetch(url, {
      method: "post",
      credentials: "include",
      body: form,
    });



    // after the user has been authenticated we then 
    if (response) {
      const token = await getTokenInternal();
      console.log(token)
      setToken(token);

      return;
    }
    let error = await response.json();
    return handleErrorMessage(error);
  }

  async function signup(username, password, email, firstName, lastName) {
    console.log("anything")// const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/accounts/`;
    const url = `${process.env.REACT_APP_MONOLITH_HOST}/login/create_user/`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        "username": username,
        "password": password,
        "email": email,
        "first_name": firstName,
        "last_name": lastName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response, "$$$")
    if (response.ok) {
      await login(username, password);
    }
    return false;
  }

  async function update(username, password, email, firstName, lastName) {
    const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/accounts/`;
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify({
        username,
        password,
        email,
        first_name: firstName,
        last_name: lastName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await login(username, password);
    }
    return false;
  }

  return [token, login, logout, signup, update];
}