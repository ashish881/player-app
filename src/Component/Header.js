import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';


const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    movielogo: {
        fontSize: '20px',
        margin: '15px',
        display: 'flex',
        alignItems: 'center'
    }
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.header}>
                        <div className={classes.movielogo}>
                            <MovieFilterIcon
                                fontSize="large" />
                        </div>
                        <Typography variant="h6" className={classes.title}>
                            Welcome to Reno Telugu Association - Ugadi Fest
                    </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div >
    );
}
