import React from "react";
import { useParams } from "react-router";
import PlaceLists from "./Components/PlaceLists";

const placesArray = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "2",
  },
];

const fetchPlaces = () => placesArray;

function UserPlalces() {
  const [userPlace, setUserPlace] = React.useState([]);
  const { userId } = useParams();

  React.useEffect(() => {
    setUserPlace(fetchPlaces().filter((place) => place.creator === userId));
  }, [setUserPlace, userId]);

  return <PlaceLists userPlace={userPlace} />;
}

export default UserPlalces;
