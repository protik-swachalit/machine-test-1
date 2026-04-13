import Notes from "../Models/Notes.Models";
import UserModel from "../Models/User.Models.js";


const createNotes = async(req,res)=>{

    try {
        const {title,content} = req.body;
        const id = req.user;
        if(!id){
            return res.status(401).json({message:"Not Authorized", success:false});

        }
        if(!title || !content || !doneBy){
            return res.status(401).json({message:"Credentials are required", success:false});
        }

        const user = await UserModel.finById(id);

        if(!user){
            return res.status(401).json({message:"User not found by this id ", success:false});

        }

        const newNote = new Notes({
            title:title,
            content:content,
            doneBy:id
        })

        await newNote.save();


        return res.status(201).json({message:"Note created successfully", success:true, newNote});



        
    } catch (error) {
            return res.status(500).json({message:"Internal Server Error", success:false});
        
    }
}

const getAllNotes = async(req,res)=>{
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const search = req.query.search || "";
    const skip = (page-1)*limit;

    const notes = [];
    const totalDocs = 0;
    try {
        if(search){
        const query = {
            $or:[
                {title:{$regex:search, options:"i"}},
                {content:{$regex:search, options:"i"}}
            ]
        }


         notes = await Notes.find(query).limit(limit).skip(skip).sort({createdAt:-1});
         totalDocs = await Notes.countDocuments(query);

    }

    if(!notes || !notes.length){
            return res.status(401).json({message:"No Notes found in DB or none were created at this time", success:false});

    }

    return res.status(201).json({message:"Notes list found for this query", success:true,notes,pagination:{
        totalPages: Math.ceil(totalDocs/limit),
        currentPage: page,
        limit
    }});
        
    } catch (error) {
            return res.status(500).json({message:"Internal Server Error", success:false});
        
    }

}

const updateNotes = async(req,res)=>{

    const {noteId} = req.params;
   
    if(!noteId){
     return res.status(401).json({message:"Note Id is required", success:false});

    }
    try {
        const note = await Notes.findByIdAndUpdate(noteId,req.body,{new:true});
        return res.status(201).json({message:"Note Id is required", success:false});



        
    } catch (error) {
        
    }
}