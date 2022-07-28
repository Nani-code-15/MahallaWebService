package com.itz.mahalla.use_cases.aaa_module.role_master;

import com.itz.mahalla.helpers.common.results.ReportDao;
import com.itz.mahalla.helpers.common.results.ResultDao;
import com.itz.mahalla.helpers.common.results.ResultsDao;
import com.itz.mahalla.helpers.common.token.ClaimsDao;
import com.itz.mahalla.helpers.common.token.ClaimsSet;
import com.itz.mahalla.helpers.configs.ModelMapperConfig;
import com.itz.mahalla.persistence.models.aaa_module.RoleMaster;
import com.itz.mahalla.persistence.models.aaa_module.RoleMasterPermission;
import com.itz.mahalla.use_cases.aaa_module.role_master.dao.RoleMasterDao;
import com.itz.mahalla.use_cases.aaa_module.role_master.dao.RoleMasterIdDao;
import com.itz.mahalla.use_cases.aaa_module.role_master_permission.RoleMasterPermissionService;
import com.itz.mahalla.use_cases.super_admin_module.page_master.PageMasterService;
import com.itz.mahalla.use_cases.super_admin_module.page_master.dao.PageMasterPojo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("${spring.base.path}")
public class RoleMasterController {
	@Autowired
	RoleMasterService roleMasterService;
	@Autowired
	ClaimsSet claimsSet;

	@Autowired
	PageMasterService pageMasterService;
	@Autowired
	RoleMasterPermissionService roleMasterPrmService;

	@PostMapping(value = "/role-master")
	@Transactional
	public ResponseEntity<?> roleMasterSet(HttpServletRequest request, @RequestBody RoleMasterDao getVal) throws Exception {
		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
		int roleMasterId;
		if (getVal.getName().equalsIgnoreCase("SuperAdmin") || getVal.getName().equalsIgnoreCase("Admin")) {
			throw new Exception("Can't create SuperAdmin or Admin, only SuperAdmin can create");
		}
		if (roleMasterService.getRoleMasterPk1(getVal.getName()) == null) {
			RoleMaster setVal = new RoleMaster();
			setVal.setName(getVal.getName());
			setVal.setNote(getVal.getNote());
			setVal.setIsActive(getVal.getIsActive());
			setVal.setCrBy(claimsDao.getUsr());
			roleMasterId = roleMasterService.setRoleMasterDetails(setVal);
		} else {
			throw new Exception("value already set");
		}
		List<PageMasterPojo> pageMasters = pageMasterService.getAllQryPageMaster();
		List<RoleMasterPermission> getValAll = new ArrayList<>();
		for (PageMasterPojo pageMaster : pageMasters) {
			RoleMasterPermission roleMasterPermission = new RoleMasterPermission();
			roleMasterPermission.setId(0);
			roleMasterPermission.setRoleMasterId(roleMasterId);
			roleMasterPermission.setPageMasterId(pageMaster.getId());
			roleMasterPermission.setDoCreate(false);
			roleMasterPermission.setDoUpdate(false);
			roleMasterPermission.setDoDelete(false);
			roleMasterPermission.setDoRead(true);
			getValAll.add(roleMasterPermission);
		}
		roleMasterPrmService.setData(getValAll);
		return new ResponseEntity<>(new ReportDao("Success", true), HttpStatus.OK);
	}

//	@PutMapping(value = "/role-master")
//	public ResponseEntity<?> roleMasterUpdate(HttpServletRequest request, @RequestBody RoleMasterDao getVal) throws Exception {
//
//		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
//		RoleMaster setVal = roleMasterService.getRoleMasterPk1(getVal.getName());
//		if (setVal != null) {
//			setVal.setUpBy(claimsDao.getUsr());
//			setVal.setIsActive(getVal.getIsActive());
//			setVal.setNote(getVal.getNote());
//			roleMasterService.setRoleMasterDetails(setVal);
//		} else {
//			throw new Exception("No value");
//		}
//		return new ResponseEntity<>(new ReportDao("Success", true), HttpStatus.OK);
//	}


//	@DeleteMapping(path = "/role-master/{roleMasterId}")
//	@Transactional
//	public ResponseEntity<?> roleMasterDelete(HttpServletRequest request
//			, @PathVariable(name = "roleMasterId") Integer roleMasterId) throws Exception {
//		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
//		roleMasterPrmService.delByRoleMstId(roleMasterId);
//		RoleMaster setVal = roleMasterService.getRoleMasterPk2(roleMasterId);
//		if (setVal == null) {
//			throw new Exception("No User Set");
//		} else {
//			roleMasterService.delRoleMaster(setVal);
//		}
//		return new ResponseEntity<>(new ReportDao("Success", true), HttpStatus.OK);
//	}

	@GetMapping(path = "/role-master/{roleName}")
	public ResponseEntity<?> userMasterGetAllByUserId(HttpServletRequest request
			, @PathVariable(name = "roleName") String roleName) throws Exception {
		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
		RoleMaster getVal = roleMasterService.getRoleMasterPk1(roleName);
		RoleMasterDao getValAll = new ModelMapperConfig().modelMapper().map(getVal, RoleMasterDao.class);
		return new ResponseEntity<>(new ResultDao(getValAll, "Success", true), HttpStatus.OK);
	}

	@GetMapping(value = "/role-master")
	public ResponseEntity<?> masterGetAll(HttpServletRequest request
			,@RequestParam(required=false,name="start",defaultValue= "1")int pageNumber
			,@RequestParam(required=false,name="limit",defaultValue= "25")int pageSize
			,@RequestParam(required=false,name="searchKey",defaultValue= "-1")String searchKey
			,@RequestParam(required=false,name="orderBy",defaultValue= "-1")String orderBy
			,@RequestParam(required=false,name="sortOrder",defaultValue= "-1")int sortOrder
			,@RequestParam(required=false,name="isPagination",defaultValue= "true")Boolean isPagination)  throws Exception {
		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
		long totalCount;
		List<RoleMaster> getVal;
		if (isPagination) {
			Page<RoleMaster> getAllWtPg = roleMasterService.getAllRoleMasterByPg(pageNumber - 1, pageSize - (pageNumber - 1), searchKey);
			getVal = getAllWtPg.getContent();
			totalCount = getAllWtPg.getTotalElements();
		} else {
			if (!claimsDao.getSub().equalsIgnoreCase("abdul")) {
				getVal = roleMasterService.getAllRoleMasterExceptSuperAdmin("SuperAdmin");
			} else {
				getVal = roleMasterService.getAllRoleMaster();
			}
			totalCount = getVal.size();
			pageNumber = 1;
			pageSize = Math.toIntExact(totalCount);
		}
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setAmbiguityIgnored(true);
		List<RoleMasterIdDao> getValAll = modelMapper.map(getVal,
				new TypeToken<List<RoleMasterIdDao>>() {
				}.getType());
		return new ResponseEntity<>(new ResultsDao(getValAll,pageNumber,pageSize,totalCount), HttpStatus.OK);
	}
}
