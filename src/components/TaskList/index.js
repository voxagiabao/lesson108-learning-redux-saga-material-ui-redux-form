import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskItem from './../TaskItem';
import styles from './styles';

class TaskList extends Component {
  render() {
    const { classes, tasks, status } = this.props;

    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={1} mb={1}>
          <div className={classes.status}>{status.label}</div>
        </Box>

        <div className={classes.wrapperListTask}>
          {tasks.map((task, index) => {
            return <TaskItem key={index} task={task} status={status} />;
          })}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object,
  tasks: PropTypes.array,
  status: PropTypes.object,
};

export default withStyles(styles)(TaskList);
