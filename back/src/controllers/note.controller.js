import { response } from "../helpers/Response.js";
import { noteModel } from "../models/note.model.js";

const noteCtrl = {};

noteCtrl.saveNote = async (req, reply) => {
  try {
    const data = await noteModel.create(req.body);
    response(reply, 201, true, data, "note creado");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

noteCtrl.getNotes = async (req, reply) => {
  try {
    const data = await noteModel.find();
    response(reply, 200, true, data, "lista de notes");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

noteCtrl.deleteNote = async (req, reply) => {
  try {
    const { id } = req.params;
    const data = await noteModel.findById(id);
    if (!data) {
      return response(reply, 404, false, "", "note no encontrado");
    }
    await data.deleteOne();
    response(reply, 200, true, data, "note eliminado");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

noteCtrl.updateNote = async (req, reply) => {
  try {
    const { id } = req.params;
    const data = await noteModel.findById(id);
    if (!data) {
      return response(reply, 404, false, "", "note no encontrado");
    }
    await data.updateOne(req.body);
    response(reply, 200, true, data, "note actualizado");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

export default noteCtrl;
