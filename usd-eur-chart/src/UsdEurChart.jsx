import { useQuery } from "@tanstack/react-query";
import { LineChart } from "@mui/x-charts/LineChart";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const API_URL = "http://localhost:3000/Series";

async function fetchUsdEur() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

function UsdEurChart() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["usd-eur"],
    queryFn: fetchUsdEur,
  });

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <CircularProgress size={24} />
        <Typography>Загружаю данные курса…</Typography>
      </Box>
    );
  }

  if (isError) {
    return (
      <Typography color="error">Ошибка загрузки: {error.message}</Typography>
    );
  }

  // Ожидаем структуру: { Obs: [ { _TIME_PERIOD, _OBS_VALUE, ... }, ... ] }
  const obs = data?.Obs ?? [];

  // Чтобы график не был слишком тяжёлым, возьмём, например, последние 365 точек
  const lastPoints = obs.slice(-365);

  const xData = lastPoints.map((item) => new Date(item._TIME_PERIOD));
  const yData = lastPoints.map((item) => Number(item._OBS_VALUE));

  return (
    <LineChart
      xAxis={[
        {
          data: xData,
          scaleType: "time",
        },
      ]}
      series={[
        {
          data: yData,
          label: "USD за 1 EUR",
        },
      ]}
      height={400}
    />
  );
}

export default UsdEurChart;
