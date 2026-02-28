import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UsdEurChart from "./UsdEurChart.jsx";

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          USD / EUR — исторический курс
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Данные из локального json-server (usd.json) через TanStack Query.
        </Typography>
        <UsdEurChart />
      </Box>
    </Container>
  );
}

export default App;
