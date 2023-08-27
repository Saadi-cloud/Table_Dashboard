
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import Typography from '@mui/material/Typography';
import './App.css'; // Import your CSS file

function createData(
  Date: string,
  Text_Field: string,
  field: string,
  GBP: string,
  Funding_amount: string,
  Currency: string,
  Number2: string,
  Recipient: string,
  Method: string,
) {
  return { Date, Text_Field, field, GBP, Funding_amount, Currency, Number2, Recipient, Method };
}

const rows = [
  createData('01 Jan 2023', "Text Field", "Text Field", "GBP", "Number Field", "EUR", "Number Field", "Text Field", 'Auto'),
  createData('01 Jan 2023', "Text Field", "Text Field", "GBP", "Number Field", "EUR", "Number Field", "Text Field", 'Auto'),
  createData('01 Jan 2023', "Text Field", "Text Field", "GBP", "Number Field", "EUR", "Number Field", "Text Field", 'Auto'),
  createData('01 Jan 2023', "Text Field", "Text Field", "GBP", "Number Field", "EUR", "Number Field", "Text Field", 'Auto'),
  createData('01 Jan 2023', "Text Field", "Text Field", "GBP", "Number Field", "EUR", "Number Field", "Text Field", 'Auto'),
  createData('01 Jan 2023', "Text Field", "Text Field", "GBP", "Number Field", "EUR", "Number Field", "Text Field", 'Auto'),
  createData('01 Jan 2023', "Text Field", "Text Field", "GBP", "Number Field", "EUR", "Number Field", "Text Field", 'Auto'),

  // Add more rows as needed...
];

export default function BasicTable() {
  return (
    <>
    {/* <Typography>Matched Deposits</Typography> */}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            
          <TableRow>
            <TableCell align='center'><b>Date</b></TableCell>
            <TableCell align="center"><b>Source</b></TableCell>
            <TableCell align="center"><b>Reference</b></TableCell>
            <TableCell align="center"><b>GBP</b></TableCell>
            <TableCell align="center"><b>Funding Amount</b></TableCell>
            <TableCell align="center"><b>Currency</b></TableCell>
            <TableCell align="center"><b>Number2</b></TableCell>
            <TableCell align="center"><b>Recipient</b></TableCell>
            <TableCell align="center"><b>Method</b></TableCell>
            <TableCell align="center" style={{paddingRight: "50px"}}>
              <IconButton>
                <img src="Component 14.svg" alt="" />
              </IconButton>
              <Button color="success" variant="contained">
                RESET ALL
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Date}>
              <TableCell align="center" className="bordered-cell" style={{ padding: '4px' }} component="th" scope="row">
                {row.Date}
              </TableCell>
              <TableCell className="bordered-cell" style={{ padding: '4px' }} align="center">{row.Text_Field}</TableCell>
              <TableCell className="bordered-cell" style={{ padding: '4px' }} align="center">{row.field}</TableCell>
              <TableCell className="bordered-cell" style={{ padding: '4px' }} align="center">{row.GBP}</TableCell>
              <TableCell className="bordered-cell" style={{ padding: '4px' }} align="center">{row.Funding_amount}</TableCell>
              <TableCell className="bordered-cell" style={{ padding: '4px' }} align="center">{row.Currency}</TableCell>
              <TableCell className="bordered-cell" style={{ padding: '4px' }} align="center">{row.Number2}</TableCell>
              <TableCell className="bordered-cell" style={{ padding: '4px' }} align="center">{row.Recipient}</TableCell>
              <TableCell className="bordered-cell" style={{ padding: '4px' }} align="center">{row.Method}</TableCell>
              <TableCell className="bordered-cell" style={{ padding: '4px' }} align="center">
                <IconButton>
                  <img src="Component 14.svg" alt="" />
                </IconButton>
                <Button color="success" variant="contained">
                  RELEASE
                </Button>
                <IconButton color="error" aria-label="Cross Button">
                  <CancelIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
