const Lead = require("../models/lead")

const getLeads = async(req,res)=>{
  try{
    const leads = await Lead.find();
    if(leads){
      res.status(201).json(leads);
    }
    }catch(err){
        res.status(400).json({message:err.message});
    }
}

const createLead = async(req,res)=>{
  const leadData = req.body;
  try{
    const lead = await Lead.create(leadData);
    if(lead){
      res.status(201).json(lead);
    }
    }catch(err){
        res.status(400).json({message:err.message});
    }
}


const deleteLead = async(req, res)=>{
   const id = req.params.id
   try{
    const lead = await Lead.findByIdAndDelete(id);
    if(lead){
      res.status(200).json({message: "Lead deleted successfully"});
      }
      }catch(err){
        res.status(400).json({message:err.message});
        }
}


module.exports = {createLead, deleteLead, getLeads}