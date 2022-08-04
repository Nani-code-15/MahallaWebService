package com.itz.mahalla.persistence.models.family_module;
import com.itz.mahalla.helpers.utils.JwtUtil;
import com.itz.mahalla.persistence.models.common.Auditable;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.Date;

@Entity @Table(name="FamilyMemberDetails") 
@Getter @Setter
public class FamilyMemberDetails extends Auditable<String> {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id = 0;
	private String name;
	private String age;
	private String gender;
	private String address;
	private String mobileNumber;
	private String photoUrl;
	private String details;
	private Date date;
	private String additional;
	private String crBy = JwtUtil.usr;
	private String upBy;
	private Integer familyHeadDetailsId;
}