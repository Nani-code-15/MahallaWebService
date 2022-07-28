package com.itz.mahalla.use_cases.super_admin_module.page_master.dao;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RolePrmDao {
    private Integer id ;
    private Boolean create;
    private Boolean update;
    private Boolean delete;
    private Boolean read;
    private Integer pageMasterId;
    private Integer roleMasterId;
}
