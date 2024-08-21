import React, { useState, useEffect } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from 'ag-grid-react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ListItemText from "@mui/material/ListItemText";

const Container = styled(Paper)({
  padding: '20px',
  marginTop: '20px',
});

const Header = styled(Typography)({
  marginBottom: '20px',
});

const SearchField = styled(TextField)({
  marginRight: '20px',
});

const columns = [
  { headerName: "ID", field: "id" },
  { headerName: "Name", field: "name" },
  { headerName: "Batch", field: "batch" },
  { headerName: "Physics", field: "physics" },
  { headerName: "Chemistry", field: "chemistry" },
  { headerName: "Maths", field: "maths" },
  { headerName: "Silly Mistakes", field: "sillyMistakes" },
  { headerName: "Concentration Laps", field: "concentrationLaps" },
  { headerName: "Guess Work", field: "guessWork" },
];

function AllStudentsDataGrid() {
  const [selectedBatch, setSelectedBatch] = useState('');
  const [rows, setRows] = useState([]);
  const [batchNames, setBatchNames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRows, setFilteredRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDataGrid, setShowDataGrid] = useState(false);
  const token = localStorage.getItem('jwt_token');

  useEffect(() => {
    const localStorageData = localStorage.getItem('apiData');
    console.log('LocalStorage apiData:', localStorageData);
    const parsedData = JSON.parse(localStorageData);
    if (parsedData && parsedData.batchList) {
      const sett = parsedData.batchList.map(obj => obj.code);
      setBatchNames(sett);
      if (sett.length > 0) {
        setSelectedBatch(sett[0]); // Initialize with the first batch if available
      }
    }
    setTimeout(() => setShowDataGrid(true), 100);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://theailabs.live/session/api/v1/studentDataFromInstituteId',{
          headers: {
          'Authorization': `Bearer ${token}`
        }});
        const responseData = await response.json();
        console.log("response data" + responseData.id);
        if (Array.isArray(responseData)) {
          const transformedData = responseData.map(item => ({
            id: item.id,
            name: item.name,
            batch: item.batch,
            physics: item.subjectMap['Physics'],
            chemistry: item.subjectMap['Chemistry'],
            maths: item.subjectMap['Maths'],
            sillyMistakes: item.assessmentParameterMap['Silly Mistake'],
            concentrationLaps: item.assessmentParameterMap['Concentration'],
            guessWork: item.assessmentParameterMap['Guess Word'],
          }));
          console.log(transformedData);
          setRows(transformedData);
          setFilteredRows(transformedData);
        } else {
          setRows([]);
          setFilteredRows([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const newFilteredRows = rows.filter(row => row.name.toLowerCase().includes(lowercasedQuery));
    setFilteredRows(newFilteredRows);
  }, [searchQuery, rows]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (!rows) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header variant="h5">Students</Header>
      <Header variant="subtitle1">All Students data</Header>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <SearchField
            label="Search Roll No. / Name"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid item>
          <FormControl
            style={{ minWidth: "300px", marginLeft: "16px" }}
            size="small"
          >
            <InputLabel>Batch</InputLabel>
            <Select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              label="Batch"
            >
              {batchNames.map((name) => (
                <MenuItem key={name} value={name}>
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div style={{ marginTop: '20px', height: 400, width: '100%' }} className="ag-theme-alpine" >
        {showDataGrid && (
          <AgGridReact
            rowData={filteredRows}
            columnDefs={columns}
            pagination={true}
            paginationPageSize={5}
            rowSelection="multiple"
          />
        )}
      </div>
    </Container>
  );
}

export default AllStudentsDataGrid;
