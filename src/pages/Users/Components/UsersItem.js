import React from "react";
import { useNavigate } from "react-router";
/* import { getImageFromFile } from "../../../utils/helperFunctions"; */

function UsersItem({ id, name, places, imageUrl }) {
 /*  const [imageSrc, setImgSrc] = React.useState(""); */
  const navigate = useNavigate();

  /* React.useEffect(() => {
    (async () => {
      const img = await getImageFromFile(imageUrl);
      setImgSrc(img[0]);
    })();
  }, [imageUrl]); */

  return (
    <React.Fragment>
      <div
        className="flex items-center gap-4 p-3 bg-slate-700 max-w-sm min-w-[300px] shadow-xl rounded-lg cursor-pointer hover:bg-pink-300 hover:transition-all hover:duration-300"
        onClick={() => navigate(`/${id}/places`)}
      >
        <div className="w-12">
          <img
            src={`http://localhost:8080${imageUrl}`}
            alt="user Avatar"
            className="rounded-full w-full h-full"
          />
        </div>
        <aside>
          <h2 className="text-white font-light text-lg">{name}</h2>
          <p className="text-pink-500 font-semibold">
            {places > 1 ? `${places} places` : `${places} place`}
          </p>
        </aside>
      </div>
    </React.Fragment>
  );
}

export default UsersItem;
