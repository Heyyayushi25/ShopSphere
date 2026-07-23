import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome Back 👋</h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition">
            Login
          </button>
        </div>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-semibold">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
