package com.itz.mahalla.use_cases.family_module.family_member_details.dao;

import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.Size;
import java.util.Date;

@Getter @Setter
public class FamilyMemberDetailsDao {
	@Size(max=11)
	private Integer id;
	@Size(max=60)
	private String name;
	@Size(max=255)
	private String age;
	@Size(max=255)
	private String gender;
	@Size(max=255)
	private String address;
	@Size(max=255)
	private String mobileNumber;
	@Size(max=255)
	private String photoUrl;
	@Size(max=255)
	private String details;
	private Date date;
	@Size(max=255)
	private String additional;
	@Size(max=11)
	private Integer familyHeadDetailsId;
}