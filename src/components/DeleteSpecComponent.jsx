import React from 'react';
import AlertDialog from './AlertDialog';

const DeleteSpecComponent = ({ teamSpecs, onDelete }) => {
  return (
    <div>
      <p>Deleting spec: {teamSpecs.name}</p>
      <AlertDialog />
    </div>
  );
};

export default DeleteSpecComponent;
