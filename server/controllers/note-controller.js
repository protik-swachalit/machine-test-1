const Note= require('../models/note');


//view all notes
const getAllNotes =async(req,res)=>{
    try{
const allNotes= await Note.find({});
if(allNotes?.length>0){
    res.status(200).json({
        success:true,
        message:"Notes fetched successfully",
        data:allNotes
    })
    }
else{
   res.status(404).json({
        success:false,
        message:"No notes found",
    
    })
}
}
    catch(e){
console.log(e);
res.status(500).json({
success:false,
message:"Error fetching notes,something went wrong"
})
    }
}


//create new notes

const addNewNote=async(req,res)=>{
try{
    const {title,content}=req.body;
    const newNote= await Note.create({title,content});
    res.status(201).json({
        success:true,
        message:"Note created successfully",
        data:newNote
    })
}
catch(e){
    res.status(500).json({
        success:false,
        message:"Error creating note,something went wrong"
    })
}}

module.exports={getAllNotes, addNewNote}