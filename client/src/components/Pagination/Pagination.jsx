import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./pagination_style";
import { getPosts } from "../../actions/posts";

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.posts);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
       if (page) {
        dispatch(getPosts(page));
       }
  }, [dispatch, page]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};


// const Paginate = () => {
 
//   const classes = useStyles();
 
//    return (
//      <Pagination classes={classes.ul} count={5} page={1} variant="outlined" color="primary" renderItem={(item) => (<PaginationItem {...item} component={Link} to={`/posts?page=${1}`}/>)} ></Pagination>
//    )
//  }

export default Paginate;
