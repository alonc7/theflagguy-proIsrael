import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Link } from "react-router-dom";

import axios from "../api/axios";
const LOGIN_URL = "/api/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.token;
      // const roles = response?.data?.roles;
      if (response?.data?.status === "ok") {
        setAuth({ user: user, accessToken });
        setSuccess(true);
        console.log({ user: user, accessToken: accessToken });
      }
      console.log(JSON.stringify(response?.data));
      setPwd("");
      setUser("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg">
        {success ? (
          <div>
            <h1 className="text-3xl font-bold text-center text-green-600">
              You are logged in!
            </h1>
            <br />
            <p className="text-center">
              {/* Use Link component to navigate to home */}
              <Link to="/" className="text-blue-500 hover:underline">
                Go to Home
              </Link>
            </p>
          </div>
        ) : (
          <div>
            <p
              ref={errRef}
              className={`text-red-500 text-sm mb-4 ${errMsg ? "" : "hidden"}`}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Sign In
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-800 mb-2">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  className="w-full border rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-800 mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  className="w-full border rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Sign In
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
