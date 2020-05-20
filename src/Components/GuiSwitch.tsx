import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useUserData } from "Stores";

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: "flex",
    },
    switchBase: {
      padding: 2,
      color: theme.palette.common.white,
      "&$checked": {
        transform: "translateX(12px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: "none",
    },
    track: {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    checked: {},
  }),
)(Switch);

export const GuiSwitch = () => {
  const [state, setState] = React.useState({
    checkedC: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { isCarMode, toggleCarMode } = useUserData((store) => ({
    isCarMode: store.isCarMode,
    toggleCarMode: store.toggleCarMode,
  }));

  return (
    <FormGroup>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>User List</Grid>
          <Grid item>
            <AntSwitch checked={isCarMode} onChange={toggleCarMode} name="checkedC" />
          </Grid>
          <Grid item>Car List</Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
};
