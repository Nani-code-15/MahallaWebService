package com.itz.mahalla.persistence.models.subscription_module;
import com.itz.mahalla.helpers.utils.JwtUtil;
import com.itz.mahalla.persistence.models.common.Auditable;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.Date;

@Entity @Table(name="SubscriptionEntry") 
@Getter @Setter
public class SubscriptionEntry extends Auditable<String> {
	@Id
	private Integer id = 0;
	private Integer familyId;
	private Integer receiptId;
	private String name;
	private String address;
	private String mobileNumber;
	private Date date;
	private String sandhaAmount;
	private String collectorName;
	private String note;
	private String crBy = JwtUtil.usr;
	private String upBy;
}