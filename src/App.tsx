import "./App.scss";
import { Button, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button color="primary" variant="contained">
          <Typography fontWeight={"bold"} fontSize={40}>
            test
          </Typography>
        </Button>
      </header>
    </div>
  );
}

export default App;
