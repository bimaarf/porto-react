import React, { useState } from "react";
import validator from "validator";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const Register = ({ setAuthCheck }) => {
  const navRedirect = useNavigate();
  const [loadSubmit, setLoadSubmit] = useState(false);
  const [emailValidator, setEmailValidator] = useState("");
  const [registerInput, setRegister] = useState({
    name: "",
    error_list: [],
  });
  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const validateEmail = (e) => {
    e.persist();
    const email = e.target.value;
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
    if (validator.isEmail(email)) {
      setEmailValidator("Email is valid!");
    } else {
      setEmailValidator("Enter valid email!");
    }
  };

  const [checkPassword, setCheckPassword] = useState(0);
  const [checkPassConfirm, setCheckPassConfirm] = useState(0);
  const handleCheckPassword = (e) => {
    setCheckPassword(e.target.value);
  };
  const handleCheckPassConfirm = (e) => {
    setCheckPassConfirm(e.target.value);
  };
  const regisNow = (e) => {
    setLoadSubmit(true);
    e.preventDefault();
    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: checkPassConfirm,
      password_confirmation: checkPassConfirm,
    };
    if (
      emailValidator === "Email is valid!" &&
      checkPassword === checkPassConfirm
    ) {
      axios.get("/sanctum/csrf-cookie").then((res) => {
        axios.post(`api/register`, data).then((res) => {
          if (res.data.status === 200) {
            setAuthCheck(true);
            toast.success(
              "Successfully register you will be redirected to the home page!"
            );
            localStorage.setItem("auth_token", res.data.token);
            localStorage.setItem("auth_id", res.data.id);
            localStorage.setItem("auth_name", res.data.username);
            navRedirect("/");
          } else if (res.data.status === 500) {
            toast.error("e-mail has been registered!");
          } else {
            setRegister({
              ...registerInput,
              error_list: res.data.validation_errors,
            });
            console.log("Failed to register enter data correctly");
          }
          setLoadSubmit(false);
        });
      });
    } else if (
      emailValidator === "Enter valid email!" &&
      checkPassword !== checkPassConfirm
    ) {
      setLoadSubmit(false);
      toast.error(
        "The email and Confirmation password you entered is invalid!"
      );
    } else if (emailValidator === "Enter valid email!") {
      setLoadSubmit(false);
      toast.error("The email you entered is invalid!");
    } else {
      setLoadSubmit(false);
      toast.error("Confirmation password does not match");
    }
  };
  const handleClearName = (e) => {
    registerInput.error_list.name = "";
  };
  const handleClearEmail = (e) => {
    registerInput.error_list.email = "";
  };
  const handleClearPassword = (e) => {
    registerInput.error_list.password = "";
  };
  const handleClearPassConfirm = (e) => {
    registerInput.error_list.password_confirmation = "";
  };
  return (
    <>
      <section className="xl:container lg:mx-auto p-4">
        <div className="px-6 text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <picture>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt=""
                />
              </picture>
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 w-full md:mb-0">
              <form onSubmit={regisNow}>
                <p className="text-lg mb-0 mr-4 text-gray-700 dark:text-gray-300 text-bold">
                  Sign up
                </p>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center text-gray-500 dark:text-gray-300 mx-4 mb-0">
                    Scroll up
                  </p>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    onClick={handleClearName}
                    onChange={handleInput}
                    value={registerInput.name}
                    type="text"
                    name="name"
                    id="name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Username
                  </label>
                  <span className="text-red-600 text-xs">
                    {registerInput.error_list.name}
                  </span>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    onClick={handleClearEmail}
                    value={registerInput.email}
                    onChange={validateEmail}
                    type="email"
                    name="email"
                    id="email"
                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                    ${
                      emailValidator === "" &&
                      emailValidator !== "Enter valid email!"
                        ? "dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        : "" || emailValidator === "Enter valid email!"
                        ? "dark:focus:border-red-600 focus:outline-none focus:ring-0 focus:border-red-500 peer"
                        : "dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    }`}
                    placeholder=" "
                    required=""
                  />
                  <label
                    htmlFor="email"
                    className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
                    ${
                      emailValidator === "" &&
                      emailValidator !== "Enter valid email!"
                        ? "peer-focus:text-blue-600 peer-focus:dark:text-blue-500 dark:text-gray-400 "
                        : "" || emailValidator === "Enter valid email!"
                        ? "peer-focus:text-red-600 peer-focus:dark:text-red-600 dark:text-red-600"
                        : "peer-focus:text-blue-600 peer-focus:dark:text-blue-500 dark:text-gray-400 "
                    }
                    `}
                  >
                    Email address
                  </label>
                  <span className="text-red-600 text-xs">
                    {registerInput.error_list.email}
                  </span>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    onClick={handleClearPassword}
                    onChange={handleCheckPassword}
                    value={registerInput.password}
                    type="password"
                    name="password"
                    id="password"
                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 ${
                      checkPassword.length > 5
                        ? "dark:focus:border-blue-500  focus:border-blue-600 peer"
                        : "dark:focus:border-red-500  focus:border-red-600 peer"
                    }`}
                    placeholder=" "
                    required=""
                  />
                  <label
                    htmlFor="password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                  <span
                    className={`${
                      checkPassword.length > 5 || checkPassword === 0
                        ? "hidden"
                        : "text-xs text-red-600"
                    }`}
                  >
                    The password must be at least 6 characters.
                  </span>
                  <span className="text-red-600 text-xs">
                    {registerInput.error_list.password}
                  </span>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    onClick={handleClearPassConfirm}
                    onChange={handleCheckPassConfirm}
                    value={registerInput.password_confirmation}
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                  ${
                    checkPassConfirm === 0
                      ? "dark:focus:border-blue-500 focus:border-blue-600 peer"
                      : "" || checkPassConfirm !== checkPassword
                      ? "dark:focus:border-red-600 focus:border-red-600 peer"
                      : "dark:focus:border-blue-500 focus:border-blue-600 peer"
                  }

                  `}
                    placeholder=" "
                    required=""
                  />
                  <label
                    htmlFor="password_confirmation"
                    className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
                    ${
                      checkPassConfirm === 0
                        ? "peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                        : "" || checkPassConfirm !== checkPassword
                        ? "peer-focus:text-red-600 peer-focus:dark:text-red-600 dark:text-red-600 "
                        : "peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                    }
                    `}
                  >
                    {checkPassConfirm === 0
                      ? "Confirm Password"
                      : "" || checkPassConfirm !== checkPassword
                      ? "This password does not match"
                      : "This password match"}
                  </label>
                  <span
                    className={`${
                      checkPassConfirm.length > 5 || checkPassConfirm === 0
                        ? "hidden"
                        : "text-xs text-red-600"
                    }`}
                  >
                    The password must be at least 6 characters.
                  </span>
                  <span className="text-red-600 text-xs">
                    {registerInput.error_list.password_confirmation}
                  </span>
                </div>
                <button
                  type="submit"
                  className={`text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ${
                    checkPassword !== checkPassConfirm ||
                    (checkPassword && checkPassConfirm === null) ||
                    checkPassword.length < 6 ||
                    emailValidator === "Enter valid email!"
                      ? "bg-blue-800"
                      : "dark:bg-blue-600 bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  } `}
                  disabled={
                    loadSubmit ||
                    checkPassword !== checkPassConfirm ||
                    checkPassword.length < 6 ||
                    emailValidator === "Enter valid email!"
                      ? true
                      : false
                  }
                >
                  {loadSubmit ? (
                    <>
                      Loading
                      <svg
                        role="status"
                        className="inline w-3 h-3 ml-2 text-white animate-spin mb-0.5"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
