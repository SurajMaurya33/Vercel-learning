import React from 'react'
import TableList from './TableList'
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CompanyList = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Container style={{ marginTop: "25px" }}>
        <Grid container spacing={2} >
          <Grid xs={12} display={'flex'} flexDirection={'row'} spacing={2} border={'0.2px solid gray'} padding={'5px'} borderRadius={'5px'}>
            <Grid xs={6} >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={2}  display={'flex'} justifyContent={'start'} alignItems={'center'}>
              <Button variant="outlined" style={{ height: '30px', margin: '5px' }}>Search</Button>
            </Grid>
            <Grid xs={4} display={'flex'} justifyContent={'end'} alignItems={'center'}>
              <Link to={'/company-detail'}><Button variant="outlined" style={{ height: '30px', margin: '5px' }} >Add New</Button></Link>
            </Grid>
          </Grid>
          <Grid xs={12} border={'0.2px solid gray'} padding={'5px'} borderRadius={'5px'}>
            <Item>
              <TableList />
            </Item>
          </Grid>

        </Grid>


      </Container>


    </div>
  )
}

export default CompanyList
