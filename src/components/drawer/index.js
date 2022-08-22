import './drawer.css'
import { Drawer } from "@mui/material";
import { Typography } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';


export default function LeftDrawer(props) {
  const { isOpen, setIsOpen } = props
  return (

    <Drawer anchor="left" open={isOpen}>
      <div className="drawerHome">
        <Typography sx={{
          padding: '10px',
          width: '80%'
        }}>HOME</Typography>
        <CancelIcon sx={{
          padding: '5px',
          fontSize: '30px'
        }} onClick={() => { setIsOpen(false) }} />
      </div>
      <div className="drawerSbc">
        <Typography sx={{
          padding: '10px',
          width: '80%'
        }}>SHOPE BY CATEGORY</Typography>
      </div>
      <div className="drawerSbc">
        <Typography sx={{
          padding: '10px',
          width: '80%'
        }}>OTHERS</Typography>
        <Typography sx={{
          padding: '10px',
          fontSize: '20px'
        }}>+</Typography>
      </div>
      <div className="drawerSbc">
        <Typography sx={{
          padding: '10px',
          width: '80%'
        }}>MORE SHOPE</Typography>
        <Typography sx={{
          padding: '10px',
          fontSize: '20px'
        }}>+</Typography>
      </div>
    </Drawer>
  )
}