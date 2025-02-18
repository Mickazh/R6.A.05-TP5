import { db } from "./db";

const livreSchema = new db.Schema({
  titre: {
    type: String,
    required: true,
  },
  auteur: {
    type: {
      nom: String,
    },
    required: true,
  },
  description: { type: String },
  format: {
    type: String,
    enum: ["poche", "manga", "audio"],
    default: "poche",
    required: false,
  },
});

export const Livre = db.model("livre", livreSchema);