import {FC} from 'react';
import TasckCards from '../card/TaskCard';
import dataMocked from '../../constants/mocado';
import listProps from '../../interfaces/list';


const TaskList: FC<listProps> = ({status, onTaskClick}) => {
  return(
    <div>
      {dataMocked.filter(task => task.status === status).map(task =>(
        <TasckCards key={task.title}  task={task} onClick={() => onTaskClick(task)} />
      ))};
    </div>
  )
}

export default TaskList;