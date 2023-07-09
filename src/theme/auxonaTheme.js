
import { createTheme } from '@mui/material';
import { blueGrey, grey, indigo } from '@mui/material/colors';


export const auxonaTheme = createTheme({
    palette: {
        background: {
            main: blueGrey[900],
            dark: grey[900],
            light: grey[500],
            contrastText: grey[50]
        },
        primary: {
            main: indigo[500],
            dark: indigo[900],
            light: indigo[100],
            contrastText: grey[50]
        },
    }
})