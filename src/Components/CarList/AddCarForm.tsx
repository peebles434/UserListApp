import React, { useState, ChangeEvent } from "react";
import { useCarData } from "Stores";
import { random } from "faker";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }),
);

export const AddCarForm = () => {
  return <div></div>;
};
