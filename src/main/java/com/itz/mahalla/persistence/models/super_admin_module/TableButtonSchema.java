package com.itz.mahalla.persistence.models.super_admin_module;

import com.itz.mahalla.helpers.utils.JwtUtil;
import com.itz.mahalla.persistence.models.common.Auditable;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "TableButtonSchema")
@Getter
@Setter
public class TableButtonSchema extends Auditable<String> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id = 0;
    private String icon;
    private String toolTip;
    private String action;
    private Boolean isActive;
    private String crBy = JwtUtil.usr;
    private String upBy;
    private Integer pageMasterId;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String options;
}