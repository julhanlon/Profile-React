import { useState } from "react";
import profileImage from "../assets/images/profile.png";

const useUserModel = () => {
  const [nameState, setName] = useState("Julia");
  const [imageState, setImage] = useState(profileImage);
  const [statusState, setStatus] = useState("Excited");
  const [excitementLevelState, setExcitementLevel] = useState("");
  const [profilesState, setProfilesState] = useState([]);

  return {
    error: nameState === "" ? "Please enter a name" : " ",
    name: {
      value: nameState,
      onChange: (e) => setName(e.target.value),
    },
    image: {
      value: imageState,
      onChange: (e) => setImage(e.target.value),
    },
    status: {
      value: statusState,
      onChange: (e) => setStatus(e.target.value),
    },
    excitementLevel: {
      value: excitementLevelState,
      onChange: (e) => setExcitementLevel(e.target.value),
    },

    testThing: {
      value: profilesState,
      click: () => {
        setProfilesState([...profilesState, { name: nameState }]);
      },
    },
  };
};

export default useUserModel;