import { Box } from "@mui/material";
import Image from "next/image";

export const BibotalkSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        py: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src="/bibotalk.png"
        alt="Bibotalk"
        width={200}
        height={60}
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </Box>
  );
};
