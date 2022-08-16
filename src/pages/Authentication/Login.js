import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Context/Auth/AuthState";
import useFetch from "../../hooks/useFetch";

import { LoginIcon } from "@heroicons/react/outline";
import { toast } from "react-toastify";

function Login({ onChangeToSignUp }) {
  const auth = useAuth();

  const { resetErrors, doApiCall, error, loading } = useFetch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const loginFormHandler = async (loginDetails) => {
    resetErrors();
    const loginData = JSON.stringify({
      email: loginDetails.username,
      password: loginDetails.password,
    });

    try {
      const data = await doApiCall("auth", "POST", loginData, {
        "Content-Type": "application/json",
      });
      auth.login();
    } catch (err) {}
  };

  if (error) {
    toast.error(
      typeof error === "string" ? error : "An Error Occured Kinly Try Again!",
      {
        toastId: "error1",
      }
    );
  }

  return (
    <main className="w-full flex flex-col h-full justify-center items-center p-10">
      <div className="max-w-lg flex flex-col bg-white shadow-lg w-3/4  sm:w-[350px] rounded-md p-6">
        <h2 className="py-4 text-xl text-center">
          {" "}
          Login/ Authentication Page
        </h2>
        <div className="flex justify-end gap-3 items-center">
          <p className="text-light text-sm text-gray-400">
            ... Login with Gmail:
          </p>{" "}
          <button className="px-3 py-1 bg-red-500 text-white rounded-full font-extrabold text-xl hover:bg-red-300 hover:transition-all hover:duration-300">
            G
          </button>
        </div>
        <div className="flex justify-center border-b border-b-gray-100 relative pb-4 mb-2">
          <h2 className="text-light text-xl text-gray-400 bg-white absolute b-0 px-3">
            Or
          </h2>
        </div>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(loginFormHandler)}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-[16px] font-light text-gray-500"
            >
              Email/Username
            </label>
            <input
              {...register("username", {
                required: true,
              })}
              className={`${
                errors.username
                  ? "border-red-300 text-red-300 focus:border-red-300"
                  : " border-slate-300 focus:border-slate-500"
              } "ring-0 active:ring-0 focus:ring-0 focus:outline-none active:outline-none   border h-8 rounded-sm text-gray-500 p-2 font-light text-sm"`}
            />
            <span className="text-red-400 text-sm my-[-4px]">
              {errors.username && "Usernme is required!"}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-[16px] font-light text-gray-500"
            >
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
              })}
              className={`${
                errors.password
                  ? "border-red-300 text-red-300 focus:border-red-300"
                  : " border-slate-300 focus:border-slate-500"
              } "ring-0 active:ring-0 focus:outline-none  border  h-8 rounded-sm text-gray-500 p-2 font-light text-sm"`}
            />
            <span className="text-red-400 text-sm my-[-4px]">
              {errors.password && "Password is required!"}
            </span>
          </div>
          <div className="py-2 w-[100%] flex flex-row items-center justify-center">
            <button
              type="submit"
              className="bg-slate-800 text-white px-4 py-2 rounded-full shadow-sm shrink-0 w-full flex gap-2 items-center justify-center hover:bg-pink-400 hover:transition-all hover:duration-300"
            >
              Login <LoginIcon className="h-5 w-5 text-white" color="white" />
            </button>
          </div>
          <div className="cursor-pointer">
            <p
              className="text-sm text-gray-500 hover:text-blue-300"
              onClick={onChangeToSignUp}
            >
              Don't Have an Account? SignUp Here
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
