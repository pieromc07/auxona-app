import { PropTypes } from 'prop-types';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { auxonaTheme } from '.';

export const AuxonaThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={auxonaTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

AuxonaThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
