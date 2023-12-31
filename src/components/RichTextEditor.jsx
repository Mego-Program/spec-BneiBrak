import React, { useState, useRef, useEffect, } from "react";
import { Editor, EditorState, getDefaultKeyBinding, RichUtils, convertToRaw, convertFromRaw, } from 'draft-js';
// import './RichText.css';
// import "./MyRichEditor";
// import { Box, TextField, } from "@mui/material";
import draftToHtml from 'draftjs-to-html';
import { RichEditorRoot, RichEditorEdit, RichEditorControls, } from "./RichTextEditor.style";

// import { styled} from '@mui/material/styles';
// const codeBlock11 =styled(TextField)`
// .RichEditor-editor .public-DraftStyleDefault-pre {
//   backgroundColor: rgba(0, 0, 0, 0.05);
//   fontFamily: 'Inconsolata', 'Menlo', 'Consolas', monospace;
//   fontSize: 16px;
//   padding: 20px;
// }

// `

const style = {
  // RichEditor_root:  {
  //   background: "#fff",
  //   border: "1px solid #ddd",
  //   fontFamily: "Georgia, serif",
  //   fontSize: "14px",
  //   padding: "15px",
  //   minHeight: "300px",
  // },
  // RichEditor_editor: {
  //   borderTop	: "1px solid #ddd",
  //   cursor: "text",
  //   fontSize: "16px",
  //   marginTop: "10px",
  // },
  // RichEditor_hidePlaceholder:{
  //   display: "none",
  //   borderTop	: "1px solid #ddd",
  //   cursor: "text",
  //   fontSize: "16px",
  //   marginTop: "10px",
  // },
  // RichEditor_controls: {
  //   fontFamily: "Helvetica, serif",
  //   fontSize: "14px",
  //   marginBottom: "5px",
  //   userSelect: "none",
  // },
  RichEditor_styleButton: {
    color: "#999",
    cursor: "pointer",
    marginRight: "16px",
    padding: "2px 0",
    display: "inline-block",
  },
  RichEditor_activeButton: {
    color: "#5890ff",
    cursor: "pointer",
    marginRight: "16px",
    padding: "2px 0",
    display: "inline-block",
  },
  // RichEditor_blockquote: {
  //   borderLeft: "5px solid #eee",
  //   color: "#666",
  //   fontFamily: "Hoefler Text, 'Georgia', serif",
  //   fontStyle: "italic",
  //   margin: "16px 0",
  //   padding: "10px 20px",
  // },
  // '&.public-DraftStyleefault-pre': {
  //   backgroundColor: 'rgba(0, 0, 0, 0.05)',
  //   fontFamily: 'Inconsolata, Menlo, Consolas, monospace',
  //   fontSize: '200px',
  //   padding: '20px',

  // },
  // RichEditor_editor_code_block: {
  //   backgroundColor: "rgb(0, 0, 0, 0.05)",
  //   fontFamily: "Inconsolata, Menlo, Consolas, monospace",
  //   fontSize:"16px",
  //   padding: "20px",
  // },
}

const RichTextEditor = ({content}) => {
  //const contentState = convertFromRaw(rawEditorData);
  
  const rawEditorData = JSON.parse(content)
  const editorContent = convertFromRaw(rawEditorData);

  //const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorState, setEditorState] = useState(EditorState.createWithContent(editorContent));

  const editorRef = useRef(null);''

  const focusEditor = () => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };
  // *********************
  const saveDraftAsHTML = () => {
    console.log("Simulating save")
    const raw = convertToRaw(editorState.getCurrentContent())
    const contentString = JSON.stringify(raw)
    console.log('contentString', contentString)
    // const html = draftToHtml(raw)
    // console.log(html);
    // TODO! Complete the rest

  };


  // ******************************


  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return true;
    }
    return false;
  };

  const mapKeyToEditorCommand = (e) => {
    if (e.keyCode === 9) {
      const newEditorState = RichUtils.onTab(
        e,
        editorState,
        4,
      );
      if (newEditorState !== editorState) {
        setEditorState(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  };

  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  // let className = style.RichEditor_editor;
  let className = <RichEditorEdit />;

  const contentState = editorState?.getCurrentContent();
  // useState.saveEditorContent(contentState);
  // useState.setState({ editorState });
  // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  // console.log(contentState.);

  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== 'unstyled') {
      // className = style.RichEditor_hidePlaceholder;


      className = <RichEditorEdit />;
    }
  }




  return (
    <RichEditorRoot>
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <div className={className} onClick={focusEditor}>
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={setEditorState}
          placeholder="write somthing...."
          ref={editorRef}
          spellCheck={true}
        />
      </div>
      {/* ********************************************* */}

      <button onClick={saveDraftAsHTML}>save</button>

      {/* ******************************* */}
    </RichEditorRoot>
  );
};



