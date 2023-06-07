import express from 'express'
import { Client } from '../entities/Client'
import { Transcation,TranscationTypes } from "../entities/Transcation"

const router=express.Router()

router.post("/api/client/:clientId/transcation", async(req, res)=>{
   const {clientId}=req.params;
   const {type, amount}=req.body;

   const client = await Client.findOne({ where: { id: parseInt(clientId) } });

   if(!client){
    return res.json({msg:"client not found"})
   }
 
   const transcation=Transcation.create({
    amount,
    type, 
    client
   })

   await transcation.save()

   if(type===TranscationTypes.DEPOSIT){
    client.balance=client.balance+amount
   }else if(type===TranscationTypes.WITHDRAW){
    client.balance=client.balance-amount
   }

   await client.save()

   return res.json({msg:"transcation added"})

})

export{router as createTranscationRouter}