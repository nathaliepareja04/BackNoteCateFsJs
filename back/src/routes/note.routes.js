import noteCtrl from "../controllers/note.controller.js";
import { noteValid } from "../validation/noteValid.js";

export const noteRoutes = (fastify, opts, done) => {
  fastify.get("/", noteCtrl.getNotes);
  fastify.post("/",{schema:noteValid}, noteCtrl.saveNote);
  fastify.put("/:id", noteCtrl.updateNote);
  fastify.delete("/:id", noteCtrl.deleteNote);
  done();
};
