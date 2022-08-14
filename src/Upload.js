import React, { useState } from "react";

function Upload() {
  const [photoName, setPhotoName] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handlePhotoNameChange(event) {
    setPhotoName(event.target.value);
  }

  function handlePhotoLinkChange(event) {
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

      fetch("https://drawingboardjsonserver.herokuapp.com/photos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dataArray: dataArray,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("response (from fetch request): ", response);
        });
    } else {
      setErrors(["Name of photo is required!"]);
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
      <h2>Upload Image To Board</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="photoNameUpload">Name: </label>
          <input
            name="photoNameUpload"
            type="text"
            onChange={handlePhotoNameChange}
            value={photoName}
          />
          <label htmlFor="photoLinkUpload"> Link: </label>
          <input
            name="photoLinkUpload"
            type="text"
            onChange={handlePhotoLinkChange}
            value={photoLink}
          />
        </div>
        <br />
        <button className="UploadButton" type="submit">
          Upload
        </button>
      </form>
      {errors.length > 0
        ? errors.map((error, index) => (
            <p key={index} style={{ color: "red" }}>
              {error}
            </p>
          ))
        : null}
      <h3>Recent Submissions Below: </h3>
      {listOfSubmissions}
    </div>
  );
}

export default Upload;
