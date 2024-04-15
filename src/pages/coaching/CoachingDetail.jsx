import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EventDescriptionCard from "../../components/EventDescriptionCard";
import Grid from "@mui/material/Grid";
import {
  AccessTime,
  AttachMoney,
  CalendarMonth,
  FitnessCenter,
  Place,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme/color";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(no, name, title) {
  return { no, name, title };
}

const rows = [
  createData(1, "John Doe", "Lead Developer"),
  createData(2, "Jane Smith", "Project Manager"),
  createData(3, "Ahmed Khan", "UI/UX Designer"),
  createData(4, "Emily Johnson", "Software Tester"),
  createData(5, "Carlos Diaz", "Product Owner"),
];

export default function CoachingDetail() {
  const { id } = useParams();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 2, px: 5 }}>
        {/* <div>CoachingDetail for ID: {id}</div> */}
        <EventDescriptionCard />
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  minWidth: 275,
                  mt: 3,
                  boxShadow: 3,
                  backgroundColor: "#F5F5F5",
                  borderRadius: 5,
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h4"
                    component="div"
                  >
                    Details
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 3,
                    }}
                  >
                    <CalendarMonth sx={{ width: 30, height: 30, mr: 2 }} />
                    <Typography sx={{ fontSize: 20 }}>24th Nov 2024</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    <AccessTime sx={{ width: 30, height: 30, mr: 2 }} />
                    <Typography sx={{ fontSize: 20 }}>8.00 - 10.00</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    <Place sx={{ width: 30, height: 30, mr: 2 }} />
                    <Typography sx={{ fontSize: 20 }}>FSCIT Block a</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    <AttachMoney sx={{ width: 30, height: 30, mr: 2 }} />
                    <Typography sx={{ fontSize: 20 }}>100.00 MYR</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={9}>
              <Card
                sx={{
                  minWidth: 275,
                  mt: 3,
                  boxShadow: 3,
                  backgroundColor: "#F5F5F5",
                  borderRadius: 5,
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h4"
                    component="div"
                  >
                    Challenges Activities
                  </Typography>
                </CardContent>
                <Grid container>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card
                      sx={{
                        minWidth: 275,
                        margin: 2,
                        boxShadow: 3,
                        borderRadius: 5,
                      }}
                    >
                      <CardContent>
                        <Typography
                          sx={{ fontWeight: 700, mb: 2 }}
                          component="div"
                        >
                          Sweat with Yua Mikami
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                            mb: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              width: "40%",
                              minWidth: 100,
                              textAlign: "left",
                              mr: 2,
                            }}
                          >
                            Intensity
                          </Typography>
                          <Box
                            sx={{
                              width: "60%",
                              display: "flex",
                            }}
                          >
                            <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                            <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                            <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                            <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                            <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                            mb: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              width: "40%",
                              minWidth: 100,
                              textAlign: "left",
                              mr: 2,
                            }}
                          >
                            Complexity
                          </Typography>
                          <Box
                            sx={{
                              width: "60%",
                              display: "flex",
                            }}
                          >
                            <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                            <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                            <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                            <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                            <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card
                      sx={{
                        minWidth: 275,
                        margin: 2,
                        boxShadow: 3,
                        borderRadius: 5,
                      }}
                    >
                      <CardContent>
                        <Typography
                          sx={{ fontWeight: 700, mb: 2 }}
                          component="div"
                        >
                          Cycling with Yua Mikami
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                            mb: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              width: "40%",
                              minWidth: 100,
                              textAlign: "left",
                              mr: 2,
                            }}
                          >
                            Intensity
                          </Typography>
                          <Box
                            sx={{
                              width: "60%",
                              display: "flex",
                            }}
                          >
                            <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                            <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                            mb: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              width: "40%",
                              minWidth: 100,
                              textAlign: "left",
                              mr: 2,
                            }}
                          >
                            Complexity
                          </Typography>
                          <Box
                            sx={{
                              width: "60%",
                              display: "flex",
                            }}
                          >
                            <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                            <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                            <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Card
            sx={{
              minWidth: 275,
              margin: 2,
              boxShadow: 3,
              borderRadius: 5,
              backgroundColor: "#F5F5F5",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  sx={{ fontWeight: 700 }}
                  variant="h4"
                  component="div"
                >
                  List of Particpants In The Event
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <TableContainer
                  component={Paper}
                  sx={{ borderRadius: 5, maxWidth: 1000, maxHeight: 400 }}
                >
                  <Table aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell sx={{ width: "1/6" }}>
                          No
                        </StyledTableCell>
                        <StyledTableCell align="left" sx={{ width: "4/6" }}>
                          Name of Participants
                        </StyledTableCell>
                        <StyledTableCell align="left" sx={{ width: "1/6" }}>
                          Title of Participants
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.no}>
                          <StyledTableCell component="th" scope="row">
                            {row.no}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {row.title}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
