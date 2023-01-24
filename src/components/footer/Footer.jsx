import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { FooterTitle, SubscribeReleases } from "../../styles/theme/footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#62ACB5",
        color: "#fff",
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, ut!
            Recusandae, modi!
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: "#74757E",
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon sx={{ mr: 1 }} />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About us
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Policy
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms and conditions
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Location
              </Typography>
            </ListItemText>
          </List>
        </Grid>

        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About us
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Policy
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms and conditions
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Location
              </Typography>
            </ListItemText>
          </List>
        </Grid>

        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack>
            <SubscribeReleases
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: "#fff" }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
