
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={8}>
        <Item>xs for mob = 12, md for laptop = 8</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Item>xs for mob = 12, md for laptop = 4</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Item>xs=12 md=4</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Item>xs=12 md=8</Item>
      </Grid>
    </Grid>
  );
}
