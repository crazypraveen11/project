import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,styled } from "@mui/material";
import { tableCellClasses } from "@mui/material";


export let Createtable = () =>{

    const Stylecell = styled(TableCell)( (get) =>(
    {
        [`&.${tableCellClasses.head}`]: {
            backgroundcolor: 'get.palette.primary.main',
            color:'red',
        },
    }))

    function Viewdata(snumber,eventname) {
        return{snumber,eventname};
    }

    const Values = [
        Viewdata(1,'Marriage'),
        Viewdata(2,'Party'),
        Viewdata(3,'Business Party'),
    ];
    

    return(
        <>
        <TableContainer>
        <Table>
            <TableHead>
              <TableRow>
                <Stylecell>S.No</Stylecell>
                <Stylecell>EventName</Stylecell>
              </TableRow>
            </TableHead>
            <TableBody>
                {
                    Values.map(
                        (data, index) =>(
                            <TableRow>
                                <TableCell>{data.snumber}</TableCell>
                                <TableCell>{data.eventname}</TableCell>
                            </TableRow>
                        )
                    )
                }
            </TableBody>
        </Table>
        </TableContainer>
        </>
    )
}