import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImg,
  BannerTitle,
} from "../../styles/theme/banner";

export const Banner = () => {
  const theme = useTheme();
  const res = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImg src="/banner.png" />
      <BannerContent>
        <Typography variant="h6">A lot of products</Typography>
        <BannerTitle variant="h2">Cat food</BannerTitle>
        <BannerDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quidem
          magni sed culpa harum, consequatur quos animi ipsa explicabo tempora
          accusamus repellendus nobis modi nulla maiores atque minima vel. Quae.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
};
