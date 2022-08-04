package com.itz.mahalla.persistence.models.family_module;
import com.itz.mahalla.helpers.utils.JwtUtil;
import com.itz.mahalla.persistence.models.common.Auditable;
import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;
import java.util.Date;

@Entity @Table(name="FamilyHeadDetails") 
@Getter @Setter
public class FamilyHeadDetails extends Auditable<String> {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id = 0;
	private String name;
	private String aliasName;
	private Date date;
	private String mobileNumber;
	private String address;
	private String sandhaAmount;
	private String photoUrl;
	private String crBy = JwtUtil.usr;
	private String upBy;
}