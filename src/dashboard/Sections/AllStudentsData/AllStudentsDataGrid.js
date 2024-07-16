import React, { useState, useEffect } from "react";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import { TextField, Select, MenuItem, InputLabel, FormControl, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";

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
  { key: "id", name: "ID" },
  { key: "name", name: "Name" },
  { key: "batch", name: "Batch" },
  { key: "physics", name: "Physics" },
  { key: "chemistry", name: "Chemistry" },
  { key: "maths", name: "Maths" },
  { key: "sillyMistakes", name: "Silly Mistakes" },
  { key: "timeManagement", name: "Time Management" },
  { key: "concentrationLaps", name: "Concentration Laps" },
  { key: "guessWork", name: "Guess Work" },
];

function AllStudentsDataGrid() {
  const [searchText, setSearchText] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://theailabs.live/session/api/v1/student/getStudentListByBatch?batchId=3');
        // Assuming response.data is an array of students
        if (Array.isArray(response.data)) {
          // Transform the response data if necessary to match the columns structure
          const transformedData = response.data.map(student => ({
            id: student.id,
            name: student.name,
            batch: student.batch.name, // Assuming batch is an object with a 'name' property
            physics: student.physics,
            chemistry: student.chemistry,
            maths: student.maths,
            sillyMistakes: student.sillyMistakes,
            timeManagement: student.timeManagement,
            concentrationLaps: student.concentrationLaps,
            guessWork: student.guessWork
          }));
          setRows(transformedData);
        } else {
          setRows([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state, such as setting an empty array or showing an error message
        setRows([]);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  const filteredRows = rows.filter(row => {
    return (
      (searchText === '' || row.name.toLowerCase().includes(searchText.toLowerCase()) || row.id.toString().includes(searchText)) &&
      (selectedBatch === '' || row.batch === selectedBatch)
    );
  });

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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Grid>
        <Grid item>
          <FormControl variant="outlined" size="small">
            <InputLabel>Batch</InputLabel>
            <Select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              label="Batch"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Batch C">Batch C</MenuItem>
              {/* Add more batches as needed */}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div style={{ marginTop: '20px' }}>
        <DataGrid columns={columns} rows={filteredRows} />
      </div>
    </Container>
  );
}

export default AllStudentsDataGrid;
