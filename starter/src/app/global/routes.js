async function routes(fastify) {
  fastify.get("/", async (req, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ health: "Cool" });
  });
}

export default routes;
