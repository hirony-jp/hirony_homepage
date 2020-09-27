import React from 'react';
import { Card, CardHeader, CardContent, Avatar } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme) =>
    createStyles({
        avatarStyle: {
            width: theme.spacing(7),
            height: theme.spacing(7)
        },
        cardStyle: {
            margin: 'auto',
            marginTop: 30,
            marginBottom: 30
        },
        cardContentStyle: {
            textAlign: 'right'
        },
        iconStyle: {
            marginLeft: 7,
            marginRight: 7,
            color: 'gray'
        },
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: 500
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
                    title={"Hirony / Miharu"}
                    avatar={
                        <Avatar 
                            aria-label="recipe"
                            src={`${process.env.PUBLIC_URL}/hirony-miharu-icon.png`}
                            className={classes.avatarStyle}
                        />
                    }
                />

                <CardContent className={classes.cardContentStyle}>
                    <a href="https://twitter.com/_hirony"><FontAwesomeIcon className={classes.iconStyle} icon={['fab', 'twitter']} size="3x" /></a>
                    <a href="https://www.instagram.com/hirony_jp/"><FontAwesomeIcon className={classes.iconStyle} icon={['fab', 'instagram']} size="3x" /></a>
                    <a href="https://github.com/hirony-jp"><FontAwesomeIcon className={classes.iconStyle} icon={['fab', 'github']} size="3x" /></a>
                    {/* <a href=""><FontAwesomeIcon className={classes.iconStyle} icon={['fab', 'youtube']} size="3x" /></a> */}
                </CardContent>
            </Card>
        </div>
    );
}

export default NameCard;