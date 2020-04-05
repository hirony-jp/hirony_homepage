import React from 'react';
import { Card, CardHeader, Avatar } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme) =>
    createStyles({
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7)
        },
        cardStyle: {
            margin: 'auto',
            marginTop: 30,
            marginBottom: 30,
            maxWidth: 300
        },
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
    })
);

function NameCard() {
    const classes = useStyles();
    return(
        <div className={classes.root} >
            <Card className={classes.cardStyle}>
                <CardHeader
                    titleTypographyProps={{variant: 'h5'}}
                    title="Miharu Kageyama"
                    avatar={
                        <Avatar 
                            aria-label="recipe"
                            src={`${process.env.PUBLIC_URL}/hirony-girl-icon-0000.png`}
                            className={classes.large}
                        />
                    }
                />
            </Card>

            <Card className={classes.cardStyle}>
                <CardHeader
                    titleTypographyProps={{variant: 'h5'}}
                    title="Hiroki Matsumoto"
                    avatar={
                        <Avatar
                            aria-label="recipe"
                            src={`${process.env.PUBLIC_URL}/icon-twitter-maru-maru.png`}
                            className={classes.large}
                        />
                    }
                />
            </Card>
        </div>
    );
}

export default NameCard;