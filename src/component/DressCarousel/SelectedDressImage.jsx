import React from "react";
import { useDispatch } from "react-redux";
import { dressForNewLook } from "../../redux/actioncreators/actionsSaga";

export default function SelectedDressImage({
  selectedImage,
  setSelectedImage,
  property,
}) {
  const dispatch = useDispatch();
  return (
    <img
      src={selectedImage.imgUrl}
      alt="img"
      className="bigImg"
      onClick={() => {
        setSelectedImage(null);
        dispatch(dressForNewLook(property, null));
      }}
    />
  );
}
