package com.itz.mahalla.use_cases.aaa_module.role_master_permission;

import com.itz.mahalla.helpers.common.results.ReportDao;
import com.itz.mahalla.helpers.common.results.ResultDao;
import com.itz.mahalla.helpers.common.token.ClaimsDao;
import com.itz.mahalla.helpers.common.token.ClaimsSet;
import com.itz.mahalla.persistence.models.aaa_module.RoleMasterPermission;
import com.itz.mahalla.use_cases.aaa_module.role_master_permission.dao.RoleMasterPrmIdDao;
import com.itz.mahalla.use_cases.aaa_module.role_master_permission.dao.RoleMasterPrmIdPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("${spring.base.path}")
public class RoleMasterPermissionController {
	@Autowired
	RoleMasterPermissionService roleMasterPrmService;
	@Autowired
	ClaimsSet claimsSet;

	// update when prm set
	@PutMapping(value = "/role-master-prm")
	public ResponseEntity<?> masterSet(HttpServletRequest request, @RequestBody List<RoleMasterPrmIdDao> getVal) throws Exception {

		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
		List<RoleMasterPermission> getValAll = roleMasterPrmService.getAllByRol(Integer.parseInt(claimsDao.getRol()));
		for(int i=0;i<getValAll.size();i++){
			getValAll.get(i).setDoCreate(getVal.get(i).getDoCreate());
			getValAll.get(i).setDoUpdate(getVal.get(i).getDoUpdate());
			getValAll.get(i).setDoDelete(getVal.get(i).getDoDelete());
			getValAll.get(i).setDoRead(getVal.get(i).getDoRead());
		}
		roleMasterPrmService.setData(getValAll);
		return new ResponseEntity<>(new ReportDao("Success", true), HttpStatus.OK);
	}


	@GetMapping(value = "/role-master-prm")
	public ResponseEntity<?> masterGetAll(HttpServletRequest request) throws Exception {
		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
		int roleMasterId = Integer.parseInt(claimsDao.getRol());
		List<RoleMasterPrmIdPojo> roleMasterPermission = roleMasterPrmService.getAllByRolWtPrt(roleMasterId);

		return new ResponseEntity<>(new ResultDao(roleMasterPermission, "Success", true), HttpStatus.OK);
	}

	@GetMapping(path = "/role-master-prm/{roleMasterId}")
	public ResponseEntity<?> masterGetAllByRole(HttpServletRequest request
			, @PathVariable(name = "roleMasterId") Integer roleMasterId) throws Exception {
		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
		if (!claimsDao.getSub().equalsIgnoreCase("abdul")) {
			//getVal = roleMasterService.getAllRoleMasterExceptSuperAdmin("SuperAdmin");
			return new ResponseEntity<>(new ResultDao(roleMasterPrmService.getAllByRolWtPrtExceptSuperAdmin(roleMasterId)
					, "Success", true), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(new ResultDao(roleMasterPrmService.getAllByRolWtPrt(roleMasterId)
					, "Success", true), HttpStatus.OK);
		}

	}

	//Each page load a 2
	@GetMapping(value = "/role-master-prm/read-only")
	public ResponseEntity<?> masterGetReadOnly(HttpServletRequest request) throws Exception {
		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
		if (!claimsDao.getSub().equalsIgnoreCase("abdul")) {
			//getVal = roleMasterService.getAllRoleMasterExceptSuperAdmin("SuperAdmin");
			return new ResponseEntity<>(new ResultDao(roleMasterPrmService.getByReadOnlyExceptSuperAdmin(Integer.valueOf(claimsDao.getRol()))
					, "Success", true), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(new ResultDao(roleMasterPrmService.getByReadOnly(Integer.valueOf(claimsDao.getRol()))
					, "Success", true), HttpStatus.OK);
		}


	}

}
