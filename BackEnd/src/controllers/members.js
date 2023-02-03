const membersSchema = require("../models/members");

const getMembers = async (req, res) => {
  const { id } = req.params;

  const obj = id ? { _id: id } : null;

  const member = await membersSchema.find(obj);

  res.send(member);
};

const createMembers = async (req, res) => {
  const { name, position, picture } = req.body;

  const member = new membersSchema({
    name,
    position,
    picture,
  });

  try {
    const response = await member.save();

    res.send({
      message: "Membro adicionado com sucesso",
    });
    res.status(201);
  } catch (error) {
    res.status(400);
  }
};

const updateMembers = async (req, res) => {
  const { id } = req.params;

  console.log(req.params)

  try {
    const member = await membersSchema.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );

    console.log( 'member', member);

    res.send({
      message: "Membro atualizado com sucesso",
    });
    res.status(200);
  } catch (error) {
    res.status(400);
  }
};

const deleteMembers = async (req, res) => {
  const { id } = req.params;

  try {
    const removeOrcamento = await membersSchema.deleteOne({ _id: id });
    const message =
      removeOrcamento.deletedCount > 0
        ? "Membro removido com sucesso"
        : "Error";

    res.send({
      message,
    });
  } catch (error) {
    res.status(400);
  }
};

module.exports = { getMembers, createMembers, updateMembers, deleteMembers };
