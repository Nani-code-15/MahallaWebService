package com.itz.mahalla.use_cases.family_module.family_head_details;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import com.itz.mahalla.helpers.common.results.*;
import com.itz.mahalla.helpers.common.token.*;
import com.itz.mahalla.use_cases.family_module.family_head_details.dao.*;
import com.itz.mahalla.persistence.models.family_module.FamilyHeadDetails;

@RestController
@RequestMapping("${spring.base.path}")
public class FamilyHeadDetailsController {

	@Autowired
	FamilyHeadDetailsService ser;
	@Autowired
	ClaimsSet claimsSet;

	@PostMapping(value ="/family-head-details")
	public ResponseEntity<?> masterSet(HttpServletRequest request,@RequestBody FamilyHeadDetailsDao getVal) throws Exception {
		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
		if(ser.getPk2(getVal.getName())!=null)
			throw new Exception(getVal.getName()+" Value Already Set");
		ser.setData(new ModelMapper().map(getVal,FamilyHeadDetails.class));
		return new ResponseEntity<>(new ReportDao("Added Successfully",true), HttpStatus.OK);
	}

	@PostMapping(value ="/family-head-details/add-all")
	@Transactional
	public ResponseEntity<?> masterSetAddAll(HttpServletRequest request, @RequestBody List<FamilyHeadDetailsDao> getVal) throws Exception {
		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
		ser.setAllData(new ModelMapper().map(getVal, new TypeToken<List<FamilyHeadDetails>>(){}.getType()));
		return new ResponseEntity<>(new ReportDao("Imported Successfully", true), HttpStatus.OK);
	}

	@PostMapping(value ="/family-head-details/delete-all")
	public ResponseEntity<?> masterSetDeleteAll(HttpServletRequest request, @RequestBody List<FamilyHeadDetailsDao> getVal) throws Exception {
		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
		ser.delAllData(new ModelMapper().map(getVal, new TypeToken<List<FamilyHeadDetails>>(){}.getType()));
		return new ResponseEntity<>(new ReportDao("Deleted Successfully", true), HttpStatus.OK);
	}

	@PutMapping(value ="/family-head-details")
	public ResponseEntity<?> masterUpdate(HttpServletRequest request,@RequestBody FamilyHeadDetailsDao getVal) throws Exception {
		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
		FamilyHeadDetails setVal = ser.getPk1(getVal.getId());
		if(setVal!=null){
			if(!setVal.getName().equals(getVal.getName()) && ser.getPk2(getVal.getName())!=null)
				throw new Exception(getVal.getName()+" Value Already Set");
			setVal.setName(getVal.getName());
			ser.setData(setVal);
		}else{
			throw new Exception("Value Not Found To Update");
		}
		return new ResponseEntity<>(new ReportDao("Updated Successfully",true), HttpStatus.OK);
	}

	@DeleteMapping(value ="/family-head-details/{id}")
	public ResponseEntity<?> masterDelete(HttpServletRequest request
			,@PathVariable(name="id") Integer id) throws Exception {
		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
		FamilyHeadDetails getVal = ser.getPk1(id);
		if(getVal == null){
			throw new Exception(id+" Not Found To Delete");
		}else{
			ser.delData(getVal);
		}
		return new ResponseEntity<>(new ReportDao("Deleted Successfully",true), HttpStatus.OK);
	}

	@GetMapping(value ="/family-head-details/{id}")
	public ResponseEntity<?> masterGet(HttpServletRequest request
			,@PathVariable(name="id") Integer id) throws Exception {
		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
		FamilyHeadDetails getVal = ser.getPk1(id);
		if(getVal == null)
			throw new Exception(id+" Not Found To Get");
		return new ResponseEntity<>(new ResultDao( new ModelMapper().map(getVal, FamilyHeadDetailsDao.class),"Fetched Successfully",true), HttpStatus.OK);
	}

	@GetMapping(value ="/family-head-details")
	public ResponseEntity<?> masterGetAll(HttpServletRequest request
			,@RequestParam(required=false,name="start",defaultValue= "1")int pageNumber
			,@RequestParam(required=false,name="limit",defaultValue= "25")int pageSize
			,@RequestParam(required=false,name="searchKey",defaultValue= "")String searchKey
			,@RequestParam(required=false,name="orderBy",defaultValue= "-1")String orderBy
			,@RequestParam(required=false,name="sortOrder",defaultValue= "-1")int sortOrder
			,@RequestParam(required=false,name="isPagination",defaultValue= "true")Boolean isPagination) throws Exception {
		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
		List<FamilyHeadDetails> getVal;
		long totalCount;
		if(isPagination){
			Page<FamilyHeadDetails> getAllWtPg = ser.getAllDataByPg(pageNumber-1,pageSize-(pageNumber-1),searchKey);
			getVal = getAllWtPg.getContent();
			totalCount = getAllWtPg.getTotalElements();
			return new ResponseEntity<>(new ResultsDao(new ModelMapper().map(getVal,
					new TypeToken<List<FamilyHeadDetailsDao>>() {
					}.getType()),pageNumber,pageSize,totalCount), HttpStatus.OK);
		}else{
			getVal = ser.getAllData();
			totalCount = getVal.size();
			pageNumber = 1;
			pageSize= Math.toIntExact(totalCount);
			return new ResponseEntity<>(new ResultsDao(new ModelMapper().map(getVal,
					new TypeToken<List<FamilyHeadDetailsDao>>() {
					}.getType()),pageNumber,pageSize,totalCount), HttpStatus.OK);
		}
	}
}
