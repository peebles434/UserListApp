import React from "react";
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearIcon from "@material-ui/icons/Clear";
import DoneIcon from "@material-ui/icons/Done";
import { observer } from "mobx-react";
import { IUserModelInstance, IUserModelSnapshotOrInstance } from "Models";
import { useUserData } from "Stores";

const EditListItem = observer(({ user }: { user: IUserModelInstance }) => {
  const { deleteUser, editUser } = useUserData((store) => ({
    deleteUser: store.deleteUser,
    editUser: store.editUser,
  }));

  const removeUser = (id: string) => () => {
    deleteUser(id);
  };

  //   snapshot = { id: 1, name: '', age 18 }

  //   instance = { id, name, age , setAge, setName, editToggle}

  const updateUser = (userDraft: IUserModelSnapshotOrInstance) => () => {
    editUser(userDraft);
    user.toggleEditMode();
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        value={user.userDraft.name}
        label="Name"
        onChange={user.setName}
      />
      <br />
      <TextField
        id="standard-basic"
        value={user.userDraft.age || ""}
        label="Age"
        onChange={user.setAge}
      />
      <br />
      <IconButton edge="end" aria-label="delete" onClick={updateUser(user.userDraft)}>
        <DoneIcon />
      </IconButton>
      <IconButton edge="end" aria-label="delete" onClick={user.toggleEditMode}>
        <ClearIcon />
      </IconButton>
      <IconButton edge="end" aria-label="delete" onClick={removeUser(user.id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
});

export { EditListItem as default };
