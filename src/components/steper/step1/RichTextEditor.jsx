import React, {useState, useRef, useEffect} from "react";
import { Editor, EditorState, getDefaultKeyBinding, RichUtils, convertToRaw, convertFromRaw, } from 'draft-js';
import { RichEditorRoot, RichEditorEdit, RichEditorControls, } from "./RichTextEditor.style.jsx";
import 'setimmediate';

const style = {
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
}

const RichTextEditor = ({stepperData, setStepperData}) => {
  const contInit = '{"blocks":[{"key":"6kdab",' +
                                      '"text":"",' +
                                      '"type":"unstyled",' +
                                      '"depth":0,' +
                                      '"inlineStyleRanges":[],' +
                                      '"entityRanges":[],' +
                                      '"data":{}}],' +
                            '"entityMap":{}}';

  function convertToEditorState(content) {
    const editorContent = convertFromRaw(JSON.parse(content));
    return EditorState.createWithContent(editorContent);
  }

  const [editorState, setEditorState] = useState(convertToEditorState(contInit));
  const [initFlag, setInitFlag] = useState(true);
  if (initFlag && stepperData.content) {
    setEditorState(convertToEditorState(stepperData.content))
    setInitFlag(false)
  }

  const editorRef = useRef(null);
  const focusEditor = () => {
    if (editorRef.current) editorRef.current.focus();
  };

  const saveDraftAsHTML = () => {
    const raw = convertToRaw(editorState.getCurrentContent())
    const contentString = JSON.stringify(raw)
    setStepperData({ ...stepperData, content: contentString })
    if (initFlag) setInitFlag(false)
  };

  useEffect(() => {
    saveDraftAsHTML()},[editorState]);

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
      const newEditorState = RichUtils.onTab(e, editorState, 4,);
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

  let className = <RichEditorEdit />;

  const contentState = editorState?.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== 'unstyled') {
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
    </RichEditorRoot>
  );
};


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
    case 'blockquote': return <RichEditorEdit />;
    default: return null;
  }
};

const StyleButton = (props) => {
  const onToggle = (e) => {
    e.preventDefault();
    props.onToggle(props.style);
  };

  let className = style.RichEditor_styleButton;
  if (props.active) {
    className = style.RichEditor_activeButton;
  }

  return (
    <span style={className} onMouseDown={onToggle}>
      {props.label}
    </span>
  );
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
    </RichEditorControls>
  );
};

export default RichTextEditor;
