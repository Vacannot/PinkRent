import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import mockData from "../../mockData";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ProductDetails = () => {
  const { width } = useWindowDimensions();
  let breakpoint = false;
  if (width < 971) {
    breakpoint = true;
  }
  if (breakpoint)
    return (
      <>
        {mockData.map((data) => (
          <Box
            key={data.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "8rem",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="240"
                image={data.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  sx={{ fontSize: "1rem" }}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.location}
                </Typography>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: 16,
                    paddingTop: "10px",
                  }}
                >
                  {data.price} kr
                </Box>
              </CardContent>
            </Card>
            <Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ marginBottom: 3, marginTop: 3 }}
                >
                  DESCRIPTION
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ maxWidth: "21rem", marginBottom: 3 }}
                >
                  {data.desc}
                </Typography>
              </Box>

              <Box sx={{ gap: "10px", display: "flex" }}>
                <Button
                  size="medium"
                  sx={{ color: "white", background: "#F06A6A" }}
                  variant="contained"
                >
                  REPORT
                </Button>
                <Button
                  sx={{
                    color: "white",
                    background: "primary",
                    padding: "6px 40px",
                  }}
                  variant="contained"
                >
                  REQUEST RENTAL
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </>
    );
  // desktop
  return (
    <div>
      {mockData.map((data) => (
        <Box
          key={data.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "8rem",
          }}
        >
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              image={data.image}
              alt="green iguana"
              sx={{ width: "85%" }}
            />
            <CardContent>
              <Typography
                sx={{ fontSize: "1.8rem", fontWeight: "400" }}
                gutterBottom
                variant="h6"
                component="div"
              >
                Tavla av kvinna 1843, <br /> väldigt fin och väldigt <br />{" "}
                gammal. hyres endast till <br /> mig.
              </Typography>

              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    maxWidth: "30rem",
                    marginBottom: "-66px",
                    fontSize: "1.1rem",
                  }}
                >
                  Water. Earth. Fire. Air. Long ago, the four nations lived
                  together in harmony. Then, everything changed when the Fire
                  Nation attacked. <br /> Only the Avatar, master of all four
                  elements, could stop them.
                </Typography>
              </Box>
              <div>
                <Typography
                  sx={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    marginTop: "7rem",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  <span>
                    <svg
                      width="15"
                      height="21"
                      viewBox="0 0 15 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.49967 0.083252C3.46842 0.083252 0.208008 3.34367 0.208008 7.37492C0.208008 12.8437 7.49967 20.9166 7.49967 20.9166C7.49967 20.9166 14.7913 12.8437 14.7913 7.37492C14.7913 3.34367 11.5309 0.083252 7.49967 0.083252ZM7.49967 9.97909C6.06217 9.97909 4.89551 8.81242 4.89551 7.37492C4.89551 5.93742 6.06217 4.77075 7.49967 4.77075C8.93717 4.77075 10.1038 5.93742 10.1038 7.37492C10.1038 8.81242 8.93717 9.97909 7.49967 9.97909Z"
                        fill="#ED80BE"
                      />
                    </svg>
                  </span>{" "}
                  {data.location}
                </Typography>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: 25,
                    paddingTop: "10px",
                  }}
                >
                  <span>Price:</span> {data.price} kr/ day
                </Box>
              </div>
              <Box sx={{ gap: "60px", display: "flex", marginTop: "2rem" }}>
                <Button
                  sx={{
                    color: "white",
                    background: "primary",
                    padding: "6px 40px",
                  }}
                  variant="contained"
                >
                  REQUEST RENTAL
                </Button>
                <Button
                  size="medium"
                  sx={{ color: "white", background: "#F06A6A" }}
                  variant="contained"
                >
                  REPORT
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </div>
  );
};
export default ProductDetails;
