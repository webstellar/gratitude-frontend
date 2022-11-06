import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const GrItem = styled(Paper)(({ theme }) => ({
    backgroundColor: "rgba(255, 255, 255, 0)",
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "grey.900",
}));