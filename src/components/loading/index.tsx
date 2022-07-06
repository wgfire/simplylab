import { Backdrop, BackdropProps, CircularProgress } from "@mui/material";

export const Loading: React.FC<BackdropProps> = (props: BackdropProps) => {
  return <Backdrop sx={{ color: "primary", background: "#b1adadc9" }} children={<CircularProgress color="primary"></CircularProgress>} {...props}></Backdrop>;
};

Loading.defaultProps = {
  open: true,
};
