import React from 'react';
import {useNavigate} from "react-router-dom";
import draftToHtml from "draftjs-to-html";
import axios from 'axios';

import {
    Card,
    CardContent,
    Typography,
    Grid,
    Button,
    Avatar,
    AvatarGroup,
    Select,
    MenuItem,
    Collapse
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AlertDialog from '../steper/step3/AlertDialog';


/**
 * Component to display a single spec item.
 * @component
 * @param {Object} props - The properties passed from specList to the component.
 * @param {Object} props.spec - The specification object to be displayed.
 * @param {Function} props.renderList - Callback function to update the list of spec.
 * @returns {JSX.Element} - The rendered component.
 */
export default function SpecItem({ spec, renderList }) {
  const isInProcess = spec.status === 'In process';
  const cardBorderColor = isInProcess ? 'primary.main' : 'transparent';
  const statusColor = isInProcess ? '#ffffff' : 'primary.main';
  const cardOpacity = spec.status === 'Done' ? 0.5 : 1;
  const navigate = useNavigate();

  // const [expanded, setExpanded] = React.useState(false);
  // const handleExpandClick = () => {setExpanded(!expanded)}


  /**
   *  Delete a spec from the Database.
   * @async
   * @param {string} idToDelete - The ID of the spec that needs to be deleted.
   */
  const handleDelete = async (idToDelete) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/delete/${idToDelete}`);
      renderList()
      console.log('Spec deleted successfully');
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  /**
   * The functionality of the delete button
   * */
  const onClickDelete = () => {
    let check = prompt('Are you sure you want to delete this spec? yes or no', 'yes')
    if (check === 'yes') {
      handleDelete(spec._id)
    }
  };

  /**
   * Navigates to the stepper page for editing a spec.
   * Transferring the information of the spec to the stepper along with going to the stepper's page
   */
  const handleEdit = () => {
    navigate('/spec/stepper', {state: {spec}})
  }

  /**
   *  Edit the status of a spec in the Database and active the edit in the page.
   * @body status - The new status of the spec
   */
  const handleEditStatus = async (event) => {
    try {
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/status/${spec._id}`, {status: event.target.value});
      renderList();
    } catch (error) {
      console.error('Error updating:', error);
    }
  }

  return (
      <Card
          sx={{
            borderColor: cardBorderColor,
            borderWidth: '1px',
            borderStyle: 'solid',
            opacity: cardOpacity,
            width: '1168px',
            height: '143px',
            bgcolor: "secondary.main",
            color: "white",
          }}

      >
        <CardContent
            onClick={() => {
              console.log(spec)
            }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Typography sx={{fontSize: '25px',}}>{spec.title}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{marginBottom: '60px', fontSize: '12px'}}>
                <div dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(spec.content)) }} />
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Select
                  value={spec.status}
                  onChange={handleEditStatus}
                  sx={{
                    marginLeft: '120px',
                    marginTop: '0px',
                    color: statusColor,
                    '& .MuiSelect-icon': {
                      color: statusColor,
                    },
                  }}
              >
                <MenuItem value="In process">In process</MenuItem>
                <MenuItem value="active">active</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={3}>

              {/*<Button*/}
              {/*    onClick={handleExpandClick}*/}
              {/*    sx={{*/}
              {/*      color: 'white',*/}
              {/*      height: '53',*/}
              {/*      width: '53',*/}
              {/*      minWidth: '0px',*/}
              {/*      borderRadius: '50%',*/}
              {/*      borderWidth: '1px',*/}
              {/*      borderStyle: 'solid',*/}
              {/*      borderColor: '#F6C927',*/}
              {/*      margin: '0 10px', '&:hover': {bgcolor: '#F6C927',},*/}
              {/*    }}*/}
              {/*>*/}
              {/*  {expanded ? '-' : '+'}*/}
              {/*</Button>*/}

              <Button variant='text' size='small' sx={{
                color: 'white',
                height: '53',
                width: '53',
                minWidth: '0px',
                borderRadius: '50%',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#F6C927',
                margin: '0 10px',
                '&:hover': {
                  bgcolor: '#F6C927',
                },
              }} onClick={handleEdit}>
                <EditIcon />
              </Button>
              <Button onClick={onClickDelete} variant='text' size='small' sx={{
              color: 'white',
              height: '53',
              width: '53',
              minWidth: '0px',
              borderRadius: '50%',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: '#F6C927',
              margin: '0 10px',

              '&:hover': {
                bgcolor: '#F6C927',
              },
            }}>
              <DeleteIcon/>
              </Button>

              {/*<AlertDialog onDelete={handleDelete} id={spec._id}/>*/}
            </Grid>
            <AvatarGroup>
              {spec.participants.map((person, index) => (
                  <Avatar key={index} alt="User 1" sx={{ bgcolor: "#121231", color: '#F6C927', }}>{person[0]}</Avatar>
              ))}
            </AvatarGroup>
          </Grid>
        </CardContent>
          {/*<Collapse in={expanded} timeout="auto" unmountOnExit>*/}
          {/*    <CardContent>*/}
          {/*        /!* Additional content goes here *!/*/}
          {/*        <Typography variant="body2" color="text.secondary">*/}
          {/*            Additional content goes here.*/}
          {/*        </Typography>*/}
          {/*    </CardContent>*/}
          {/*</Collapse>*/}
      </Card>
  );
}
