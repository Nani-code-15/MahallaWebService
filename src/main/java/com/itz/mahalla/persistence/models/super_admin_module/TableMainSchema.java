package com.itz.mahalla.persistence.models.super_admin_module;

import com.itz.mahalla.helpers.utils.JwtUtil;
import com.itz.mahalla.persistence.models.common.Auditable;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "TableMainSchema")
@Getter
@Setter
public class TableMainSchema extends Auditable<String> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id = 0;
    private String field;
    private String header;
    private String type;
    private String width;
    private Boolean isActive;
    private Integer sortBy;
    private String crBy = JwtUtil.usr;
    private String upBy;
    private Integer pageMasterId;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String options;

}