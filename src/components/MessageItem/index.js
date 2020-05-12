import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from '@material-ui/core';
import React from 'react';

const MessageItem = () => {
  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Charlize Theron"
            src="https://abrilclaudia.files.wordpress.com/2019/06/charlize.jpg?quality=85&strip=info&resize=680,453"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Charlize Theron"
          secondary="Brunch this weekend?"
        />
      </ListItem>
      <Divider variant="inset" style={{ marginLeft: '0' }} />
    </div>
  );
};

export default MessageItem;
