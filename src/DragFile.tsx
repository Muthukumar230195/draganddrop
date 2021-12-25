import React from "react";

export default function DragFile() {
  //   const onTargetClick = () => {
  //     fileInputRef.current.click();
  //   };
  const handleDragEnter = (e: any) => {
    e.preventDefault();
    console.log("drag enter");
    console.log(e);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    console.log("drag leave");
    console.log(e);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    console.log("drag over");
    console.log(e);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    console.log("drag drop");
    console.log(e);
  };

  const handleInputChange = (e: any) => {
    console.log("file select");
    console.log(e);
  };
  return (
    <div
      className="dropzone"
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onChange={handleInputChange}
    >
      <div className="sub-header">Drag your audio file here:</div>
      <div className="draggable-container">
        <input
          type="file"
          className="file-browser-input"
          name="file-browser-input"
        />
      </div>
    </div>
  );
}
