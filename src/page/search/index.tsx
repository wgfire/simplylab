import { Box, Container, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Skeletons } from "../../components/skeletons";
import { TopBar } from "../../components/topBar";
import { useAppDispatch, useAppSelector } from "../../hook/useAppStore";
import { useKeyword } from "../../hook/useKeyword";
import { setSearchValue } from "../../store/home";
import { getProductData, ProductData } from "../../store/search";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
/**
 * 查询页面
 * @returns
 */
export const Search: React.FC = () => {
  const { keyword, setKeyWord } = useKeyword();
  const dispatch = useAppDispatch();
  const { result, loading } = useAppSelector((state) => state.search);
  useEffect(() => {
    console.log("关键词", keyword);
    if (keyword) {
      dispatch(setSearchValue(keyword)); //设置输入框的值
      dispatch(getProductData({ login_token: "INTERVIEW_SIMPLY2021", search_phrase: keyword }));
    }
  }, [dispatch, keyword]);

  return (
    <Box bgcolor={" #fcf7ee;"} width="100%" height="100%">
      <TopBar showSearch searchValueChange={(value) => setKeyWord(value)}></TopBar>
      <Container maxWidth="lg">
        <Typography mt={6} mb={4} fontSize={26}>
          Related product trends
        </Typography>
        <Box style={{ height: "76vh", overflow: "auto", position: "relative" }}>
          {/**
           * 没有找到符合要求的图表组件，所以用了图片来代替。
           * 如果要换成图表组件，修改renderItem 返回组件即可。
           */}
          <Skeletons
            renderItem={(el) => {
              return (
                <Box border={"solid"} width="95%" height={200} boxShadow="0 1 0 1 #ccc" borderColor="#CCC" style={{ borderWidth: "1px" }} key={el.id}>
                  <ImageListItem
                    sx={{
                      width: "100%",
                    }}
                  >
                    <img
                      src={el.image}
                      alt="ff"
                      loading="lazy"
                      width="100%"
                      onError={(e) => {
                        console.log("图片加载失败", e);
                        e.currentTarget.src =
                          "https://img.icons8.com/external-prettycons-solid-prettycons/344/external-404-web-and-seo-prettycons-solid-prettycons.png";
                      }}
                    />
                    <ImageListItemBar title={el.title} subtitle={el.published_at} />
                  </ImageListItem>
                </Box>
              );
            }}
            loading={loading}
            renderLoading={LoadSkeleton}
            dataSource={result ? result.data.products : new Array(25).fill("")}
          ></Skeletons>
        </Box>
      </Container>
    </Box>
  );
};

const LoadSkeleton = (
  <>
    <Skeleton variant="text" width="80%" height={18} />
    <Skeleton variant="text" width="40%" height={18} />
    <Skeleton variant="rectangular" width="95%" height={200} />
  </>
);

export default Search;
