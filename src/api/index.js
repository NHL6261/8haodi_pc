import ajax from "./ajax";
// 加入我们页面请求
export const getEmaiInfo = ({ fName, fPhone, fCity, fPost, text, fType}) =>
  ajax({
    url: "/controller/mail/send",
    method: "POST",
    data: {
      fName,
      fPhone,
      fCity,
      fPost,
      text,
      fType
    }
  });
// B2B招聘页数据请求
export const getGrowInfo = ({ fName, fPhone, fCity, fPost, text, fType }) =>
  ajax({
    url: "/controller/mail/send",
    method: "POST",
    data: {
      fName,
      fPhone,
      fCity,
      fPost,
      text,
      fType
    }
  });
