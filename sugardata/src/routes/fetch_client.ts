import express from "express"
const createQueryBuilder=require('typeorm')
import { Client } from "../entities/Client"

const router=express.Router()

router.get('/api/client', async(req, res)=>{
    const client=await createQueryBuilder(
        'client'
    )
    .select('client.first_name')
    .addSelect('client.last_name')
    .from(Client, 'client')
    .leftJoinAndSelect(
        'client.transcations','transcations'
    )
    .where('client.balance>=:balance', {balance:400000})
    .getOne()
    return res.json(client)
})

export{router as fetchClientRouter}