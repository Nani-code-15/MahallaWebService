package com.itz.mahalla.use_cases.subscription_module.subscription_entry.dao;

import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.Size;
import java.util.Date;

@Getter @Setter
public class SubscriptionEntryDao {
	@Size(max=11)
	private Integer id;
	@Size(max=11)
	private Integer familyId;
	@Size(max=11)
	private Integer receiptId;
	private String name;
	@Size(max=255)
	private String address;
	@Size(max=255)
	private String mobileNumber;
	private Date date;
	@Size(max=255)
	private String sandhaAmount;
	private String collectorName;
	@Size(max=255)
	private String note;
}