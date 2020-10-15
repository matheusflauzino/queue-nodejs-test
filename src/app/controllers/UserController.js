import Queue from "../lib/Queue";
export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = { name, email, password };

    //envio email
    //adicionar job de email
    await Queue.add({ user });

    return res.json(user);
  },
};
