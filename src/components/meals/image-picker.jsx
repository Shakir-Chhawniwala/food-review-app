"use client";
import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageRef = useRef();

  function handleImageClick() {
    imageRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt="Image selected by user" fill />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          ref={imageRef}
          className={styles.input}
          type="file"
          id={name}
          acccept="image/png, image/jpg"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button className={styles.button} type="button" onClick={handleImageClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
