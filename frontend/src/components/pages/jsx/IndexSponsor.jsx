import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

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
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Logo</TableCell>
                        <TableCell align="center">Opções</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sponsors.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell component="th" scope="row">{row.name_sponsor}</TableCell>                            
                            <TableCell>Botão img</TableCell>
                            <TableCell align="center">
                                <IconButton variant="contained" color="primary" >
                                    <EditIcon />
                                </IconButton>
                                <IconButton variant="contained" color="secondary" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>                                
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default IndexSponsor