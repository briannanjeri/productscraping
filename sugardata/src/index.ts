const { createConnection }=require ("typeorm");
import express from "express";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transcation } from "./entities/Transcation";
import { createClientRouter } from "./routes/create_client";
import { createBankerRouter } from "./routes/create_banker";
import { createTranscationRouter } from "./routes/create_transcations";
// import { BankertoClientRouter } from "./routes/banker_to_client";
import { deleteClientRouter } from "./routes/delete_client";
import { fetchClientRouter } from "./routes/fetch_client";

const app=express()

const main=async()=>{
  try{
    await createConnection({
        type:"postgres",
        host:"localhost",
        port:5432,
        username:"brian",
        password:"brian",
        database:"shoes",
        entities:[Client, Banker,Transcation],
        synchronize:true,
      
  })
  console.log('connected to postgres')
  app.listen(8080, ()=>console.log("Now running on port 8080"))
  app.use(express.json())
  app.use(createClientRouter)
  app.use(createBankerRouter)
  app.use(createTranscationRouter)
  // app.use(BankertoClientRouter)
  app.use(deleteClientRouter)
  app.use(fetchClientRouter)

}catch(error){
  console.error("unable to connect to postgres", error)
}
} 

main()