import { Entity, Column, PrimaryGeneratedColumn,BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import { Client } from "./Client";

export enum TranscationTypes{
    DEPOSIT='deposit',
    WITHDRAW='withdraw'
}

@Entity('transcation')
export class Transcation  extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;
    @Column({
        type:"enum",
        enum:TranscationTypes
    })
    type:string;

    @Column({
        type:'numeric'
    })
    amount:number
 
    @ManyToOne(
        ()=>Client,
        client=>client.transcations,
        {onDelete:"CASCADE"}
    )
    
    @JoinColumn({
        name:'client_id'
    })
    client:Client
}
