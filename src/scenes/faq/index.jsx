import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import React from "react";

const FAQ = () => {
  const accordionMargin = {
    marginBottom: "16px", // You can adjust the margin as needed
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Question Page" />
      <Accordion sx={accordionMargin}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            repudiandae harum necessitatibus explicabo, neque, natus veniam sed
            autem ipsam debitis iste dolorum consectetur deleniti quia nemo in
            quaerat sunt iure?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordionMargin}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            repudiandae harum necessitatibus explicabo, neque, natus veniam sed
            autem ipsam debitis iste dolorum consectetur deleniti quia nemo in
            quaerat sunt iure?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordionMargin}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            repudiandae harum necessitatibus explicabo, neque, natus veniam sed
            autem ipsam debitis iste dolorum consectetur deleniti quia nemo in
            quaerat sunt iure?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordionMargin}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            repudiandae harum necessitatibus explicabo, neque, natus veniam sed
            autem ipsam debitis iste dolorum consectetur deleniti quia nemo in
            quaerat sunt iure?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordionMargin}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            repudiandae harum necessitatibus explicabo, neque, natus veniam sed
            autem ipsam debitis iste dolorum consectetur deleniti quia nemo in
            quaerat sunt iure?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
