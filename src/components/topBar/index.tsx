import { Divider, Grid, Box, useMediaQuery } from "@mui/material";
import SearchBar from "../searchBar";
import FlagRounded from "@material-ui/icons/FlagRounded";

export interface TopBarProps {
  title?: string | React.ReactNode;
  showSearch?: boolean;
  searchValueChange?: (value: string) => void;
}

export const TopBar: React.FC<TopBarProps> = (props: TopBarProps) => {
  const { title, showSearch, searchValueChange } = props;
  const matches = useMediaQuery("(max-width:550px)"); // 到550时 改为图片渲染

  return (
    <div>
      <Grid className="top-bar_title" container gap={4} alignItems="center" padding={"10px 20px"}>
        {!matches ? title : <FlagRounded></FlagRounded>}
        {showSearch && (
          <Grid item xs={8}>
            <SearchBar
              valueChange={(value) => {
                searchValueChange && searchValueChange(value);
              }}
            />
          </Grid>
        )}
      </Grid>
      <Divider></Divider>
    </div>
  );
};
const Title = (
  <Box fontSize={28}>
    <strong>Best</strong>
    <span>Search</span>
  </Box>
);

TopBar.defaultProps = {
  showSearch: false,
  title: Title,
};
