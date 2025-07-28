import { Entity, JoinColumn, ManyToOne } from "typeorm";

import Share from "./Share.js";
import Dorama from "./Dorama.js";

@Entity({name: 'shared_doramas'})
export default class ShareDorama extends Share {
    
    @ManyToOne(() => Dorama)
    @JoinColumn({name: "dorama_id"})
    dorama!: Dorama;

};
