package com.itz.mahalla.use_cases.subscription_module.subscription_entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import java.util.List;
import com.itz.mahalla.helpers.utils.OffsetBasedPageRequest;
import com.itz.mahalla.persistence.models.subscription_module.SubscriptionEntry;

@Service
public class SubscriptionEntryService {

	@Autowired
	SubscriptionEntryRepository rep;

	public SubscriptionEntry getPk1(Integer pk0) throws Exception {
		try {
			return rep.findById(pk0);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public SubscriptionEntry getPk2(String pk0) throws Exception {
		try {
			return rep.findByName(pk0);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public Integer setData(SubscriptionEntry val) throws Exception {
		try {
			return rep.save(val).getId();
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public void setAllData(List<SubscriptionEntry> val) throws Exception {
		try {
			rep.saveAll(val);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public void delData(SubscriptionEntry val) throws Exception {
		try {
			rep.delete(val);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public void delAllData(List<SubscriptionEntry> val) throws Exception {
		try {
			rep.deleteAll(val);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public List<SubscriptionEntry> getAllData() throws Exception {
		try{
			return rep.findAll();
		}catch (Exception e){
			throw new Exception(e.getMessage());
		}
	}

	public Page<SubscriptionEntry> getAllDataByPg(int st, int lt,String sk) throws Exception {
		try {
			return rep.findByNameContainingIgnoreCase(sk,new OffsetBasedPageRequest(st, lt));
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}
}
