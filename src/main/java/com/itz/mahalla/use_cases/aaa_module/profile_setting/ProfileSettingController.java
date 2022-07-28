package com.itz.mahalla.use_cases.aaa_module.profile_setting;

import com.itz.mahalla.helpers.common.results.ResultsDao;
import com.itz.mahalla.use_cases.aaa_module.profile_setting.dao.ProfileSettingDaos;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("${spring.base.path}")
public class ProfileSettingController {

//	@Autowired
//	ProfileSettingService ser;
//	@Autowired
//	ClaimsSet claimsSet;


//	@PostMapping(value = "/profile-setting")
//	public ResponseEntity<?> masterSet(HttpServletRequest request, @ModelAttribute ProfileSettingCstDao getVal) throws Exception {
//		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
//		ser.setData(new ModelMapper().map(getVal, ProfileSetting.class));
//		return new ResponseEntity<>(new ReportDao("Added Successfully", true), HttpStatus.OK);
//	}
//
//	@PutMapping(value = "/profile-setting")
//	public ResponseEntity<?> masterUpdate(HttpServletRequest request, @ModelAttribute ProfileSettingCstDao getVal) throws Exception {
//		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
//		ProfileSetting setVal = ser.getPk1(getVal.getId());
//		String fileName;
//		if (setVal != null) {
//			setVal.setAddressOne(getVal.getAddressOne());
//			setVal.setAddressTwo(getVal.getAddressTwo());
//			setVal.setCompanyName(getVal.getCompanyName());
//			setVal.setEmail(getVal.getEmail());
//			setVal.setPhoneNumber(getVal.getPhoneNumber());
//			ser.setData(setVal);
//		} else {
//			throw new Exception("Value Not Found To Update");
//		}
//		return new ResponseEntity<>(new ReportDao("Updated Successfully", true), HttpStatus.OK);
//	}
//
//	@DeleteMapping(value = "/profile-setting/{id}")
//	public ResponseEntity<?> masterDelete(HttpServletRequest request
//			, @PathVariable(name = "id") Integer id) throws Exception {
//		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
//		ProfileSetting getVal = ser.getPk1(id);
//		if (getVal == null) {
//			throw new Exception(id + " Not Found To Delete");
//		} else {
//			ser.delData(getVal);
//		}
//		return new ResponseEntity<>(new ReportDao("Deleted Successfully", true), HttpStatus.OK);
//	}
//
//	@GetMapping(value = "/profile-setting/{id}")
//	public ResponseEntity<?> masterGet(HttpServletRequest request
//			, @PathVariable(name = "id") Integer id) throws Exception {
//		ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
//		ProfileSetting getVal = ser.getPk1(id);
//		if (getVal == null)
//			throw new Exception(id + " Not Found To Get");
//		return new ResponseEntity<>(new ResultDao(new ModelMapper().map(getVal, ProfileSettingDaos.class), "Fetched Successfully", true), HttpStatus.OK);
//	}

	@GetMapping(value = "/auth/profile-setting")
	public ResponseEntity<?> getProfileData(HttpServletRequest request){
		//ClaimsDao claimsDao = claimsSet.getClaimsDetailsAfterSet(request.getHeader("Authorization"));
		ProfileSettingDaos profileSettingDaos = new ProfileSettingDaos();
		profileSettingDaos.setEmail("itzabdul@gmail.com");
		profileSettingDaos.setAddressOne("addressOne");
		profileSettingDaos.setAddressTwo("addressTwo");
		profileSettingDaos.setCompanyName("company name");
		profileSettingDaos.setPhoneNumber("4534534");
		profileSettingDaos.setLogoLargeUrl("large url");
		profileSettingDaos.setLogoSmallUrl("Small url");
		return new ResponseEntity<>(new ResultsDao(profileSettingDaos, 1, Math.toIntExact(1), 1L), HttpStatus.OK);
	}
}
