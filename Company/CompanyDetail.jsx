import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Container, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CompanyDetail = () => {
  const [CompanyName, setCompanyName] = React.useState("");
  const [CompanyDesc, setCompanyDesc] = React.useState("");

  const AddCompanyDetails = () => {
    let fetchCompList = localStorage.getItem("CompList");
    if (fetchCompList === null) {
      let List = [
        {
          comp_id: 1,
          comp_name: CompanyName,
          comp_desc: CompanyDesc
        }
      ];
      localStorage.setItem("CompList", JSON.stringify(List));
    } else {
      debugger;
      let oldList = JSON.parse(fetchCompList);
      let ids = [];
      oldList.map((i)=>{ids.push(i.comp_id)});
      let List = {
        comp_id: Math.max(...ids)+1,
        comp_name: CompanyName,
        comp_desc: CompanyDesc
      }
      oldList.push(List);
      let newList = oldList;
      localStorage.setItem("CompList", JSON.stringify(newList));
    }
    ResetFields();
  }

  const ResetFields = () => {
    setCompanyName("");
    setCompanyDesc("");
  }
  return (
    <div>
      <Container style={{ marginTop: '10px' }}>
        <Grid container spacing={2}>
          <Grid lg={12} container spacing={1}>
            <Grid lg={10}>
              <Item style={{ textAlign: 'left' }} >Dashbord / Company Detail</Item>
            </Grid>
            <Grid lg={2} >
              <Link to={'/company-list'}><Button variant="outlined" >Back</Button></Link>
            </Grid>

          </Grid>
          <Grid xs={12} container >
            <Grid xs={12}>
              <Item >
                <Grid lg={12} container spacing={1}>
                  <Grid lg={5} >
                    <TextField id="outlined-basic" onChange={(e) => setCompanyName(e.target.value)}
                      value={CompanyName}
                      label="Company Name" variant="outlined" style={{ width: '100%' }} />
                  </Grid>
                  <Grid lg={5} >
                    <TextField id="outlined-basic" onChange={(e) => setCompanyDesc(e.target.value)}
                      value={CompanyDesc} label="Company Description" variant="outlined" style={{ width: '100%' }} />
                  </Grid>
                  <Grid lg={2} >
                    <Button variant="outlined" onClick={() => { AddCompanyDetails() }} >Add New</Button>
                  </Grid>
                </Grid>


              </Item>

            </Grid>

          </Grid>

        </Grid>
      </Container>

    </div>
  )
}

export default CompanyDetail
