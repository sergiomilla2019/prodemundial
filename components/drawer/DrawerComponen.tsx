import { Fragment, useState } from "react";
import { useTheme} from '@mui/material/styles';
import {
  Container,
  Box,
  Button,
  List,
  ListItem,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { dates } from "../layouts/drawerDates";

export const DrawerComponen = (props: dates) => {

  const [drawerOpen, setdrawerOpen] = useState(false);
  const grid: string = "grid";
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'));

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setdrawerOpen((prevState) => !prevState);
    };

  const renderSwitch = (param: string) => {
    switch (param) {
      case "yellow":
        return (
          <>
            <Typography
              sx={{
                color: "#fff !important",
                backgroundColor: `${color(param)} !important`,
                px: 1,
                borderRadius: "4px",
              }}
              variant="subtitle1"
            >
              01
            </Typography>
          </>
        );
      case "orange":
        return (
          <Typography
            sx={{
              color: "#fff !important",
              backgroundColor: `${color(param)} !important`,
              px: 1,
              borderRadius: "4px",
            }}
            variant="subtitle1"
          >
            02
          </Typography>
        );
      case "rose":
        return (
          <Typography
            sx={{
              color: "#fff !important",
              backgroundColor: `${color(param)} !important`,
              px: 1,
              borderRadius: "4px",
            }}
            variant="subtitle1"
          >
            03
          </Typography>
        );
      case "green":
        return (
          <Typography
            sx={{
              color: "#fff !important",
              backgroundColor: `${color(param)} !important`,
              px: 1,
              borderRadius: "4px",
            }}
            variant="subtitle1"
          >
            04
          </Typography>
        );
      case "red":
        return (
          <Typography
            sx={{
              color: "#fff !important",
              backgroundColor: `${color(param)} !important`,
              px: 1,
              borderRadius: "4px",
            }}
            variant="subtitle1"
          >
            05
          </Typography>
        );
      case "redwine":
        return (
          <Typography
            sx={{
              color: "#fff !important",
              backgroundColor: `${color(param)} !important`,
              px: 1,
              borderRadius: "4px",
            }}
            variant="subtitle1"
          >
            06
          </Typography>
        );
      case "blue":
        return (
          <Typography
            sx={{
              color: "#fff !important",
              backgroundColor: `${color(param)} !important`,
              px: 1,
              borderRadius: "4px",
            }}
            variant="subtitle1"
          >
            07
          </Typography>
        );
      case "turquoise":
        return (
          <Typography
            sx={{
              color: "#fff !important",
              backgroundColor: `${color(param)} !important`,
              px: 1,
              borderRadius: "4px",
            }}
            variant="subtitle1"
          >
            08
          </Typography>
        );
      case "brown":
        return (
          <Typography
            sx={{
              color: "#fff !important",
              backgroundColor: `${color(param)} !important`,
              px: 1,
              borderRadius: "4px",
            }}
            variant="subtitle1"
          >
            09
          </Typography>
        );
      case "lightgreen":
        return (
          <Typography
            sx={{
              color: "#fff !important",
              backgroundColor: `${color(param)} !important`,
              px: 1,
              borderRadius: "4px",
            }}
            variant="subtitle1"
          >
            10
          </Typography>
        );
      case "violet":
        return (
          <Typography
            sx={{
              color: "#fff !important",
              backgroundColor: `${color(param)} !important`,
              px: 1,
              borderRadius: "4px",
            }}
            variant="subtitle1"
          >
            11
          </Typography>
        );
    }
  };

  const color = (param: string) => {
    switch (param) {
      case "yellow":
        return "rgb(253, 202, 80)";
      case "orange":
        return "rgb(247, 161, 88)";
      case "rose":
        return "rgb(251, 118, 241)";
      case "green":
        return "rgb(142, 187, 83)";
      case "red":
        return "rgba(242, 63, 63, 0.788)";
      case "turquoise":
        return "#4dfdcb";
      case "lightgreen":
        return "#c1eb89";
      case "redwine":
        return "rgb(213,89,127)";
      case "violet":
        return "#c03cf5e6";
      case "blue":
        return "rgb(64, 184, 234)";
      case "brown":
        return "rgba(138, 82, 30, 0.966)";
    }
  };

  const list = () => (
    <Box
      className="drawer"
      sx={{ overflow: "scroll", position: "relative" }}
      role="presentation"
    >
      <Box sx={{ width: "100%", display: "inline-block" }}>
        <CloseIcon
          onClick={toggleDrawer(false)}
          sx={{
            width: "50px",
            height: "50px",
            float: "right",
            margin: "1rem",
            cursor: "pointer",
          }}
          color="action"
        />
      </Box>
      <div className="drawContainer">
        <Container className="container">
          {/* <Box
            className={`numbers-container numbers-container${props.className}`}
          >
            {renderSwitch(props.className)}
          </Box> */}

          <div>
            {props.list.map((imageList, k) => {
              return (
                <Grid
                  key={k}
                  sx={{
                    padding: "1rem",
                    margin: "0",
                    borderLeft: `2px solid ${color(props.className)}`,
                  }}
                  container
                  columnSpacing={6}
                >
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          color: `${color(props.className)} !important`,
                          textAlign: "center",
                        }}
                      >
                        {imageList.number}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ backgroundColor: `${color(props.className)}` }}
                      className={`tittle-container tittle-container${props.className}`}
                    >
                      <h1 className={`tittle tittle${props.className}`}>
                        {imageList.subTittle}
                      </h1>
                    </Box>
                  </>
                  {imageList.Images.map((image, i) => {
                    return (
                      <Grid sx={{ width: "100%" }} item xs={6} lg={4} key={i}>
                        <List>
                          <ListItem disablePadding>
                            <img
                              className="image"
                              src={`/img/Logos/${image}`}
                            ></img>
                          </ListItem>
                        </List>
                      </Grid>
                    );
                  })}
                </Grid>
              );
            })}
          </div>
        </Container>
      </div>
    </Box>
  );

  return (
    <Fragment>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
        }}
        className={`circle-container circle-${props.className}-container`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginRight: "10px",
            // borderBottom: `2px solid ${color(props.className)}`,
          }}
        >
          {renderSwitch(props.className)}
        </Box>

        <Box
          sx={{ backgroundColor: `${color(props.className)}` }}
          className={`circle`}
        >
          <Button
            sx={{ width: "100%", height: "100%" }}
            onClick={toggleDrawer(true)}
          ></Button>
          <Drawer
          PaperProps={{
            sx: {
              width: `${matchesMd ? "50%" : "100%"}`,
            },
          }}
            anchor={"right"}
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </Box>
      </Box>
    </Fragment>
  );
};
