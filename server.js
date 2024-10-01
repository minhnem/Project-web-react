import jsonServer from 'json-server'; // Nếu dùng ES module
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});

// Xuất hàm server để Vercel có thể sử dụng
export default (req, res) => {
  // Thay vì gọi server.listen(), hãy sử dụng router
  router(req, res);
};
