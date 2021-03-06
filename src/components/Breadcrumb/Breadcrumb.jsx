import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import ChatIcon from "@material-ui/icons/Chat";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PetsIcon from "@material-ui/icons/Pets";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routing/constants";
import { Signout } from "../../Containers/Signout";
import "./Breadcrumb.css";

export const Breadcrumb = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
        <Link to={ROUTES.MAIN} color="inherit" className="breadcrumbs-link">
          <HomeIcon className="breadcrumbs-icon" />
          Home
        </Link>
        <Link to={ROUTES.PROFILE} color="inherit" className="breadcrumbs-link">
          <AccountBoxIcon className="breadcrumbs-icon" />
          Profile
        </Link>
        <Link to={ROUTES.CHATS} color="inherit" className="breadcrumbs-link">
          <ChatIcon className="breadcrumbs-icon" />
          Chats
        </Link>
        <Link to={ROUTES.DOGS} color="inherit" className="breadcrumbs-link">
          <PetsIcon className="breadcrumbs-icon" />
          Dogs
        </Link>
      </Breadcrumbs>
      <Signout />
    </>
  );
};
