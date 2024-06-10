import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {cardProps} from '../../interfaces/cards';
import { CardActionArea } from '@mui/material';

const TasckCards: React.FC<cardProps> = ({task, onClick}) => {
  const { title, priority, date } = task;
  return (
    <Box>
      <Card sx={{ maxWidth: 345, backgroundColor: '#f0f0f0', margin: 'auto' }}>
        <CardActionArea onClick={onClick}>
          <CardContent>
            <Typography variant='h5'>
              {title}
            </Typography>
            <Typography variant="body2" color="error">
              {priority}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
};


export default TasckCards;