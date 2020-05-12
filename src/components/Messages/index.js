import { List } from '@material-ui/core';
import React from 'react';

import MessageItem from 'components/MessageItem';

const Messages = () => {
  const list = new Array(5).fill();
  return (
    <List>
      {list.map((item) => (
        <MessageItem />
      ))}
    </List>
  );
};

export default Messages;
