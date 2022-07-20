import { CameraIcon, UserAddIcon, UserIcon } from "@heroicons/react/outline";
import React from "react";
import { useForm } from "react-hook-form";
import { getImageFromFile } from "../../utils/helperFunctions";

function SignUp({ onChangeToLogin }) {
  const [image, setImage] = React.useState("");

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const passwordRef = React.useRef({});
  passwordRef.current = watch("password", "");

  const userImageRef = React.useRef();

  const signUpFormHandler = (data) => console.log(data);

  const handleFileChange = async (event) => {
    const imageSource = await getImageFromFile(event.target.files[0]);
    setImage(imageSource);
  };

  return (
    <main className="w-full flex flex-col relative  items-center p-10 ">
      <div className="max-w-lg h-fit flex flex-col bg-white shadow-lg w-3/4  sm:w-2/4 rounded-md p-6">
        <h2 className="py-4 text-xl text-center"> Create Account Page</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(signUpFormHandler)}
        >
          <div className="flex justify-center relative">
            <div className="w-24 h-24 rounded-full border p-2">
              {image ? (
                <img src={image} alt="Avatar" className="rounded-full h-[80px] w-[80px]" />
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
              {...register("userImage", {
                required: true,
              })}
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
              } "ring-0 active:ring-0 focus:outline-0  border  h-8 rounded-sm text-gray-500 p-2 font-light text-sm"`}
            />
            <span className="text-red-400 text-sm my-[-4px]">
              {errors.fullName && "Usernme is required!"}
            </span>
          </div>
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
              } "ring-0 active:ring-0 focus:outline-0  border  h-8 rounded-sm text-gray-500 p-2 font-light text-sm"`}
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
              } "ring-0 active:ring-0 focus:outline-0  border  h-8 rounded-sm text-gray-500 p-2 font-light text-sm"`}
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
              } "ring-0 active:ring-0 focus:outline-0  border  h-8 rounded-sm text-gray-500 p-2 font-light text-sm"`}
            />
            <span className="text-red-400 text-sm my-[-4px]">
              {errors.confirmPassword && errors.confirmPassword.message}
            </span>
          </div>
          <div className="py-2 w-[100%] flex flex-row items-center justify-center">
            <button
              type="submit"
              className="bg-slate-800 text-white px-4 py-2 rounded-full shadow-sm shrink-0 w-full flex gap-2 items-center justify-center hover:bg-pink-400 hover:transition-all hover:duration-300"
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
