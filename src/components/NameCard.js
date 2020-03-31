import React from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        large: {
            width: theme.spacing(10),
            height: theme.spacing(10)
        }
    })
);

function NameCard() {
    const classes = useStyles();
    return(
        <Card>
            <CardHeader
                avatar={
                    <Avatar 
                        aria-label="recipe"
                        src={`${process.env.PUBLIC_URL}/hirony-girl-icon-0000.png`}
                        className={classes.large}
                    />
                }
                title="Miharu Kageyama"
            />
            <CardContent>
                
                <Typography>
                    Name
                </Typography>
                <Typography>
                    contents
                </Typography>
            </CardContent>
        </Card>
    );
}

export default NameCard;