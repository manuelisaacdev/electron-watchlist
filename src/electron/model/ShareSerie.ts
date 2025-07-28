import { Entity, JoinColumn, ManyToOne } from "typeorm";

import Share from "./Share.js";
import Serie from "./Serie.js";

@Entity({name: 'shared_series'})
export default class ShareSerie extends Share {
    
    @ManyToOne(() => Serie)
    @JoinColumn({name: "serie_id"})
    serie!: Serie;

};
