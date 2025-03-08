import { Avatar, Button, Stack, Typography } from "@mui/material";
import Card from "./components/Card";

import useApi from "./useApi";

const App = () => {
  const { data, loading, obtenerData } = useApi();
  if (loading) {
    return (
      <Stack
        direction="column"
        minHeight="100vh"
        width="100%"
        bgcolor="#0f1214"
        justifyContent="space-between"
      >
        <Stack
          direction="row"
          p={3}
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap={5}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <Card.loadings key={index} />
          ))}
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack
      direction="column"
      minHeight="100vh"
      width="100%"
      bgcolor="#0f1214"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="h1" color="warning" fontWeight={700}>
        Dragon Ball
      </Typography>
      <Stack
        direction="row"
        p={3}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={5}
      >
        {data?.items?.length > 0 &&
          data.items.map((data) => <Card key={data.id} data={data} />)}
      </Stack>
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        p={3}
        boxSizing="border-box"
      >
        <Button
          variant="contained"
          color="warning"
          onClick={() => obtenerData(true)}
          disabled={data.links.previous === ""}
        >
          Back
        </Button>
        <Avatar
          sx={{
            bgcolor: "#e78c00",
          }}
        >
          {data.meta.currentPage}
        </Avatar>
        <Button
          variant="contained"
          color="warning"
          onClick={() => obtenerData()}
          disabled={data.links.next === ""}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
};

export default App;
