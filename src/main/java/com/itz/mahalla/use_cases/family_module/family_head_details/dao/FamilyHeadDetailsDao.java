package com.itz.mahalla.use_cases.family_module.family_head_details.dao;

import lombok.Getter;
import lombok.Setter;


import javax.validation.constraints.Size;
import java.util.Date;

@Getter @Setter
public class FamilyHeadDetailsDao {
	@Size(max=11)
	private Integer id;
	@Size(max=60)
	private String name;
	@Size(max=60)
	private String aliasName;
	private Date date;
	@Size(max=20)
	private String mobileNumber;
	@Size(max=255)
	private String address;
	@Size(max=255)
	private String sandhaAmount;
	@Size(max=255)
	private String photoUrl;
}