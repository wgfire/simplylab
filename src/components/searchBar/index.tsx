import { Grid, OutlinedInput } from "@mui/material";
import React from "react";
import SearchSharp from "@material-ui/icons/SearchSharp";
import { useAppDispatch, useAppSelector } from "../../hook/useAppStore";
import { setSearchValue } from "../../store/home";
export interface SearchBarProps {
  valueChange: (value: string) => void;
}
export const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const { searchValue } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();
  const { valueChange } = props;
  return (
    <Grid container display="flex" flexWrap="nowrap" alignItems="center" gap={3}>
      <OutlinedInput
        size="small"
        fullWidth
        value={searchValue}
        onChange={(e) => {
          dispatch(setSearchValue(e.target.value));
        }}
      ></OutlinedInput>
      <Grid
        onClick={(e) => {
          valueChange(searchValue);
        }}
        border="solid"
        borderColor={"#cec9c2"}
        borderRadius={1}
        padding="0.4rem 1rem"
        style={{ borderWidth: "1px", cursor: "pointer" }}
      >
        <SearchSharp></SearchSharp>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
