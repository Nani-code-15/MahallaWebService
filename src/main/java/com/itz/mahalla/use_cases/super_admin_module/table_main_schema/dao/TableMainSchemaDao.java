package com.itz.mahalla.use_cases.super_admin_module.table_main_schema.dao;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TableMainSchemaDao {
    private String field;
    private String header;
    private Boolean isActive;
    private Integer sortBy;
    private Integer pageMasterId;
    private String type;
    private String width;
    private String options;
}