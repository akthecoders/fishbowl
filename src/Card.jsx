import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const [cardOpen, setCardState] = useState(false);
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Task
        </Typography>
        {cardOpen ? (
          <Typography
            variant="h5"
            component="h5"
            style={{ color: "blueviolet", minHeight: "50px", fontSize: "1rem" }}
          >
            {cardOpen ? props.task.task : props.task.taskId}
          </Typography>
        ) : (
          <Typography variant="h5" component="h5">
            {cardOpen ? props.task.task : props.task.taskId}
          </Typography>
        )}

        {/* <Typography
          variant="h5"
          component="h5"
          style={{ color: "blueviolet", minHeight: "50px", fontSize: "1rem" }}
        >
          {cardOpen ? props.task.task : props.task.taskId}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setCardState(!cardOpen)}>
          {cardOpen ? "Close Task" : "Open Task"}
        </Button>
      </CardActions>
    </Card>
  );
}
