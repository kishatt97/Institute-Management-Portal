import React  from "react";

// styles
import './styles.css';

export default function DocPreview({
  title,
  imageData,
  uploadedBy,
  uploadedDate,
  filePath
}) {


  return (
    <div className="doc-preview-container">
      <a href={imageData} download> 
      <div className="doc-preview-pane">
        <div className="doc-preview-view">
        <br/>{filePath}
        <br/>{title}
        <br/>{'Uploaded By: '+uploadedBy}
        <br/>{'Uploaded Date: '+uploadedDate}
        </div>
        {/* <div className="doc-preview-path">{filePath}</div> */}
      </div>
      {/*<Modal open={isModalOpen} children={modalView} width="200px"></Modal>*/}
      </a>
    </div>
  );
}
