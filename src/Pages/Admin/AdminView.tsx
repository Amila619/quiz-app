import { Box } from "@mui/material";
import SideMenu from "../../components/dashboard/SideMenu";
import MainGrid from "../../components/dashboard/MainPanel";

export default function AdminView() {
  return (
    <Box>
        <SideMenu />
        <MainGrid />
    </Box>
  );
}
