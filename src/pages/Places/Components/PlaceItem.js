import React from "react";
import { getLatLongFromObject } from "../../../utils/helperFunctions";
import Map from "../../../shared/Components/UI/Map";
import Modal from "../../../shared/Components/UI/Modal";
import { useNavigate } from "react-router";

function PlaceItem(props) {
  const [showMap, setShowMap] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  const navigate = useNavigate();

  const showMapHandler = () => setShowMap((preValue) => !preValue);

  const deleteModalCloseHandler = () => setShowDeleteModal(false);

  const deleteModalOpenHandler = () => setShowDeleteModal(true);

  return (
    <React.Fragment>
      {/* Show  Map Modal */}
      <Modal show={showMap} onClick={showMapHandler} header={props.address}>
        <div className="w-full h-fit relative ">
          <Map
            center={getLatLongFromObject(props.location)}
            zoom={13}
            address={props.address}
          />
        </div>
      </Modal>
      {/* Show Map Modal Ends here  */}

      {/* showDeleteMap Modal Start Here  */}
      <Modal
        show={showDeleteModal}
        header="Are you Sure You want to Delete?"
        modalHeight="h-fit"
        onClick={deleteModalCloseHandler}
        footer={
          <div className="w-full flex flex-row justify-between items-center p-1">
            {" "}
            <button className="text-md rounded-full text-black hover:bg-slate-900 hover:text-white hover:transition-all hover:duration-300 border bg-slate-300 border-slate-900 px-3 py-1" onClick={deleteModalCloseHandler}>
              CANCEL
            </button>
            <button className="text-md rounded-full text-pink-500 hover:bg-pink-400 hover:transition-all hover:duration-300 hover:text-white px-3 py-1 border border-pink-400">
              CONTINUE
            </button>{" "}
          </div>
        }
      >
        <p className="p-5 font-light text-md text-slate-500 text-center mb-5 sm:mb-0">
          Do you want to proceed to delete this Place, and not that there is no
          going back thereafter.
        </p>
      </Modal>
      {/* ShowDeleteMap Modal Ends here */}

      <div className="container flex h-fit sm:h-[450px] flex-col bg-white rounded-md shadow-md shadow-stone-700 gap-4">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="w-full h-[55%] rounded-t-md"
        />
        <main className="flex flex-col items-center justify-center p-2">
          <h1 className="font-extrabold text-2xl sm:text-3xl font-[Calibri]">
            {props.title}
          </h1>
          <h2 className="font-bold text-lg sm:text-xl font-[Calibri] text-center">
            {props.address}
          </h2>
          <p className="text-slate-800 text-sm sm:text-lg text-center">
            {props.description}
          </p>
        </main>

        <footer className="flex w-full justify-center items-center border-t border-t-slate-300 h-auto">
          <div className="p-4 space-x-6 flex">
            <button
              className="font-bold text-xs p-1 rounded-sm bg-slate-400 sm:text-sm bg-transparent border border-slate-500 px-2 hover:bg-pink-400 hover:transition-all hover:text-white"
              onClick={showMapHandler}
            >
              VIEW ON MAP
            </button>
            <button
              className="font-bold text-xs p-1 rounded-sm  sm:text-sm bg-pink-400 text-white px-5 hover:brightness-50"
              onClick={() => navigate(`/places/${props.id}`)}
            >
              EDIT
            </button>
            <button
              className="font-bold text-xs p-1 rounded-sm sm:text-sm bg-pink-900 text-white px-5 hover:brightness-50"
              onClick={deleteModalOpenHandler}
            >
              DELETE
            </button>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default PlaceItem;
