import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
export const NavBar = ()=>{
    return (
        <>
        <header className="App-header">
        <Typography variant='h4'>Student Management system</Typography>
        <Button variant="text"><Link to="/sighnIn">Sighn In</Link></Button>
      </header>
        </>
    )
}