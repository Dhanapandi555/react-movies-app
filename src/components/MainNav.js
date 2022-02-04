import React ,{useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { BrowserRouter, Route, Routes,useParams,useNavigate} from "react-router-dom";


const useStyles = makeStyles({
  root: {
    width: "100vw",
    position:"fixed",
    bottom:0,
    backgroundColor:"#2d313a",
    zIndex:100,
    
    
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  useEffect(()=>{
    if(value===0) navigate("/")
  },[value])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<WhatshotIcon />}
        onClick={()=>navigate("/trending")}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieIcon />}
        onClick={()=>navigate("/movies")}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        icon={<TvIcon />}
        onClick={()=>navigate("/series")}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
        onClick={()=>navigate("/search")}
      />
    </BottomNavigation>

  );
}
