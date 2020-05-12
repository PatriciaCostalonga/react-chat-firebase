import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import React from 'react';

const MessageForm = () => {
  return (
    <form>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={10}>
          <TextField id="standard-basic" label="Message" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" fullWidth>
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MessageForm;
