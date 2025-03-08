import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useState } from "react";

const Card = ({ data }) => {
  const [textWrap, setTextWrap] = useState(false);

  return (
    <Stack
      bgcolor="#1e1f1f"
      direction="column"
      spacing={3}
      p={3}
      borderRadius={4}
      maxWidth={380}
      sx={{ cursor: "pointer" }}
      component={motion.div}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Stack direction="row" width="100%" justifyContent="space-between">
        <Stack p={2} spacing={2}>
          <Typography variant="h3" fontWeight={700} color="#fff">
            {data.name}
          </Typography>
          <Typography variant="body1" color="#fff">
            Ki: {data.ki}
          </Typography>
          <Typography variant="body1" color="#fff">
            MaxKi: {data.maxKi}
          </Typography>
          <Typography variant="body1" color="#fff">
            Race: {data.race}
          </Typography>
          <Typography variant="body1" color="#fff">
            Gender: {data.gender}
          </Typography>
          <Typography variant="body1" color="#fff">
            Affiliation: {data.affiliation}
          </Typography>
        </Stack>
        <Box
          component="img"
          src={data.image}
          alt={data.name}
          height={300}
          sx={{
            transition: "ease 1s",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        />
      </Stack>
      <Typography
        variant="body1"
        color="#fff"
        textAlign="justify"
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace={textWrap ? "wrap" : "nowrap"}
        onClick={() => setTextWrap(!textWrap)}
        sx={{
          cursor: "pointer",
        }}
      >
        {data.description}
      </Typography>
    </Stack>
  );
};

Card.loadings = () => (
  <Stack
    bgcolor="#1e1f1f"
    direction="column"
    spacing={3}
    p={3}
    borderRadius={4}
    minWidth={380}
    minHeight={300}
    sx={{ cursor: "pointer" }}
    // component={motion.div}
    // initial={{ opacity: 0, scale: 0 }}
    // animate={{ opacity: 1, scale: 1 }}
    // transition={{ duration: 1, ease: "easeInOut" }}
  >
    <Stack direction="row" width="100%" justifyContent="space-between">
      <Stack p={2} spacing={2} width="50%">
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </Stack>
      <Skeleton variant="rounded" width="50%" height={300} />
    </Stack>
    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
  </Stack>
);

export default Card;
