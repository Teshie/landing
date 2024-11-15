import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);


    try {
      // Make a POST request to your backend login endpoint with API key in headers
      const response = await axios.post(
        "https://info.ensaq.et/api/account/login",
        { code: password }
      );

      // Store the token and user information in localStorage, including loginTime
      const user = {
        ...response.data,
        loginTime: new Date().getTime(), // Set login time in milliseconds
      };
      localStorage.setItem("token", response.data);
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect to the /home page
      navigate("/home");
    } catch (err) {
      setError(
        err.response?.data?.error || "Incorrect Passcode. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Function to handle Send SMS click
  const handleSendSMS = () => {
    const isMobileScreen = window.innerWidth < 768; // Screen width under 768px is considered mobile

    if (isMobileScreen) {
      // Redirect to SMS with pre-filled message on mobile-sized screens
      window.location.href = "sms:9781?body=OK";
    } else {
      // Show modal on larger screens
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`w-full max-w-sm p-8 bg-white rounded shadow-md text-center transition-all duration-500 ${
          loading ? "transform scale-95 opacity-50" : "opacity-100"
        }`}
      >
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Welcome back!
        </h2>
        {error && <div className="mb-4 text-sm text-red-600">{error}</div>}

        {/* Send SMS Button */}
        <button
          className="w-full py-2 mb-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          type="button"
          onClick={handleSendSMS}
        >
          Send SMS
        </button>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            or Login with your password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="ምስጥር ቁጥር"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Loading...
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              SMS Information
            </h3>
            <p className="mb-4 text-gray-700">
              Send "OK" to 9781 to receive a passcode for login.
            </p>
            <button
              className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
