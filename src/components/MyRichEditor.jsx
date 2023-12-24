import React from 'react';
import { styled } from '@mui/material/styles';
// import { createTheme } from '@mui/material/styles';





const RichEditorRoot = styled('div')({
  background: '#fff',
  border: '1px solid #ddd',
  fontFamily: 'Georgia, serif',
  fontSize: '14px',
  padding: '15px',
  
});

const RichEditorEditor = styled('div')({
  borderTop: '1px solid #ddd',
  cursor: 'text',
  fontSize: '16px',
  marginTop: '10px',
  '& .public-DraftEditorPlaceholder-root, & .public-DraftEditor-content': {
    margin: '0 -15px -15px',
    padding: '15px',
  },
  '& .public-DraftEditor-content': {
    minheight: '100px',
  },
  '& .RichEditor-blockquote': {
    borderLeft: '5px solid #eee',
    color: '#666',
    fontFamily: 'Hoefler Text, Georgia, serif',
    fontStyle: 'italic',
    margin: '16px 0',
    padding: '10px 20px',
  },
  '& .public-Draftstyledefault-pre': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: 'Inconsolata, Menlo, Consolas, monospace',
    fontSize: '16px',
    padding: '20px',
  },
});

const RichEditorControls = styled('div')({
  fontFamily: 'Helvetica, sans-serif',
  fontSize: '14px',
  marginBottom: '5px',
  userSelect: 'none',
});

// const RichEditorStyleButton = styled('span')({
//   color: '#999',
//   cursor: 'pointer',
//   marginRight: '16px',
//   padding: '2px 0',
//   display: 'inline-block',
// });

// const RichEditorActiveButton = styled('span')({
//   color: '#5890ff',
// });

const MyRichEditor = () => {
  return (
    <RichEditorRoot>
      <RichEditorControls>
        {/* Your editor controls go here */}
        <RichEditorStyleButton>
          Style Button
        </RichEditorStyleButton>
        <RichEditorActiveButton>
          Active Button
        </RichEditorActiveButton>
      </RichEditorControls>
      <RichEditorEditor>
        {/* Your editor content goes here */}
      </RichEditorEditor>
    </RichEditorRoot>
  );
};

export default MyRichEditor;
