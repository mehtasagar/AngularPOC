import { LegModal } from '../modal/legModal';

export interface LegsModal {    
    //legs: LegModal[];
    dispatch_leg_id?: number;
    rte_cd?: string;
    eff_dt?: Date;
    expr_dt?: Date;
    leg_tm_nbr?: number;
    leg_mile_nbr?: number;
    hzmt_flg?: string;
    brk_tm_nbr?: number;
    avg_mph_nbr?: number;
    leg_desc?: string;
    last_updt_usr_nm?: string;
    last_updt_tmstp?: Date;
    last_updt_app_nm?: string;
    mile_src_txt?: string;
    comm_txt?: string;
    activate_tmstp?: Date;
    actual_expr_tmstp?: Date;
    error_type_cd?: number;
    orig_ctr_cd: string;
    dest_ctr_cd?: string;
}