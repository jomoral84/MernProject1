import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import useStyles from './form_style';
import { useDispatch, useSelector } from "react-redux"; 
import { createPost, updatePost} from "../../actions/posts";

const Form = ({ currentId, setCurrentId}) => {
  
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tag: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
  

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);


    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tag: '', selectedFile: '' });
      };
  

    const handleSubmit = async (e) => {
            e.preventDefault();

           if (currentId === 0) {
        
             dispatch(createPost(postData));
         } else {
            dispatch(updatePost(currentId, postData));
           }
           clear();
   };

    
    return (
        <Paper className={classes.paper}>
         <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? 'Editar' : 'Crear'} un Post</Typography>
            <TextField name="creator" variant="outlined" label="Creador" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})}/>
            <TextField name="title" variant="outlined" label="Titulo" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}/>
            <TextField name="message" variant="outlined" label="Mensaje" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}/>
            <TextField name="tag" variant="outlined" label="Tags" fullWidth value={postData.tag} onChange={(e) => setPostData({...postData, tag: e.target.value})}/>
             <div className={classes.fileInput}>
               <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})} ></FileBase>  

             </div>
             <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Crear</Button>
             <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
          
         </form>
        </Paper>
    );
}

export default Form;