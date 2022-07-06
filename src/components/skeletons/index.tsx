import { Grid } from "@mui/material";
import React, { PropsWithChildren } from "react";

export interface SkeletonsProps {
  /**
   * 未加载完成时渲染的component
   */
  renderLoading: React.ReactNode;
  loading: boolean;
  dataSource: Array<any>;
  /**
   * 加载完成时渲染的component
   */
  renderItem: (item: any) => React.ReactNode;
}
export const Skeletons: React.FC<PropsWithChildren<SkeletonsProps>> = (props) => {
  const { renderLoading, loading, dataSource, renderItem } = props;

  // const childrenList = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <Grid container rowGap={2}>
      {dataSource.map((el, index) => {
        return (
          <Grid item md={6} lg={3} xs={12} xl={3} sm={6} alignItems="stretch" key={index}>
            {loading ? renderLoading : renderItem(el)}
          </Grid>
        );
      })}
    </Grid>
  );
};
