import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post("http://localhost:8000/caption", formData);
    setCaption(res.data.caption);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Image Captioning App</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
        Generate Caption
      </button>
      {caption && <p><b>Caption:</b> {caption}</p>}
    </div>
  );
}

export default App;
