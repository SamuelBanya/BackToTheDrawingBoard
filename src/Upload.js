import React, { useState } from "react";
const url = require("url");
const http = require("http");
const sizeOf = require("image-size");

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
      // TODO:
      // Use 'probe-image-size' library to determine width and height of the image the user passed in
      // Then, add a 'width' and 'height' key value to the 'formData' variable so that the
      // values are then added back to 'db.json' accordingly:
      // https://github.com/nodeca/probe-image-size
      const options = url.parse(photoLink);

      // 'http.get()' request so that I can obtain the image itself:
      http.get(options, function (response) {
        const chunks = [];
        response
          .on("data", function (chunk) {
            chunks.push(chunk);
          })
          .on("end", function () {
            const buffer = Buffer.concat(chunks);
            console.log(sizeOf(buffer));
          });
      });

      const formData = { photoName: photoName, photoLink: photoLink };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setPhotoName("");
      setPhotoLink("");
      setErrors([]);
      console.log("handleSubmit() called");

      console.log("dataArray (before fetch() call): ", dataArray);
      fetch("http://localhost:3000/photos", {
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
        <button type="submit">Upload</button>
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
