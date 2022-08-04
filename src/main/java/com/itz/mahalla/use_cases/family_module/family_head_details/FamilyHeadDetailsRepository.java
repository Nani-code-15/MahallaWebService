package com.itz.mahalla.use_cases.family_module.family_head_details;

import com.itz.mahalla.persistence.models.family_module.FamilyHeadDetails;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface FamilyHeadDetailsRepository extends JpaRepository<FamilyHeadDetails,Long> {
	FamilyHeadDetails findById(Integer pk0);
	FamilyHeadDetails findByName(String pk0);
	Page<FamilyHeadDetails> findByNameContainingIgnoreCase(String searchKey,Pageable of);
}
