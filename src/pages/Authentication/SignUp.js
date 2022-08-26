import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useFetch from "../../hooks/useFetch";

import { getImageFromFile } from "../../utils/helperFunctions";

import { CameraIcon, UserAddIcon, UserIcon } from "@heroicons/react/outline";

const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

function SignUp({ onChangeToLogin, isOnline }) {
  const [image, setImage] = React.useState("");
  const [imageError, setImageError] = React.useState("");

  /*  const navigate = useNavigate(); */

  const { loading, error, doApiCall, resetErrors } = useFetch();

  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });

  const passwordRef = React.useRef({});
  passwordRef.current = watch("password", "");

  const userImageRef = React.useRef();

  const signUpFormHandler = async (data) => {
    if (!isOnline) {
      return swal(
        "Internet Connection Error!",
        "Check your internet Connection and try again!",
        "error",
        { timer: 3000 }
      );
    }
    resetErrors();

    const { files } = userImageRef.current;
    if (!image || !imageTypes.includes(files[0].type)) {
      return setImageError("InValid Image Type Selected!");
    }

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("username", data.username);
    formData.append("fullName", data.fullName);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    formData.append("image", files[0]);
    console.log(data);
    /* console.log(formData.get("image")); */

    try {
      setImageError("");
      const dataSuccess = await doApiCall("users/createUser", "POST", formData);
      const signUpObj = {};

      if (dataSuccess.statusText === "Created") {
        for (const key in data) {
          signUpObj[key] = "";
        }
        reset(signUpObj);
        setImage("");

        toast.success("User Account Created Successfully, Login", {
          toastId: "success3",
        });

        onChangeToLogin();
      }
    } catch (err) {}
  };

  const handleFileChange = async (event) => {
    const { files } = event.target;
    if (!imageTypes.includes(files[0].type)) {
      setImageError("InValid Image Type Selected!");
      return;
    }
    const imageSource = await getImageFromFile(files[0]);
    setImage(imageSource);
    setImageError("");
  };

  if (imageError) {
    toast.error(imageError, { toastId: "error2" });
  }

  if (error && isOnline) {
    toast.error(
      typeof error === "string"
        ? error
        : "An Error Occured Check your form Fields and Try Again!",
      { toastId: "error2" }
    );
  }

  return (
    <main className="w-full flex flex-col relative  items-center p-10 ">
      <div className="max-w-lg h-fit flex flex-col bg-white shadow-lg w-3/4  sm:w-2/4 rounded-md p-6">
        <h2 className="py-4 text-xl text-center"> Create Account Page</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(signUpFormHandler)}
        >
          <div className="flex justify-center relative">
            <div
              className={`w-[100px] h-[100px] rounded-full border p-1 ${
                imageError && "border border-red-400"
              }`}
            >
              {image ? (
                <img
                  src={image}
                  alt="Avatar"
                  className="rounded-full h-[92px] w-[94px] object-contain"
                />
              ) : (
                <UserIcon className="text-gray-200 " />
              )}
            </div>
            <CameraIcon
              className="w-10 h-10 absolute top-20 ml-12  p-2 text-gray-400 cursor-pointer hover:brightness-90"
              onClick={() => userImageRef.current.click()}
            />
            <input
              defaultValue=""
              type="file"
              {...register("userImage")}
              hidden
              ref={userImageRef}
              onChange={handleFileChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullName"
              className="text-[16px] font-light text-gray-500"
            >
              Full Name
            </label>
            <input
              {...register("fullName", {
                required: true,
              })}
              className={`${
                errors.fullName
                  ? "border-red-300 text-red-300 focus:border-red-300"
                  : " border-slate-300 focus:border-slate-500"
              } "ring-0 active:ring-0 focus:outline-none  border  h-8 rounded-sm text-gray-500 p-2 font-light text-sm"`}
            />
            <span className="text-red-400 text-sm my-[-4px]">
              {errors.fullName && "Full Name is required!"}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-[16px] font-light text-gray-500"
            >
              Username
            </label>
            <input
              {...register("username", {
                required: true,
              })}
              className={`${
                errors.username
                  ? "border-red-300 text-red-300 focus:border-red-300"
                  : " border-slate-300 focus:border-slate-500"
              } "ring-0 active:ring-0 focus:outline-none  border  h-8 rounded-sm text-gray-500 p-2 font-light text-sm"`}
            />
            <span className="text-red-400 text-sm my-[-4px]">
              {errors.username && "Usernme is required!"}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-[16px] font-light text-gray-500"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: true,
              })}
              className={`${
                errors.email
                  ? "border-red-300 text-red-300 focus:border-red-300"
                  : " border-slate-300 focus:border-slate-500"
              } "ring-0 active:ring-0 focus:outline-none  border  h-8 rounded-sm text-gray-500 p-2 font-light text-sm"`}
            />
            <span className="text-red-400 text-sm my-[-4px]">
              {errors.email && "Email is required!"}
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
          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirmPassword"
              className="text-[16px] font-light text-gray-500"
            >
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required!",
                validate: (value) =>
                  value === passwordRef.current || "Passwords does not Match",
              })}
              className={`${
                errors.password
                  ? "border-red-300 text-red-300 focus:border-red-300"
                  : " border-slate-300 focus:border-slate-500"
              } "ring-0 active:ring-0 focus:outline-none  border  h-8 rounded-sm text-gray-500 p-2 font-light text-sm"`}
            />
            <span className="text-red-400 text-sm my-[-4px]">
              {errors.confirmPassword && errors.confirmPassword.message}
            </span>
          </div>
          <div className="py-2 w-[100%] flex flex-row items-center justify-center">
            <button
              disabled={loading}
              type="submit"
              className="disabled:bg-slate-400 disabled:cursor-not-allowed bg-slate-800 text-white px-4 py-2 rounded-full shadow-sm shrink-0 w-full flex gap-2 items-center justify-center hover:bg-pink-400 hover:transition-all hover:duration-300"
            >
              Sign Up User{" "}
              <UserAddIcon className="h-5 w-5 text-white" color="white" />
            </button>
          </div>
          <div className="cursor-pointer">
            <p
              className="text-sm text-gray-500 hover:text-blue-300"
              onClick={onChangeToLogin}
            >
              Already Have An Account? Login Here
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default SignUp;
