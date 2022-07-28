package com.itz.mahalla.persistence.models.super_admin_module;


import com.itz.mahalla.helpers.utils.JwtUtil;
import com.itz.mahalla.persistence.models.common.Auditable;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "FormData")
@Getter
@Setter
public class FormData extends Auditable<String> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id = 0;
    private String header;
    private Integer liNo;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String value;
    private String crBy = JwtUtil.usr;
    private String upBy;
    private Integer pageMasterId;
}