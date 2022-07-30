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
      // Make a fetch() request for 'my-json-server.tripcode.com' version of the repo:
      // Use this lab as a reference:
      // /Users/samuelbanya/hub/Development/code/phase-2/react-hooks-fetch-crud-code-along/src/components:
      // https://learning.flatironschool.com/courses/5285/assignments/172474?module_item_id=376381
      fetch(
        "https://my-json-server.typicode.com/SamuelBanya/BackToTheDrawingBoard",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dataArray: dataArray,
          }),
        }
      )
        .then((response) => response.json())
        .then((response) => {
          console.log("response (from fetch request): ", response);
        });
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
