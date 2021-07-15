import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';
import { green, red } from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    table: {
        minWidth: 0,
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.white,
        },
    },
}))(TableRow);

const theme = createTheme({
    palette: {
        primary: {
            // Yellow play nicely together.
            main: green[400]
        },
        secondary: {
            // This is green.A700 as hex.
            main: red[700]
        }
    }
})


export function IndexSponsor() {
    const classes = useStyles();
    const [sponsors, setSponsors] = useState([])

    useEffect(() => {
        async function loadSponsors() {
            const response = await axios.get('http://localhost:3000/api/sponsor')
            setSponsors(response.data)
        }
        loadSponsors()
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Paper elevation={3}>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Nome</StyledTableCell>
                                <StyledTableCell align="center">Logo</StyledTableCell>
                                <StyledTableCell align="center">Opções</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sponsors.map((row) => (
                                <StyledTableRow hover key={row._id}>
                                    <TableCell align="center" component="th" scope="row">{row.name_sponsor}</TableCell>
                                    <TableCell align="center">
                                        <img src={process.env.PUBLIC_URL + `/images/sponsors/${row.image_sponsor.filename}`} alt="Logo" height="40px" />
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton variant="contained" color="inherit" >
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton variant="contained" color="secondary" aria-label="delete">
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </TableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </ThemeProvider>
    )
}

export default IndexSponsor