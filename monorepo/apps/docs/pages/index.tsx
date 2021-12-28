import { Button } from "ui";
import MainLayout from "../Layouts/MainLayout";

export default function Docs() {
  return (
    <MainLayout>
      <h1>Docs</h1>
      <Button onClick={() => console.log("The docs touched the button.")}>docs test</Button>
    </MainLayout>
  );
}
