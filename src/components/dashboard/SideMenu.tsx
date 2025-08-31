import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
// import Divider from '@mui/material/Divider';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import SelectContent from '../components/SelectedContent';
import MenuContent from "./MenuContent";
// import CardAlert from '../components/CardAlert';
import OptionsMenu from "./OptionsMenu";
import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function SideMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        onClick={handleDrawer}
        sx={{
          position: "absolute",
          color: "white",
          top: "50%",
          left: "-1%",
          backgroundColor: "primary.main",
          transition:
            "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            backgroundColor: "primary.light",
            transform: "scale(1.15) rotate(10deg)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          },
          cursor: "pointer",
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        onClose={handleDrawer}
        open={isDrawerOpen}
        variant="temporary"
        sx={{
          display: { xs: "none", md: "block" },
          [`& .${drawerClasses.paper}`]: {
            backgroundColor: "background.paper",
          },
        }}
      >
        <Box
          sx={{
            overflow: "auto",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MenuContent />
        </Box>
        <Stack
          direction="row"
          sx={{
            p: 2,
            gap: 1,
            alignItems: "center",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Avatar
            sizes="small"
            alt="Riley Carter"
            src="/static/images/avatar/7.jpg"
            sx={{ width: 36, height: 36 }}
          />
          <Box sx={{ mr: "auto" }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, lineHeight: "16px" }}
            >
              Riley Carter
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              riley@email.com
            </Typography>
          </Box>
          <OptionsMenu />
        </Stack>
      </Drawer>
    </>
  );
}
