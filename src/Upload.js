import React from "react";

function Upload() {
  return (
    <div>
      <h1>Upload</h1>
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
