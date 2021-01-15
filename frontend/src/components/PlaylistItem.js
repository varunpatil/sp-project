import React from "react";

import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Link,
  Typography,
  Box,
  Button,
} from "@material-ui/core";

import { PieChart } from "@material-ui/icons";

export default function PlaylistItem({ playlist }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={playlist.image_url}
        alt={playlist.name}
      />

      <CardContent className={classes.content}>
        <Typography gutterBottom noWrap align="center">
          <strong>{playlist.name}</strong>
        </Typography>
        <Box className={classes.tags}>
          {playlist.owner ? <Chip size="small" label="Owner" /> : null}
          <Chip size="small" label={playlist.public ? "Public" : "Private"} />
          <Chip size="small" label={playlist.total_tracks + " Tracks"} />
        </Box>
      </CardContent>

      <CardActions>
        <Grid container justify="center" alignItems="center" spacing={1}>
          <CustomButton name="analyze" icon={<PieChart />} />
          <CustomButton name="analyze" icon={<PieChart />} />
          <CustomButton name="analyze" icon={<PieChart />} />
          <CustomButton name="analyze" icon={<PieChart />} />
        </Grid>
      </CardActions>
    </Card>
  );
}

const CustomButton = ({ show = true, name, icon }) => {
  const classes = useStyles();
  let content = null;

  if (show) {
    content = (
      <Grid item>
        <Button
          size="small"
          variant="contained"
          className={classes.button}
          endIcon={icon}
        >
          {name}
        </Button>
      </Grid>
    );
  }

  return content;
};

const useStyles = makeStyles((theme) => ({
  button: {
    fontWeight: "bold",
    backgroundColor: "#818181",
  },
  content: {
    paddingBottom: theme.spacing(1),
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
  root: {
    maxWidth: 320,
    height: 540,
    margin: "auto",
    marginTop: 6,
    marginBottom: 6,
    padding: 16,
  },
  tags: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));
