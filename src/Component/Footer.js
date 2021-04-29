import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    title2: {
        display: 'flex',
        textAlign: 'start'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.header}>
                        <div>
                            <Typography variant="h4" className={classes.title1}>Credits:</Typography>
                            <Typography variant="h6" className={classes.title2}>
                                All participants/ Non Participants :) Every gesture Matters
                  </Typography>
                        </div>

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
