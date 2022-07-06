import { useEffect, useState } from "react";

/**
 *获取地址栏/search {搜索关键词}
 将地址的空白字符转换为+
 */
export const useKeyword = () => {
  const [keyword, setKeyWord] = useState("");
  const replaceState = () => {
    // 解码地址得到空白字符信息
    console.log("挂载");
    const decodeUri = decodeURIComponent(window.location.href);
    const replaceStateUrl = decodeUri.replace(/\s+/g, "+");
    // 替换地址栏地址
    window.history.replaceState(null, "", replaceStateUrl);
    console.log(decodeUri, "url");
    const keyword = decodeUri.match(/(?<=search\/).*/)![0].replace(/\+/g, " ");
    setKeyWord(keyword); // 提取关键词，将jj kk+ss 等情况同一替换成空格，调用查询接口关键词以空格分割。
  };
  useEffect(() => {
    replaceState();
  }, []);

  return { keyword, setKeyWord };
};
