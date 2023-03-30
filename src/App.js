import React from "react";
import "./styles.css";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

const tasksData = [
  {
    taskId: 1,
    task: "Wear a Bowl on head throughout game"
  },
  {
    taskId: 2,
    task: "Sing a song"
  },
  {
    taskId: 3,
    task: " Dress-up like superman with bedsheet"
  },
  {
    taskId: 4,
    task: " Mimic someone in the office"
  },
  {
    taskId: 5,
    task: "Share your best childhood memory"
  },
  {
    taskId: 6,
    task: "Dance in veil(Ghungat) for 30 sec with song"
  },
  {
    taskId: 7,
    task: "Share any real horror experience"
  },
  {
    taskId: 8,
    task: "Propose a water bottle"
  },
  {
    taskId: 9,
    task: "Perform 5 pushups"
  },
  {
    taskId: 10,
    task: "Act like spiderman for 20 sec"
  },
  {
    taskId: 11,
    task: "Dance on kala chasma song with chasma"
  },
  {
    taskId: 12,
    task: "Make a drawing of anyone in the call"
  },
  {
    taskId: 13,
    task: "Good and bad thing about yourself"
  },
  {
    taskId: 14,
    task: "Make a pony"
  },
  {
    taskId: 15,
    task: "Biggest Fear"
  },
  {
    taskId: 16,
    task: "Make me Laugh"
  },
  {
    taskId: 17,
    task: "Act like your opposite Gender for 30 sec"
  },
  {
    taskId: 18,
    task: "Find-out 3 common things within your team in 1 min"
  },
  {
    taskId: 19,
    task: "Tie a turban on head"
  },
  {
    taskId: 20,
    task: "Name 10 cartoon Character"
  },
  {
    taskId: 21,
    task: "Touch your elbow with your tounge"
  },
  {
    taskId: 22,
    task: "Act like vegetable seller for 30 sec"
  }
];

export default function App() {
  const classes = useStyles();
  var rows = [],
    i = 0,
    len = 22;
  while (++i <= len) rows.push(i);

  const cards = tasksData.map((task) => (
    <Grid key={i} item xs={12} sm={6} md={2}>
      <Card task={task} />
    </Grid>
  ));

  return (
    <React.Fragment>
      <Typography
        variant="h2"
        component="h2"
        style={{ textAlign: "center", paddingBottom: "1%" }}
      >
        Fish Bowl
      </Typography>
      <Grid
        container
        spacing={2}
        className={classes.gridContainer}
        justify="center"
      >
        {cards}
      </Grid>
    </React.Fragment>
  );
}
