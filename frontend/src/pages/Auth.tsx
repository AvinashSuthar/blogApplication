import { Link, useNavigate } from "react-router-dom";
import Quote from "../components/Quote";
import { ChangeEvent, useState } from "react";
import { SignupUser, signupUser } from "@avinashsuthar/meduim";
import axios from "axios";
import { SIGNUIN_ROUTE, SIGNUP_ROUTE } from "../constants";
import { toast } from "sonner";
import Loader from "../components/Loader";
interface AuthProps {
  auth: "signin" | "signup";
}

const Auth = ({ auth }: AuthProps) => {
  const [authValues, setAuthValues] = useState<SignupUser>({
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { success } = signupUser.safeParse(authValues);
  const validateInput = () => {
    if (!success) {
      toast.error("Please Fill Correct Inputs");
    }
  };
  const sendRequest = async () => {
    try {
      setLoading(true);
      const route = auth === "signup" ? SIGNUP_ROUTE : SIGNUIN_ROUTE;
      const res = await axios.post(route, authValues);
      console.log("here");
      localStorage.setItem("token", res.data.jwt);
      toast.success("Successfull!");
      setLoading(false);
      navigate("/blogs");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-2 justify-center items-center">
      <div className="justify-center">
        <div className="text-3xl font-bold flex justify-center">
          Create Your Account
        </div>
        <div className="flex flex-col justify-center items-center ">
          {auth === "signup" ? (
            <div>
              Already have an account? <Link to={"/signin"}>Login</Link>
            </div>
          ) : (
            <div>
              Don't have an Account? <Link to={"/signup"}>Sign Up</Link>
            </div>
          )}
          <div className="w-80">
            {auth === "signup" && (
              <InputComponent
                label="Name"
                placeholder="Enter Your Name"
                onchange={(e) => {
                  setAuthValues({
                    ...authValues,
                    name: e.target.value,
                  });
                }}
              />
            )}

            <InputComponent
              label="Email"
              type="email"
              placeholder="Enter Your Email"
              onchange={(e) => {
                setAuthValues({
                  ...authValues,
                  email: e.target.value,
                });
              }}
            />
            <InputComponent
              label="Password"
              type="password"
              placeholder="Enter Your Password"
              onchange={(e) => {
                setAuthValues({
                  ...authValues,
                  password: e.target.value,
                });
              }}
            />
            <button
              onClick={() => {
                sendRequest();
                validateInput();
              }}
              type="button"
              className="text-white w-full mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {loading ? <Loader /> : auth === "signup" ? "Sign Up" : "Login "}
            </button>
          </div>
        </div>
      </div>
      <div>
        <Quote />
      </div>
    </div>
  );
};
interface InputProps {
  label: string;
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function InputComponent({
  label,
  placeholder,
  onchange,
  type = "text",
}: InputProps) {
  return (
    <div className="mt-4">
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        onChange={onchange}
        required
      />
    </div>
  );
}

export default Auth;
