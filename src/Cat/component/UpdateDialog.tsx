// UpdateDialog.tsx

import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import {  UpdateDialogProps } from '../interface/Cat.interface';


const UpdateDialog: React.FC<UpdateDialogProps> = ({ open, handleClose,  initialValue, handleSubmit }) => {
  const [value, setValue] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const handleFormSubmit = () => {
    let data = { ...initialValue };
  if (initialValue.field === 'height') {
    data.height = value;
  } else {
    data.width = value;
  }
    handleSubmit(data);
  };

  useEffect(() => {
    setValue((initialValue.field === 'height') ? initialValue.height: initialValue.width)
  
    return () => {
        setValue(0)
    }
  }, [initialValue])
  
  return (
    <Dialog open={open} onClose={()=>handleClose()}>
      <DialogTitle>{`Update ${initialValue.field}`}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="heightWidth"
          label={initialValue.field === 'height' ? 'New Height' : 'New Width'}
          type="number"
          fullWidth
          value={value}
          onChange={handleInputChange}
        />
        <Button onClick={handleFormSubmit} color="primary">
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateDialog;
