import PropTypes from "prop-types";
import {
  List,
  Link,
  Avatar,
  Divider,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contributors = ({ users }) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 640,
        bgcolor: "background.paper",
      }}
    >
      {users.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user?.name}`;
        const username = user?.name;

        return (
          <>
            <ListItem
              alignItems="flex-start"
              key={user?._id}
              secondaryAction={
                <Link
                  href={
                    user?.socialHandles?.linkedinId
                      ? `https://www.linkedin.com/in/${user?.socialHandles?.linkedinId}`
                      : `https://www.linkedin.com/in/${username.replace(
                          /\s/g,
                          ""
                        )}`
                  }
                >
                  <LinkedInIcon
                    edge="end"
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </Link>
              }
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={user?.name}
                    src={
                      user?.profilePicture?.url ||
                      "https://source.unsplash.com/random"
                    }
                  />
                </ListItemAvatar>
                <ListItemText primary={user?.name} />
              </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
};

Contributors.propTypes = {
  users: PropTypes.array,
};

export default Contributors;
