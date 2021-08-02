import React from 'react';
import Grid from "@material-ui/core/Grid";
import ImageCard from './ui-elements/ImageCard';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
function ResultList(props) {
    const { items = [] } = props;
    return (
        <div>
        {items.length > 0 ? <Grid container spacing={3}>
            {items.map((photo, index) => (
                
            <Grid item xs={12} sm={3}key={index}>
                <ImageCard photo={photo}/>
            </Grid>
            ))}
        </Grid>:<>No Data try another string</>}
        </div>
    )
}

export default ResultList;
