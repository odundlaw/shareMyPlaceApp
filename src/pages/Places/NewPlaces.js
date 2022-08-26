import React from "react";

import { useForm } from "react-hook-form";
import { PlusCircleIcon } from "@heroicons/react/outline";

import { getImageFromFile } from "../../utils/helperFunctions";
import { toast } from "react-toastify";
import useFetch from "../../hooks/useFetch";

const MIME_TYPES = ["image/png", "image/jpg", "image/jpeg"];

function NewPlaces() {
  const [imgSrc, setImgSrc] = React.useState("");
  const [imageError, setImageError] = React.useState("");

  const imgRef = React.useRef(null);

  const { doApiCall, resetErrors, loading, errors: postErrors } = useFetch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "all", shouldUnregister: true });

  const onSubmit = async (data) => {
    if (!imgSrc) {
      setImageError("Kindly Select An Image");
      return;
    }

    if (!MIME_TYPES.includes(!imgRef.current.files[0].type)) {
      setImageError("Kindly Select a a Valid Image!");
      return;
    }

    const { files } = imgRef.current;

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("address", data.address);
    formData.append("description", data.description);
    formData.append("image", files[0]);

    try {
      const postData = await doApiCall("")
    } catch (err) {}
  };

  const handleImageChange = async (e) => {
    setImageError("");
    const file = e.target.files[0];
    /* console.log(file); */
    if (!file) {
      setImageError("Please choose a file to upload");
      return;
    }

    if (!MIME_TYPES.includes(file.type)) {
      setImgSrc("");
      setImageError("Please choose a Valid Image");
      return;
    }

    const imgSrc = await getImageFromFile(e.target.files[0]);

    if (imgSrc) {
      setImgSrc(imgSrc);
      setImageError("");
    }
  };

  if (imageError) {
    toast.error(imageError, { toastId: "error5" });
  }

  return (
    <div className="flex justify-center w-[80%] md:w-[60%] lg:w-[50%] sm:w-[60%]">
      <div className="w-full shadow-md rounded-sm bg-white h-fit">
        {/* <header className="p-2 border-b brderb-slate-900 bg-pink-400 rounded-t-md flex justify-center">
          {" "}
          <h2 className="text-white sm:text-xl text-lg">Add Place Form</h2>
        </header> */}
        <main className="p-10 w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-lg font-light text-gray-500"
              >
                Title
              </label>
              <input
                {...register("title", {
                  required: true,
                  maxLength: 50,
                  minLength: 10,
                })}
                className={`${
                  errors.title
                    ? "border-red-300 text-red-300 focus:border-red-300"
                    : " border-slate-300 focus:border-slate-500"
                } "ring-0 active:ring-0 focus:outline-0  border  h-8 rounded-sm text-gray-500 p-2 font-light text-sm"`}
              />
              <span className="text-red-400 text-sm my-[-4px]">
                {errors.title && "Title must be between 10 to 50 Characters!"}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="description"
                className="text-lg font-light text-gray-500 z"
              >
                Description
              </label>
              <textarea
                {...register("description", {
                  required: true,
                  minLength: 10,
                  maxLength: 250,
                })}
                className={`${
                  errors.description
                    ? "border-red-300 text-red-300 focus:border-red-300"
                    : " border-slate-300 focus:border-slate-500"
                } "ring-0 active:ring-0 focus:outline-0  border rounded-sm text-gray-500 p-2 font-light text-sm"`}
                rows="2"
                cols="40"
              ></textarea>
              <span className="text-red-400 text-sm my-[-4px]">
                {errors.description &&
                  "Description must be at least 10 Charaters!"}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="address"
                className="text-lg font-light text-gray-500"
              >
                Select Place Image
              </label>
              <input
                hidden
                type="file"
                {...register("placeImage")}
                ref={imgRef}
                onChange={handleImageChange}
                className={`" ring-0 active:ring-0 focus:outline-0 border h-8 rounded-sm text-gray-500 p-2 font-light text-sm"`}
              />
              <div
                className={`${
                  imageError
                    ? "border border-red-400"
                    : "border border-slate-300"
                } h-32 w-1/2`}
              >
                {imgSrc && (
                  <img
                    src={imgSrc}
                    alt="Place Pics"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <span
                className="rounded-full px-3 py-1 bg-pink-400 text-white text-center cursor-pointer w-1/2 flex items-center justify-evenly gap-2"
                onClick={() => imgRef.current.click()}
              >
                Select Place Image{" "}
                <PlusCircleIcon className="w-5 h-5 text-slate-900" />
              </span>
              <span className="text-red-400 text-sm my-[-4px]">
                {imageError && imageError}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="address"
                className="text-lg font-light text-gray-500"
              >
                Address
              </label>
              <input
                {...register("address", {
                  required: true,
                  minLength: 15,
                  maxLength: 150,
                })}
                className={`${
                  errors.address
                    ? "border-red-300 text-red-300 focus:border-red-300"
                    : " border-slate-300 focus:border-slate-500"
                } "ring-0 active:ring-0 focus:outline-0  border  h-8 rounded-sm text-gray-500 p-2 font-light text-sm"`}
              />
              <span className="text-red-400 text-sm my-[-4px]">
                {errors.address &&
                  "Address is required and  must be at least 10 Charaters!"}
              </span>
            </div>
            <div className="p-2 flex justify-center">
              <button
                type="submit"
                className="disabled:cursor-not-allowed disabled:bg-slate-200  p-3 font-bold text-white bg-slate-900 rounded-full w-full md:w-[50%] shrink-0  flex justify-center items-center gap-1"
                disabled={!isValid || !imgSrc}
              >
                ADD PLACE <PlusCircleIcon height={20} width={20} />
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default NewPlaces;
