import jsonServer from 'json-server'; // Nếu dùng ES module
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Xuất hàm server để Vercel có thể sử dụng
export default (req, res) => {
  router(req, res);
};
