import {Modal,CloseButton} from 'react-bootstrap';
import {useState} from 'react';
import { Grid, Button,MenuItem,FormControl,InputLabel,Select} from '@mui/material';
import { TextField } from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import '../Modal/SideBarCertificate.css'
const CertificateModal = (props) => {
   
  
    return (
      <>
     
  
        <Modal
          show={props.open}
          onHide={props.handleRemove}
          backdrop="static"
          keyboard={false}
        >
            
          <CloseButton onClick={props.handleRemove} style={{marginLeft:'auto',paddingRight:'20px',paddingTop:'20px'}}/>
          <Modal.Body>
       
                    
                    <Grid container>
                        <Grid item md={12} sm={12} style={{marginLeft:'30px'}}>
                         <h6>Certificate</h6>
                         <TextField id="outlined-search" label="Search field" type="search" variant="outlined" style={{width:'400px',backgroundColor:'#F9F9F9'}} className='side-bar-textfield'/>
                        </Grid>
                    </Grid>    
                    <Grid container>
                        <Grid item md={12} style={{marginTop:'20px',marginLeft:'30px'}}>
                         <h6>Course</h6>
                         <TextField id="outlined-search" label="Search field" type="search" variant="outlined" style={{width:'400px',backgroundColor:'#F9F9F9'}} className='side-bar-textfield1'/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={12} style={{marginTop:'20px',marginLeft:'30px'}}>
                         <h6>Year</h6>
                         <TextField id="outlined-search" label="Search field" type="search" variant="outlined" style={{width:'400px',backgroundColor:'#F9F9F9'}}className='side-bar-textfield2'/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid md={12} sm={12} >
                            <h2 style={{paddingTop:'20px',paddingLeft:'110px',color:'#74809D'}} className='upload-your-file'>Upload Your File</h2>
                        </Grid>
                        </Grid>
                        <Grid container>
                        <Grid md={12} sm={12} >
                            <h6 style={{paddingLeft:'140px',color:'#C9CEDA'}} className='resoulution-heading'>Any resolution, it's fine :)</h6>
                        </Grid>
                        </Grid>
                        <Grid container>
                        <Grid>
                            <DriveFolderUploadIcon style={{marginLeft:'180px',fontSize:'80px'}} className='drive-folder-icon'/>
                        </Grid>
                        </Grid>
                        <div style={{height:'70px',width:'400px',textAlign:'center',marginLeft:'30px',marginTop:'20px',borderStyle:'dashed'}} className='border-dash'>
                        <Grid container>
                        <Grid item md={12} >
                           <h6 style={{marginTop:'20px'}} className='drag-heading'>Drag a file of <span style={{color:'blue'}}>browse</span> for a file to upload</h6> 
                        </Grid>
                        </Grid>
                        </div>
                        <Grid container>
                        <Grid item md={12} sm={12} xs={12} style={{marginTop:'20px' ,textAlign:'center'}}>
                         <Button variant='contained'>Save</Button>
                        </Grid>
                    </Grid>
                    

          </Modal.Body>

       
        </Modal>
      </>
    );
  }
  
export default CertificateModal;