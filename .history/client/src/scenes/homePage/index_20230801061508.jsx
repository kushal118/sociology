import { Box, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";

const HomePage=()=>{
    const HomePage = () => {
        const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
        const { _id, picturePath } = useSelector((state) => state.user);
      
  
    return <Box>
        <Navbar />
    </Box>
}
export default HomePage