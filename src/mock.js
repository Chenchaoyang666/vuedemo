//引入mockjs
import Mock from "mockjs";
//使用mockjs模拟数据

Mock.setup({
  timeout: "200-600",
});

Mock.mock("/user", {
  name: "@name",
  email: "@email",
  "age|10-20": 5,
});
Mock.mock("http://localhost:8080/menu", {
  id: "@increment",
  'name':'menu',
  'order|10-20':12
});

Mock.mock('\/api\/msdk\/proxy\/query_common_credit', {
    "ret":0,
    "data":
      {
        "mtime": "@datetime",//随机生成日期时间
        "score|1-800": 800,
        "rank|1-100":  100,
        "stars|1-5": 5,
        "nickname": "@cname",
      }
});