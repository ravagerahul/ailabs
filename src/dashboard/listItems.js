import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import Divider from "@mui/material/Divider";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import NotesIcon from "@mui/icons-material/Notes";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCardIcon from "@mui/icons-material/AddCard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const MainListItems = ({ handleClickDrawerOption }) => {
  const [expand, setExpand] = React.useState(false);
  return (
    <React.Fragment>
      <ListItemButton onClick={() => handleClickDrawerOption("Dashboard")}>
        <ListItemIcon>
          <DashboardIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton
        onClick={() => handleClickDrawerOption("AllStudentsData")}
      >
        <ListItemIcon>
          <LocalLibraryIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Students" />
      </ListItemButton>
      <ListItemButton
        onClick={() => handleClickDrawerOption("AiRecommendations")}
      >
        <ListItemIcon>
          <AutoAwesomeIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="AI Recommendations" />
      </ListItemButton>

      <ListItemButton onClick={() => handleClickDrawerOption("uploadTest")}>
        <ListItemIcon>
          <NotesIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Upload Test" />
      </ListItemButton>

      {/* <SimpleTreeView>
        <TreeItem itemId="grid" label="Configuration">
         
        </TreeItem>
      </SimpleTreeView> */}

      <ListSubheader
        component="div"
        inset
        onClick={() => setExpand(!expand)}
        style={{
          color: "black",
          paddingLeft: "16px",
          paddingRight: "16px",
          backgroundColor: "#172941",
          color: "white",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        <div style={{ minWidth: "56px", display: "inline-block" }}>
          {expand ? (
            <KeyboardArrowDownIcon
              style={{ verticalAlign: "middle", color: "white" }}
            />
          ) : (
            <KeyboardArrowRightIcon
              style={{ verticalAlign: "middle", color: "white" }}
            />
          )}
        </div>
        Configuration
      </ListSubheader>
      {expand && (
        <>
          {" "}
          <ListItemButton onClick={() => handleClickDrawerOption("batches")}>
            <ListItemIcon>
              <AddBoxIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Add Batches" />
          </ListItemButton>
          <ListItemButton onClick={() => handleClickDrawerOption("students")}>
            <ListItemIcon>
              <PersonAddIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Add Students" />
          </ListItemButton>
        </>
      )}
    </React.Fragment>
  );
};

export const secondaryListItems = <React.Fragment></React.Fragment>;
