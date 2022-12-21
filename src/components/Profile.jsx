import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {FaIdCard} from "react-icons/fa";
import {blueGrey,deepPurple,pink,yellow, teal} from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import swal from 'sweetalert';
import { useState,useRef } from 'react';
import ReactDOM from 'react-dom/client';


const handleClick = () => {
    swal('Ward 2A');
};
const handleAlert = () => {
    swal('Insurance');
};


export default function Profile() {
    const [color, setColor] = React.useState('yellow');
    const colorClick= () => {
        setColor(color === 'yellow' ? 'orange' : 'yellow');
    }
    const handleDoubleClick = (e) => {
        // console.log(e.detail)
        console.log('Room Name:Premier Single');
      };
    
  return (
    <React.Fragment>
      
      <Container fixed>
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1128,
          height: 528,
        },
      }}>
        <Paper elevation={3} >
        <div style={{display:'flex',flexDirection:'row'}}>
        <div direction="row" spacing={2} style={{padding:'25px'}} > 
            <Avatar style={{width:'140px',margin:'auto',height:'100px'}} alt="image"  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" />  
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'50pc'}} >
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
            <div><p style={{fontSize:'16px',color: 'rgba(0, 0, 0, 0.6)', fontWeight: 'bold',paddingTop:'5px',paddingLeft:'1px'}}>John Doe</p>
           <span style={{ fontWeight: 'normal',color:'blue'}} >Male</span> <span style={{ fontWeight: 'normal',color:'black'}} >26yrs</span></div>
           
        </div>
        <div>
            
           <p style={{fontSize:'16px',color: 'rgba(0, 0, 0, 0.6)', fontWeight: 'bold',paddingTop:'5px',paddingLeft:'1px'}}> <FaIdCard/>  12345</p>
           <span style={{fontWeight: 'normal',}}>09 Jun 2021,01:20 PM</span>
        </div>
        </div>
           
        </div>

        <Box
                sx={{display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width:'100%',
                  height: 100,
                },
                    backgroundColor: blueGrey[100],
                }}
                >
                    <div style={{display:'flex',flexDirection:'row',padding:'2px'}}>
                    <img style={{width:'140px',margin:'0',height:'100px'}} alt="image"  src="https://c8.alamy.com/comp/2GH08WG/stethoscope-icon-with-heart-shape-health-and-medicine-symbol-2GH08WG.jpg" /> 
                    <div >
                    <p style={{fontSize:'16px',color: 'blue', fontWeight: '200',paddingTop:'5px',paddingLeft:'1px'}}>Dr. Joe Tribbiani</p>
                    <p style={{fontSize:'16px',color: 'rgba(0, 0, 0, 0.6)', fontWeight: '100',paddingTop:'5px',paddingLeft:'1px'}}> General Medicine</p>
                    </div>
                    <div style={{borderLeft: '1px solid', borderColor: 'black' ,paddingLeft:'12px',marginLeft:'15px',maxWidth:'800px'}}>
                        <h6 style={{fontSize:'13px',color: 'rgba(0, 0, 0, 0.6)', fontWeight: '100'}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </h6>
                    </div>
                    </div>

        </Box>
        
        <Box
                sx={{display: 'flex',
                flexWrap: 'wrap',
                
                '& > :not(style)': {
                  m: 1,
                  width:'100%',
                  height: 100,
                },
                    backgroundColor: blueGrey[100],
                    justifyContent:'space-around'
                }}
                >
                
                    <Card onClick={handleClick} sx={{ maxWidth: 155 ,textAlign:'center',backgroundColor: deepPurple[200],}}>
      <CardContent>
        <Avatar alt="image"  src='data:image/png;base64,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'></Avatar>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Ward
        </Typography>
        
        
      </CardContent>
     
    </Card>

    <Card sx={{ maxWidth: 155 ,textAlign:'center',backgroundColor: pink[200],}} onDoubleClick={handleDoubleClick}>
    <CardContent>
        <Avatar alt="image"  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAADs7Ozk5OTb29v6+vrx8fEdHR0PDw/g4OAyMjLT09OPj49ra2t9fX38/Pw4ODh3d3eXl5e3t7fo6OilpaXAwMBQUFCwsLAsLCxcXFyDg4NVVVWpqalJSUnNzc1iYmIZGRlxcXFCQkKWlpYjIyMLCws2NjbFxcViNBoLAAAEJklEQVR4nO3d61aqUBSGYUEgkIMCggYCnlLv/wq3OdHcJerEGSJ9zy8yh4t3yOLQGFCvBwAAAAAAAAAAAC1nGPqzV+F3pYrykbteEGrauJOpjnLmPU+8KC6s4bPXStDwTbloO3eisFCfvXoC9MuBJ28T34liS33duXqr8MgcJW6aFXbfePYac91beLIY5O46jLWXKS0LnTQZfWx4rWbuBdmur7d8+y0Lrc9lVbPjwJ9P3nmlm5Xrrae2pbYzdUhrqZ2/Zqhje7pOkwGv9PNY4wf7Y01zG7Cz2Jg3XSj8omtxFixXJjN14TQTmDLWqaLwRLXjqTPPt4s7Py9tInDI2XHcKjwyLG0XpcvZram6aeKsSGUE3l14pBuqFkaOu6r6wCbOhn618HycIszSZPttrnap8MjQiv2xJlk1XrjrW9doYoWlceOF4+vvunQ8fEi/8cL+9XfpKORCoSAUku4X9jpUmI0Gl3SnMFCu6ULh9auBDhQaFX8XRSEbCgVdLAztb4quFf4o6c61RVVhd85pUCg2LAoFoZCgkA2FglBIUMiGQkEoJChkQ6EgFBIUsqFQEAoJCtlQKAiFBIVsKBSEQoJCNhQKQiFBIRsKBaGQoJANhYJQSFDIhkJBKCQoZEOhIBSSH4VW5i296a07baq1vVCb0c/K/MadmZVaXhgpX8J6w7a78DywbmKrC23lf7U21FYXzr4VunWGbXOhddzJrJNyqc5DStpcWM7CYr84rT8T21zoH5aWh5fpW1zXGLbNhfPDUnR4mZ784tUYts2F9B36h5fpOwxqDNvmwnIe7nqdnYenfWnQ1X1p94+Hf+Ccpvvnpb1e9nBg2wu7f33Y6/41/uNQKAiFBIVsKBSEQoJCNhQKQiFBIRsKBaGQoJANhYJQSFDIhkJBKCQoZEOhIBQSFLKhUBAKCQrZUCgIhQSFbCgUhEKCQjYUCkIhQSEbCgWhkKCQDYWCUEhQyIZCQSgkKGRDoSAUEhSyoVDQnyks75SsKnyF/0Paty4r/0vsjn5vU2H8/d2adOGYPrCoWCv+rZvGRJEgUGhoRRz4yerGSBPutzsXCXykcFyEWTobmPcOlfA+3pAJZBfqhqHFkeOOaozFe1JD04VGX9tF6XI2eGAs5rMo0mYKDXsXOu5k9Pb4UCkvsNdbmxvzEVcLdSvOAn919xwrVY+2MdfcwEddOh7q6tiertP5lhn2nid+EBdWnUei/J7ynMb6XDY0Ow68+eSdF7ZZud56aluq/uyYi8pCJ52NPja8MjP3gulurLcz7ETnVSnKYpC7Thhr7doUr7i30BwlbpoVdv9lyo5uFb5NfCeKLdVo+bZYbVhxhNvOnSgsmrgG+nXO+aY4yBMv2u/vh89eK1H7s6KP3PWCULPUbpWdGK87xwAAAAAAAAAAAOCnf78OU03Z8sv/AAAAAElFTkSuQmCC'></Avatar>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Room
        </Typography>
        
        
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 155 ,textAlign:'center',background: color,}}  onClick={colorClick}>
    <CardContent>
        <Avatar alt="image"  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAADLy8tHR0dRUVFcXFzU1NTb29vq6upBQUEcHBySkpIEBATm5ub8/PxLS0u9vb0aGhqHh4fQ0NBtbW3w8PAvLy9iYmLDw8Ofn5+oqKhZWVk6Ojp9fX3g4OCvr68lJSVoaGiPj48sLCw8PDxwo7HeAAAEvUlEQVR4nO2dfXuqIBiHwbWyMsrSsq1TbWff/zOeTHypSxwICHZ+9/bHyauDzy0gIM+KEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPWGuA7ANI2Gwem3NhFKauA7CJluas33ZWmSEFrgOxCIwHD8wHD8wHD8wHD+vbog5zUhhq5qQG4ZhfWzsk3D2h/7Gn3E7/i54U3QdpA7h7355o3UXIGMs70jZZrML7y9VCwhp9KtfRFcWQpfkZrRLeCCnZaq+NGdSdeiyI54nzUi+1Qs4Sggezcctx+3KfjzFsg8Vq5GRy3xRc+XlXBvH5hdnT20YWdKHbhRFNDorlvEQvGBOo969TXGhlWEluki1imw31CqyN0xwpz9oBdRq6IxDVXP75FDXZaaj6JXhLO93OV/3ATmIeXRznUK9MiznW0v+Oj3xAzONQr0y/FsE806KWwFjKwPDl0+GaVVjVbfbFh3zoFGqT4azIpa4cTMPCsOTRqk+GQblfaW+c/LhY6FRqoeGb41DBg19WPTaNfQBO4bFCBu9cB0Wi5UP3eCMYMWQkeOCxkcvqtCK4X3mkDKX66UGdlqpT8Bw/MBw/MBw/MBw/MBw/MBw/MBw/MDQI3oup702ZPlPuNtcsjzh6BUNb7Esf3g0ya6no7whG/qxy+2ES9rg89zryY+KIUmz47KdjywlhvexGQn39JFLn1MotNJsTrtYZzo+LaxouXlbEOWbnNYMbxd03el3d1yZq0ZG0nI3+uZZifZIWZGtw+nTBW0lmuqKVbBGfkET9cwxScPzw5UUCVKqmIfTQVblvlzfv+b8RdQjR0TKkLF9U6ODvQm5/IzkjZe4uHfvc1KeWDm9QMaQkaNEEy30TSWv8b1perrnEd5+y4FD+U/+pOqw7vRJ+2DxnVQVbMSvTgUs+x0j78WBq2pJUoYZP91anAObrnkz0so0qvkqLti2fM2qWlXNR5My3PLL11U4i8tWZIR9YRg0DsX9OqKUIR8KO3Y86xTOT8UABCyK0pqNht97AuH/aUfK8CRz9XgrWptppW4Mu8fzXfGmiWIAAgY25Lex7lkh76x6aZsVAxuWY9FMFD2rB7Bl+ztUGdjwzKOPNsJyNuWMwNC8bQjDaF5DS67zdq7VO94E71AkGsDQCwYyjJr/FMxPpaat6qAOYdhlaKnZSVOcH4Y6hnQxdQlfSAw14jtg4DmNA2AoDwxdAUN5YOgKGMoDQ1fAUB4YugKG8nStDwN3TAcwfP01vty2tjUiu4au668ksmSYik85OM1dZ3OGLBafcWDi5l6XOUOycaf0xMNel0FDMk0+393zmTxuOps09BMYCoChR8BQAAw9AoYC2gx9+DSLFgzOS0lwmPjAISCYl/asw/yA+yXiPQI7dfg/ZJu4r8ACW2v88jmNS8/I8nOa+zlciDUYIp9mNXPHCs+85YGhK2AoDwxdYdkw8sTQ3r6FP4bm9i3iybrGo1baiGoSaxm24IVhCzB85vUNZ8KSdD7PW5+TcHGj/OfqPyJDt58C/Py1KRU/ykVV3xTwRI8vmzHKt0Cwz1eLzFryWXah8w8BDnctcc2MhuXSkIlEPH1aDQAAAAAAAAAAAAAAAAAAAAAAAAAAAACG+QcWPlFaswDZCwAAAABJRU5ErkJggg=='></Avatar>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Bed ID
        </Typography>
        
        
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 155 ,textAlign:'center',backgroundColor: teal[200],}} onClick={handleAlert}>
    <CardContent>
        <Avatar alt="image"  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAAC8vLxcXFzs7OwzMzPQ0NBmZmb5+fkhISF3d3evr6/29va/v7/MzMxWVlbk5OQdHR22trapqanb29tCQkJLS0sZGRkLCwtkZGSDg4NOTk59fX0UFBQ9PT0uLi6enp5ubm6NjY378naTAAACfElEQVR4nO3cfVOqQBSAcUMgUiTf0jLK9Pt/yNwVLt65d6bdOnC25fn9VTN6Zp8ZhGxgJxMAAAAAAAAAAAAAAAAAAAAAAAAAQMCKfJHoW+RFT33r3V0oduse+qpMO+svWSUduNFO+sdGNnCu3fMfc8nAbTM0e5zqe2w/L1vBwlc78am3k5ifIn+y63mVG5nbgVO5gT82tSvKxebV9ggVGyfBHqm12Lg3M66PS9D32VPfm9g4e0gsxcZJWNo1SU1LzbBVKTVORLkyi0qFptnChzDOo63igUIfFKqwhVLnhiALT5c1vUsNC7KwmB3vpQ7SMAtFUfj7XQu1V9Gn9PrtNzi12GGVfvf/DH3bRV8oe8UPkuhfbUESLVxVeUiqHr4fCg2TEv13i/i/PVHoh0INFPqhUAOFfijUQKGfsRQKDZMiX7hPFiFJ9uKFQaKQwpEVPr/ch+TlWbww/qvFCK74FA6LQj8UaqDQD4UaBi9czr+SdO8vkkX3zmpd3kxxvk136MK1w1/JWVtSZjf3GJzuuruPzRTXhyiGLnT6IvDRvPjD/NLcNW4f5DjdLHrl+GEIsvDcvPhsfmme6anMz81jDqV9lePtFUMXnl0K24Nxe7s2s9D2U3m4/HxwXNPgZ5r57Ct19wzPtj78OaOk51n3FNpm5vy4FlcLPxRqoNAPhRoo9EOhBgr9UKiBQj8UaqDQD4UaKPRDoQYK/VCogUI/IymMen+a+PcYuu4TJboB3I/ZfaL2YuMC3OvraJYkt9dX/Pu1hbbnXiW+594I9k2Mf+/LEexfejnbxL4H7ST+fYStQPaC7isPAAAAAAAAAAAAAAAAAAAAAAAAACDiE38/OzQ5hRxBAAAAAElFTkSuQmCC'></Avatar>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Payment
        </Typography>
        
        
      </CardContent>
    </Card>
     </Box>
        </Paper>
        </Box>
      </Container>
    </React.Fragment>
  )
}
