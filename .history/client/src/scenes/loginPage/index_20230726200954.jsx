import {Box,Typography,useTheme,useMediaQuery} from "@mui/material"
const LoginPage=()=>{
    const theme = useTheme();
    const isNonMobileScreens =userMediaQuery("(min-width:1000px)");

    return <Box>
       <Typography 
       fontWeight="bold"
       fontSize="32px"
       color="primary"
       >Soci

       </Typography>
    </Box>
}
export default LoginPage