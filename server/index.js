const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./db/db");
const app = express();
const NoteSchema = "./model/notes.models.js";

dotenv.config();

app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.post("/api/notes", async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Please send all data",
      });
    }

    await NoteSchema.create({
      title,
      content,
    });

    res.status(200).json({
      message: "Note Added Successfully",
    });
  } catch (error) {
    console.log("error ==> ", error);
    res.status(400).json({
      message: "Something went wrong",
    });
  }
});

app.get("/api/notes", async (req, res) => {
  try {
    const { keyword = "" } = req.query;

    const notes = await NoteSchema.find({
      title: keyword,
    });

    res.status(200).json({
      message: "Notes get",
      data: notes,
    });
  } catch (error) {
    console.log("Something went wrong", error);
    res.status(400).json({
      message: "Someting went wrong",
    });
  }
});

app.put("/api/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!id) {
      res.status(400).json({
        message: "Please send the id",
      });
    }

    const isNoteExe = await NoteSchema.findById(id);
    if (!isNoteExe) {
      res.status(404).json({
        message: "Note not found",
      });
    }

    if (title) {
      isNoteExe.title = title;
    }
    if (content) {
      isNoteExe.content = content;
    }

    await isNoteExe.save();

    res.status(200).json({
      message: "Note updated successfully",
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      message: "Something went wrong",
    });
  }
});

app.delete("/api/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({
        message: "Please provide the id",
      });
    }

    const deleteNote = await NoteSchema.delete({
      id: id,
    });

    res.status(200).json({
      message: "Note Deleted Successfully",
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      message: "something went wrong",
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
