import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, JoinColumn} from "typeorm";
import { Client } from "./Client";
import { Person } from "./utils/Person";

@Entity('banker')
export class Banker extends Person{

    @Column({
        unique:true,
        length:10
    })
    employee_number:string

    @ManyToMany(
        ()=>Client,
        {cascade:true}
    )
    @JoinTable( {
        name:"bankers_client",
        joinColumn: {
            name:"banker",
            referencedColumnName:'id'
        },
        inverseJoinColumn:{
            name:"client",
            referencedColumnName:'id'
        }
    })
    client:Client[]

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date
}