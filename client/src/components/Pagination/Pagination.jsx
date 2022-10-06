import React from 'react'
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from "./pagination_style";

const Paginate = () => {
 
 const classes = useStyles();

  return (
    <Pagination classes={classes.ul} count={5} page={1} variant="outlined" color="primary" renderItem={(item) => (<PaginationItem {...item} component={Link} to={`/posts?page=${1}`}/>)} ></Pagination>
  )
}

export default Paginate;