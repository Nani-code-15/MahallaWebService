package com.itz.mahalla.use_cases.family_module.family_member_details;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import java.util.List;
import com.itz.mahalla.helpers.utils.OffsetBasedPageRequest;
import com.itz.mahalla.persistence.models.family_module.FamilyMemberDetails;

@Service
public class FamilyMemberDetailsService {

	@Autowired
	FamilyMemberDetailsRepository rep;

	public FamilyMemberDetails getPk1(Integer pk0) throws Exception {
		try {
			return rep.findById(pk0);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public FamilyMemberDetails getPk2(String pk0) throws Exception {
		try {
			return rep.findByName(pk0);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public Integer setData(FamilyMemberDetails val) throws Exception {
		try {
			return rep.save(val).getId();
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public void setAllData(List<FamilyMemberDetails> val) throws Exception {
		try {
			rep.saveAll(val);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public void delData(FamilyMemberDetails val) throws Exception {
		try {
			rep.delete(val);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public void delAllData(List<FamilyMemberDetails> val) throws Exception {
		try {
			rep.deleteAll(val);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	public List<FamilyMemberDetails> getAllData() throws Exception {
		try{
			return rep.findAll();
		}catch (Exception e){
			throw new Exception(e.getMessage());
		}
	}

	public Page<FamilyMemberDetails> getAllDataByPg(int st, int lt,String sk) throws Exception {
		try {
			return rep.findByNameContainingIgnoreCase(sk,new OffsetBasedPageRequest(st, lt));
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}
}
