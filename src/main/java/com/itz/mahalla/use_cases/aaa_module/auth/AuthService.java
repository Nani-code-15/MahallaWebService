package com.itz.mahalla.use_cases.aaa_module.auth;


import com.itz.mahalla.helpers.common.constant.UseCasesConstant;
import com.itz.mahalla.helpers.common.token.ClaimsSet;
import com.itz.mahalla.helpers.utils.JwtUtil;
import com.itz.mahalla.persistence.models.aaa_module.UserMaster;
import com.itz.mahalla.use_cases.aaa_module.auth.dao.AuthRequestDao;
import com.itz.mahalla.use_cases.aaa_module.auth.dao.AuthTokensDao;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;


@Service
public class AuthService implements UserDetailsService {

    @Autowired
    AuthRepository authRepository;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtTokenUtil;
    @Value("${spring.crypto.key-path}")
    private String pathName;

    public AuthService() {
    }

    //used in Jwtrequestfilter
    @Override
    public UserDetails loadUserByUsername(String usrId) throws UsernameNotFoundException {
        UserMaster userInfo = authRepository.findByUserId(usrId);
//        UserMaster userInfo = authRepository.findByUserIdAndIsActive(usrId,true);
        if (userInfo == null) {
            throw new BadCredentialsException("Username wrong");
        }
//        else if (!userInfo.getIsActive()) {
//            OtpCheck otpCheck = otpCheckRepository.findByUserId(userInfo.getUserId());
//            if (otpCheck == null) {
//                throw new BadCredentialsException("Account has been suspended");
//            } else if (otpCheck.getExpiryDate() < System.currentTimeMillis()) {
//                otpCheckRepository.delete(otpCheck);
//                //authRepository.delete(userInfo);
//                throw new BadCredentialsException("Otp Expired ,Please create account once again");
//            } else {
//                throw new BadCredentialsException("Activate your account by OTP which send your mail Id");
//            }
//        }
        return new User(userInfo.getUserId(), userInfo.getPassword(),
                new ArrayList<>());
    }

    public AuthTokensDao createNewTokens(AuthRequestDao authenticationRequest) {
        UserMaster userInfo;
        String userId = authenticationRequest.getUserId();
        String password = authenticationRequest.getPassword();
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    userId, password));
            userInfo = authRepository.findByUserIdAndIsActive(userId, true);
            Map<String, Object> claims = ClaimsSet.setClaimsDetails(userInfo);
            String accessToken = jwtTokenUtil.generateAccessToken(userInfo, claims);
            String refreshToken = jwtTokenUtil.generateRefreshToken(userInfo.getUserId(), claims);
            return new AuthTokensDao(accessToken, refreshToken, true);
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Password Wrong");
        } catch (Exception e) {
            throw new BadCredentialsException("InValid Credential");
        }
    }

    public AuthTokensDao createWebNewTokens(AuthRequestDao authenticationRequest) {
        UserMaster userInfo;
        String userId = authenticationRequest.getUserId();
        String password = authenticationRequest.getPassword();
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    userId, password));
            userInfo = authRepository.findByUserIdAndIsActive(userId, true);
            if (userInfo.getDesignation().equalsIgnoreCase(UseCasesConstant.roleMasterName[4]) ||
                    userInfo.getDesignation().equalsIgnoreCase(UseCasesConstant.roleMasterName[5])) {
                throw new Exception();
            }
            Map<String, Object> claims = ClaimsSet.setClaimsDetails(userInfo);
            String accessToken = jwtTokenUtil.generateAccessToken(userInfo, claims);
            String refreshToken = jwtTokenUtil.generateRefreshToken(userInfo.getUserId(), claims);
            return new AuthTokensDao(accessToken, refreshToken, true);
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Password Wrong");
        } catch (Exception e) {
            throw new BadCredentialsException("InValid Credential");
        }
    }

    public Map<String, Object> createAccessToken(AuthTokensDao authTokens) throws Exception {
        Map<String, Object> accessToken = new HashMap<>();
        try {
            String userName = jwtTokenUtil.getUsernameFromToken(authTokens.getRefreshToken());
            final Claims claims = jwtTokenUtil.getAllClaimsFromToken(authTokens.getRefreshToken());
            accessToken.put("accessToken", jwtTokenUtil.generateAccessToken(userName, claims));
            accessToken.put("status", true);
        } catch (ExpiredJwtException e) {
            throw new Exception("Token Expired ,Please Re-Login");
        } catch (Exception e) {
            throw new Exception("Invalid Token");
        }
        return accessToken;
    }

    public Map<String, Object> createWebAccessToken(AuthTokensDao authTokens) throws Exception {
        Map<String, Object> accessToken = new HashMap<>();
        try {
            String userName = jwtTokenUtil.getUsernameFromToken(authTokens.getRefreshToken());
            final Claims claims = jwtTokenUtil.getAllClaimsFromToken(authTokens.getRefreshToken());
            accessToken.put("accessToken", jwtTokenUtil.generateAccessToken(userName, claims));
            accessToken.put("status", true);
        } catch (ExpiredJwtException e) {
            throw new Exception("Token Expired ,Please Re-Login");
        } catch (Exception e) {
            throw new Exception("Invalid Token");
        }
        return accessToken;
    }
}
