import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Container, TextField } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CompanyDetail = () => {
  return (
    <div>
      <Container style={{ marginTop: '10px' }}>
        <Grid container spacing={2}>
          <Grid lg={12}>
            <Item style={{textAlign:'left'}} >Dashbord / Company Detail</Item>
          </Grid>
          <Grid xs={12} container >
            <Grid xs={12} display={'flex'}>
              <Item style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <div>
                <TextField id="outlined-basic" label="Company Name" variant="outlined" style={{paddingRight:'10px'}} />
                <TextField id="outlined-basic" label="Company Description" variant="outlined" style={{paddingRight:'10px'}} />
                </div>
                <Button variant="outlined" style={{ height: '35px', margin: '5px' }} >Add New</Button>
              </Item>
              
            </Grid>
           
          </Grid>

        </Grid>
      </Container>

    </div>
  )
}

export default CompanyDetail
