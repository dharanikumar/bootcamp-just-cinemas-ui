import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogContent from '@material-ui/core/DialogContent'

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function DropDownDialog(props) {
  let InputLabelRef;
  return (
    <Dialog open={props.open}>
      <DialogTitle id='form-dialog-title'>Select Location</DialogTitle>
      <DialogContent>
        <DialogContentText>
            Please choose location
        </DialogContentText>
        <FormControl variant='outlined' className={props.classes.formControl}>
          <InputLabel htmlFor='location-selector'>Select Location</InputLabel>
          <Select
            native
            value={props.id}
            onChange={props.handleChange}
            input={<OutlinedInput name='location' id='location-selector' />}
          >
            <option value='' />
            {props.options.map(option => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
    </Dialog>
  )
}
