package com.itz.mahalla.use_cases.family_module.family_head_details;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import java.util.List;
import com.itz.mahalla.helpers.utils.OffsetBasedPageRequest;
import com.itz.mahalla.persistence.models.family_module.FamilyHeadDetails;

@Service
public class FamilyHeadDetailsService {

	@Autowired
	FamilyHeadDetailsRepository rep;

	public FamilyHeadDetails getPk1(Integer pk0) throws Exception {
		try {
			return rep.findById(pk0);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public FamilyHeadDetails getPk2(String pk0) throws Exception {
		try {
			return rep.findByName(pk0);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public Integer setData(FamilyHeadDetails val) throws Exception {
		try {
			return rep.save(val).getId();
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public void setAllData(List<FamilyHeadDetails> val) throws Exception {
		try {
			rep.saveAll(val);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public void delData(FamilyHeadDetails val) throws Exception {
		try {
			rep.delete(val);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public void delAllData(List<FamilyHeadDetails> val) throws Exception {
		try {
			rep.deleteAll(val);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public List<FamilyHeadDetails> getAllData() throws Exception {
		try{
			return rep.findAll();
		}catch (Exception e){
			throw new Exception(e.getMessage());
		}
	}

	public Page<FamilyHeadDetails> getAllDataByPg(int st, int lt,String sk) throws Exception {
		try {
			return rep.findByNameContainingIgnoreCase(sk,new OffsetBasedPageRequest(st, lt));
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}
}
