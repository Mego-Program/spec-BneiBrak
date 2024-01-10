import styled from '@emotion/styled'
import { Box } from "@mui/material";


export const RichEditorRoot = styled(Box)({
    background:"#21213E",
    fontFamily: "Georgia, serif",
    fontSize: "14px",
    padding: "15px",
    minHeight: "300px",
    color: '#fff',
    marginTop: '10px',

    "& .public-DraftStyleDefault-pre": {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        fontFamily: "Inconsolata, Menlo, Consolas, monospace",
        fontSize:"16px",
        padding: "20px",
      }
})

export const RichEditorEdit = styled('div')({
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
  });

  export  const RichEditorControls = styled('div')({
    fontFamily: 'Helvetica, sans-serif',
    fontSize: '14px',
    marginBottom: '5px',
    userSelect: 'none',
  });
