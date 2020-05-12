import { Paper } from '@material-ui/core';
import React from 'react';

import MessageForm from 'components/MessageForm';
import Messages from 'components/Messages';

function Chat() {
  return (
    <Paper elevation={3} style={{ padding: '10px', marginTop: '20px' }}>
      <Messages />
      <MessageForm />
    </Paper>
  );
}

export default Chat;