// // ********************************************************************
// const DraftEditorRaw = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   console.log("2222")
//   const onChange = (newEditorState) => {
//     console.log("111111")
//     // Convert to raw js object

//     const raw = convertToRaw(newEditorState.getCurrentContent());
//     console.log("rawwwwwwwwww")
//     // Save raw js object to local storage
//     saveEditorContent(raw);
//     console.log(raw)

//     setEditorState(newEditorState);
//   };

//   useEffect(() => {
//     // Load editor data (raw js object) from local storage
//     const rawEditorData = getSavedEditorData();
//     if (rawEditorData !== null) {
//       const contentState = convertFromRaw(rawEditorData);
//       setEditorState(EditorState.createWithContent(contentState));
//     }
//   }, []); // Empty dependency array to run this effect only once (on mount)

//   const saveEditorContent = (data) => {
//     console.log({ data })
//     localStorage.setItem('editorData', JSON.stringify(data));

//   };

//   const getSavedEditorData = () => {
//     const savedData = localStorage.getItem('editorData');
//     return savedData ? JSON.parse(savedData) : null;
//   };

//   const handleKeyCommand = (command) => {
//     const newState = RichUtils.handleKeyCommand(editorState, command);
//     if (newState) {
//       onChange(newState);
//       return true;
//     }
//     return false;
//   };

//   const renderContentAsRawJs = () => {
//     const contentState = editorState.getCurrentContent();
//     const raw = convertToRaw(contentState);
//     return JSON.stringify(raw, null, 2);
//   };

//   return (
//     <div>
//       <h4>Draft.js editor</h4>
//       <div className="editor-container">
//         {/* <Editor
//           handleKeyCommand={handleKeyCommand}
//           editorState={editorState}
//           onChange={onChange}
//         /> */}
//       </div>
//       <h4>Editor content as raw JS</h4>
//       <pre>{renderContentAsRawJs()}</pre>
//     </div>
//   );
// };



// ********************************************************************


const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: "16",
    padding: "20",
  },
};

const getBlockStyle = (block) => {
  switch (block.getType()) {
    // case 'blockquote': return style.RichEditor_blockquote;
    case 'blockquote': return <RichEditorEdit />;
    default: return null;
  }
};

const StyleButton = (props) => {
  const onToggle = (e) => {
    e.preventDefault();
    props.onToggle(props.style);
  };
  //****** */

  let className = style.RichEditor_styleButton;
  // let className = "RichEditor-styleButton";
  // let className = <RichEditorStyleButton/>;
  // let className = {RichEditorStyleButton};
  if (props.active) {
    className = style.RichEditor_activeButton;
    // className = <RichEditorActiveButton/>;
    // className = {RichEditorActiveButton};
  }

  return (
    <span style={className} onMouseDown={onToggle}>
      {props.label}
    </span>
  );
  // return (
  //       <CustomSpan  onMouseDown={onToggle}>
  //         {props.label}
  //       </CustomSpan>
  //     );
};

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
];

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    // <Box sx={style.RichEditor_controls}>
    <RichEditorControls>
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
      {/* </Box> */}
    </RichEditorControls>
  );
};

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    // <Box  sx={style.RichEditor_controls}>
    <RichEditorControls>
      {INLINE_STYLES.map((type) =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
      {/* </Box> */}
    </RichEditorControls>
  );
};

export default RichTextEditor;
