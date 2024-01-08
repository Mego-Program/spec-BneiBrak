import styled from '@emotion/styled'
import { Box,TextField } from "@mui/material";

// import { CustomSpan } from "./RichTextEditor.style"; //אמור להיות בריצטקסט אדיטור 

// export const CustomSpan = styled('span')({
//     color: "#999",
//     cursor: "pointer",
//     marginRight: "16px",
//     padding: "2px 0",
//     display: "inline-block",
//   })

export const RichEditorRoot = styled(Box)({
    background:"white",
    border: "2px solid #ddd",
    fontFamily: "Georgia, serif",
    fontSize: "14px",
    padding: "15px",
    minHeight: "300px",
    

    "& .public-DraftStyleDefault-pre": {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        fontFamily: "Inconsolata, Menlo, Consolas, monospace",
        fontSize:"16px",
        padding: "20px",
      }
})
//  export const RichEditorEdit =styled(Box)({
//     borderTop	: "1px solid #ddd",
//     cursor: "text",
//     fontSize: "16px",
//     marginTop: "10px",
//  })
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

    // '& .public-Draftstyledefault-pre': {
    //   backgroundColor: 'rgba(0, 0, 0, 0.05)',
    //   fontFamily: 'Inconsolata, Menlo, Consolas, monospace',
    //   fontSize: '16px',
    //   padding: '20px',
    // },
    // '& .RichEditor-styleButton' :{
    //     color: "#999",
    //     cursor: "pointer",
    //     marginRight: "16px",
    //     padding: "2px 0",
    //     display: "inline-block",
    //   },
      
    //   '& .RichEditor-activeButton': {
    //     color: "#5890ff",
    //     cursor: "pointer",
    //     marginRight: "16px",
    //     padding: "2px 0",
    //     display: "inline-block",
    //   },
  });
  export  const RichEditorControls = styled('div')({
    fontFamily: 'Helvetica, sans-serif',
    fontSize: '14px',
    marginBottom: '5px',
    userSelect: 'none',
  });
//   export const RichEditorStyleButton = styled('span')({
//     color: '#999',
//     background:"red",
//     cursor: 'pointer',
//     marginRight: '16px',
//     padding: '2px 0',
//     display: 'inline-block',
//   });
  
//   export const RichEditorActiveButton = styled('span')({
//     color: '#5890ff',
//     background:"blue",
//     cursor: 'pointer',
//     marginRight: '16px',
//     padding: '2px 0',
//     display: 'inline-block',
//   });
  





//   return (
//     <CustomSpan  onMouseDown={onToggle}>
//       {props.label}
//     </CustomSpan>
//   );