import React from "react";
import { useDispatch } from 'react-redux' 
import { dressForNewLook } from "../../redux/actioncreators/actionsSaga";

export default function SelectedDressImage({imageUrl, setSelectedmageUrl, property}) {
  const dispatch = useDispatch();
  return (
    <img
      src={imageUrl}
      alt="img"
      className="bigImg"
      onClick={() => {
        setSelectedmageUrl(null);
        dispatch(dressForNewLook(property, null));
      }}
    />
  );
}
