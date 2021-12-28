import { Button } from "ui";
import { Button as MuiButton } from "@mui/material";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button onClick={() => console.log("Web touched it.")}>MuiButton in web project</Button>
    </div>
  );
}
