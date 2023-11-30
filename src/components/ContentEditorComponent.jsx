import React, { useState } from "react";
import CustomTextField from "./CustomTextField";
import CustomTextArea from "./CustomTextArea";

const ContentEditorComponent = ({ teamSpecs, onChange }) => {
  const [content, setContent] = useState("");

  const handleUpdate = () => {
    // Perform validation if needed
    // Update the spec with the new content
    onChange({ ...teamSpecs.content, content });
  };

  return (
    <div>
      <div>
        <CustomTextField />
        <CustomTextArea/>
      </div>
      {/* <button onClick={handleUpdate}>Update Content</button> */}
    </div>
  );
};

export default ContentEditorComponent;
