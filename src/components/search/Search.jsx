import { IconButton, Slide } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import { SearchBoxContainer, SearchField } from "../../styles/theme/search";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  const { showSearch, setShowSearch } = useContext(AppContext);

  return (
    <Slide direction="down" in={showSearch} timeout={500}>
      <SearchBoxContainer>
        <SearchField
          color="secondary"
          variant="standard"
          fullWidth
          placeholder="Search..."
        />
        <IconButton>
          <SearchIcon
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
            }}
            color="secondary"
          />
        </IconButton>
        <IconButton
          onClick={() => setShowSearch(false)}
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <CloseIcon sx={{ fontSize: "4rem" }} color="secondary" />
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  );
}
