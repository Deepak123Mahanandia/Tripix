import { createContext, useEffect, useReducer } from 'react';

// Helper: Decode JWT and get expiry time
const getTokenExpiry = (token) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1])); // Decode base64
    return payload.exp * 1000; // Convert to ms
  } catch (err) {
    return null;
  }
};

const initial_state = {
  user: localStorage.getItem('user') !== null
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  loading: false,
  error: null
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload
      };
    case "REGISTER_SUCCESS":
      return {
        user: null,
        loading: false,
        error: null
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  // Save/remove user in localStorage
  useEffect(() => {
    if (state.user) {
      localStorage.setItem('user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('user');
    }
  }, [state.user]);

  // Auto logout when token expires
  useEffect(() => {
    if (state.user?.token) {
      const expiryTime = getTokenExpiry(state.user.token);
      if (expiryTime && expiryTime > Date.now()) {
        const timeout = expiryTime - Date.now();
        const logoutTimer = setTimeout(() => {
          dispatch({ type: "LOGOUT" });
        }, timeout);
        return () => clearTimeout(logoutTimer);
      } else {
        // Token already expired
        dispatch({ type: "LOGOUT" });
      }
    }
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
