package com.itz.mahalla.persistence.models.aaa_module;


import com.itz.mahalla.helpers.utils.JwtUtil;
import com.itz.mahalla.persistence.models.common.Auditable;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "RoleMasterPermission")
@Getter
@Setter
public class RoleMasterPermission extends Auditable<String> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Integer id = 0;
    @Column(name = "DoCreate")
    private Boolean doCreate;
    @Column(name = "DoUpdate")
    private Boolean doUpdate;
    @Column(name = "DoDelete")
    private Boolean doDelete;
    @Column(name = "DoRead")
    private Boolean doRead;
    @Column(name = "CrBy")
    private String crBy = JwtUtil.usr;
    @Column(name = "UpBy")
    private String upBy;
    @Column(name = "PageMasterId")
    private Integer pageMasterId;

    @Column(name = "RoleMasterId")
    private Integer roleMasterId;

//	@JsonBackReference
//	@OneToMany(fetch = FetchType.LAZY)
//	@JoinColumn(name="RoleMasterId",nullable = false)
//	private RoleMaster roleMaster;
}