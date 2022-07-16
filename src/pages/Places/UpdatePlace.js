import React from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

import { PlusCircleIcon } from "@heroicons/react/outline";
import { fetchPlaces } from "./UserPlaces";

function UpdatePlace() {
  const [place, setPlace] = React.useState(null);
  const { placeId } = useParams();
  const formRef = React.useRef(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all", shouldUnregister: true,});


  React.useEffect(() => {
    setPlace(fetchPlaces().find((p) => p.id === placeId));
    formRef.current.focus();
  }, [placeId]);

  const onSubmit = (data) => console.log(data);

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
            ref={formRef}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-lg font-light text-gray-500"
              >
                Title
              </label>
              <input
                defaultValue={place ? place.title :""}
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
                defaultValue={place ? place.description : ""}
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
                rows="4"
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
                Address
              </label>
              <input
                defaultValue={place ? place.address : ""}
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
                className="p-3 font-bold text-white bg-slate-900 rounded-full w-[50%] shrink-0  flex justify-center items-center gap-1"
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

export default UpdatePlace;
