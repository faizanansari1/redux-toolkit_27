import { createServer } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = new createServer({
    environment,
    routes() {
      this.get("/api/rendernumber", () => {
        return Math.ceil(Math.random() * 10);
      });
    },
  });
  return server;
}
