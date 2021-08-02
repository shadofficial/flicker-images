import React from 'react';
import Grid from "@material-ui/core/Grid";
import ImageCard from './ui-elements/ImageCard';

function ResultList(props) {
    const { items = [] } = props;
    return (
        <div>
        {items.length > 0 ? <Grid container spacing={2}>
            {items.map((photo, index) => (
                
            <Grid item xs={4} key={index}>
                <ImageCard photo={photo}/>
            </Grid>
            ))}
        </Grid>:<>No Data try another string</>}
        </div>
    )
}

export default ResultList;
