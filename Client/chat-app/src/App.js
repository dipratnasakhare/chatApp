// import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { Box } from "@chakra-ui/react";
import { Messages } from "./component/Pages/Messages/Messages";
import { Friends } from "./component/Pages/Friends/Friends";
function App() {
  return (
    <div className="App">
      <Box display={["grid", "grid", "flex"]}>
        <Box w={["100%", "50%","50%", "35%"]}>
          {/* this box containing navbar text of website */}
          <Navbar />
          <Friends />
        </Box>
        <Box  bg="yellow" display={["none", "flex", "flex"]} w="70%">
          {/* This box is for showing massages in laptop and tablet mode  */}
          <Messages />{" "}
        </Box>
      </Box>
    </div>
  );
}

export default App;
