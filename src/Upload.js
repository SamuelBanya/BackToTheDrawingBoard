import React, { useState } from "react";

function Upload() {
  const [photoName, setPhotoName] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handlePhotoNameChange(event) {
    console.log("handlePhotoNameChange");
    setPhotoName(event.target.value);
  }

  function handlePhotoLinkChange(event) {
    console.log("handlePhotoLinkChange");
    setPhotoLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (photoName.length > 0) {
      const formData = { photoName: photoName, photoLink: photoLink };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setPhotoName("");
      setPhotoLink("");
      setErrors([]);
      console.log("handleSubmit() called");
    } else {
      setErrors(["Name is required!"]);
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.photoName} {data.photoLink}
      </div>
    );
  });

  return (
    <div>
      <h2>Upload</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="photoNameUpload"
          type="text"
          onChange={handlePhotoNameChange}
          value={photoName}
        />
        <input
          name="photoLinkUpload"
          type="text"
          onChange={handlePhotoLinkChange}
          value={photoLink}
        />
        <button type="submit">Upload</button>
      </form>
      {errors.length > 0
        ? errors.map((error, index) => (
            <p key={index} style={{ color: "red" }}>
              {error}
            </p>
          ))
        : null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Upload;
