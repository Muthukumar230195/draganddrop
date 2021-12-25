import React, { useState } from "react";

export default function DragDrop() {
  const [inDropZone, setInDropZone] = useState(false);
  const [file, setFile] = useState<File>();
  const handleDragEnter = (event: any) => {
    event.preventDefault();
    setInDropZone(true);
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    setInDropZone(true);
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    let files = [...event.dataTransfer.files];
    console.log("File List");
    console.log(files);
    if (files) {
      setFile(files[0]);
      setInDropZone(false);
    }
  };
  return (
    <div
      id="container"
      className={"drag-drop-zone"}
      onDrop={(event) => handleDrop(event)}
      onDragOver={(event) => handleDragOver(event)}
      onDragEnter={(event) => handleDragEnter(event)}
    >
      <p>Drag your files here</p>
    </div>
  );
}
