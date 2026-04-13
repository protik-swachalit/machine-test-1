const mongoose = require("mongoose");

const noteShcema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamp: true,
  },
);

const NoteSchema = mongoose.model("Note", noteShcema);
export default NoteSchema;
