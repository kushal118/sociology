import {Box,Typography,useTheme,useMediaQuery} from "@mui/material"
const LoginPage=()=>{
    const theme = useTheme();
    const isNonMobileScreens =userMediaQuery("(min-width:1000px)");

    return <Box>
    <b
       <Typography 
       fontWeight="bold"
       fontSize="32px"
       color="primary"
       >Sociology

       </Typography>
    </Box>
}
export default LoginPage