import React from "react";

function Upload() {
  return (
    <div>
      <NavBar />
      <h2>Upload</h2>
      <form>
        <label for="photoName"></label>
        <input name="photoName" type="text" value="" />
        <label for="photoUpload"></label>
        <input name="photoUpload" type="text" value="" />
      </form>
    </div>
  );
}

export default Upload;
