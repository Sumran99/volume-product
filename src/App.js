import React from "react";
import dayjs from 'dayjs';
import { TextField, Button, Grid, Box } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DataGrid } from '@mui/x-data-grid';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = { 
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Red", "Green", "Blue", "Orange", "Black", "White"];

const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  {
    field: 'volName',
    headerName: 'Volume Name',
    width: 120,
  },
  {
    field: 'volNo',
    headerName: 'Volume No',
    width: 90,
  },
  {
    field: 'vouchNo',
    headerName: 'Voucher No',
    width: 90,
  },
  {
    field: 'date',
    headerName: 'date',
    width: 210,
  },
  {
    field: 'details',
    headerName: 'Details',
    type: 'number',
    width: 150,
  },
  {
    field: 'suits',
    headerName: 'Suits',
    width: 50,
  },
  {
    field: 'comments',
    headerName: 'Comments',
    width: 110,
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    width: 90,
  },
  {
    field: 'notes',
    headerName: 'Notes',
    width: 110,
  },
  {
    field: 'rate',
    headerName: 'Rate',
    width: 50,
  },
  {
    field: 'productName',
    headerName: 'Products',
    width: 210,
  },

];

function App() {
  const [volName, setVolName] = React.useState("");
  const [volNo, setVolNo] = React.useState(0);
  const [id, setId] = React.useState(0);
  const [vouchNo, setVouchNo] = React.useState(0);
  const [date, setDate] = React.useState(dayjs('2018-01-01T00:00:00.000Z'));
  const [details, setDetails] = React.useState("");
  const [suits, setSuits] = React.useState("");
  const [comments, setComments] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const [notes, setNotes] = React.useState("");
  const [rate, setRates] = React.useState("");
  const [productName, setProductName] = React.useState([]);
  const [volumes, setVolumes] = React.useState([]);
  const [rows, setRows] = React.useState([]);

  /********************************************************************/
  //                            adding products
  /********************************************************************/
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setProductName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  /********************************************************************/

  /*******************************************************************/
  //                Adding new volume with products
  /*******************************************************************/
  const addVolume = () => {
    let volume = {
      id,
      volName,
      volNo,
      vouchNo,
      date,
      details,
      suits,
      comments,
      quantity,
      notes,
      rate,
      productName,
    };
    setId(0);
    setVolumes([...volumes, volume]);
    setVolName("");
    setVolNo(0);
    setVouchNo(0);
    setDate("");
    setDetails("");
    setSuits("");
    setComments("");
    setQuantity("");
    setNotes("");
    setRates(0);
    setProductName([]);
  };
  /*******************************************************************/

  React.useEffect(() => {
    setRows(volumes);
  }, [volumes]);
  return (
    <>
    
    <Box sx={{pl:4, pt: 5}}>
      <TextField
        label="Volume Name"
        variant="outlined"
        value={volName}
        onChange={(e) => setVolName(e.target.value)}
      />         
      <TextField
        label="Volume No."
        variant="outlined"
        value={volNo}
        onChange={(e) => setVolNo(e.target.value)}
        sx = {{ml:100}}
      />
    </Box>
    
      <Grid item sx={{mt: 3, pl: 4}}>
      <TextField
        label="Id"
        variant="outlined"
        value={id}
        onChange={(e) => setId(e.target.value)}
        sx={{mr: 100 }}
      />
     
      <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DateTimePicker
        label="Date"
        renderInput={(params) => <TextField {...params} />}
        value={date}
        
        onChange={(newValue) => {
          setDate(newValue);
        }}
      />
      </LocalizationProvider>
      </Grid>
      <Grid item sx={{mt: 3, pl: 4}}>
         
      <TextField
        label="Voucher No"
        variant="outlined"
        value={vouchNo}
        onChange={(e) => setVouchNo(e.target.value)}
      />
      <TextField
        label="Suits"
        variant="outlined"
        value={suits}
        onChange={(e) => setSuits(e.target.value)}
        sx={{ml:100}}
      />
      </Grid>
      <Grid item sx={{mt:3, pl:4}}>
      <TextField
        label="Details"
        variant="outlined"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
    
      />
      </Grid>
      <Grid item sx={{mt:3, pl:4}}>
      <InputLabel id="demo-multiple-checkbox-label">Products</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={productName}
        onChange={handleChange}
        input={<OutlinedInput label="Products" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={productName.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
      
      
      
      <TextField
        label="Comments"
        variant="outlined"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        sx={{ml:2}}
      />
      
      <TextField
        label="Notes"
        variant="outlined"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        sx={{ml:2}}
      />

      <TextField
        label="Quantity"
        variant="outlined"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        sx={{ml:2}}
      />
      
      
      <TextField
        label="Rate"
        variant="outlined"
        value={rate}
        onChange={(e) => setRates(e.target.value)}
        sx={{ml:2}}
      />
      
      
      <Button variant="contained" onClick={addVolume} sx={{ml:2}}>
        Add
      </Button>
      </Grid>
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </>
  );
}

export default App;
