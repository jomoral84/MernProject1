import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "linear-gradient(to right, #ADA996, #F2F2F2, #DBDBDB, #EAEAEA)",
  },
  heading: {
    color: "black",
    fontFamily: "inherit",
  },
  image: {
    marginLeft: "15px",
  },

   [ theme.breakpoints.down('sm')]: {
    mainContainer: {
                 flexDirection: "column-reverse"
   }
 }}
 ));