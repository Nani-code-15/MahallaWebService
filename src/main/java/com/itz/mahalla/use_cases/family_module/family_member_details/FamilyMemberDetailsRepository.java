package com.itz.mahalla.use_cases.family_module.family_member_details;

import com.itz.mahalla.persistence.models.family_module.FamilyMemberDetails;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface FamilyMemberDetailsRepository extends JpaRepository<FamilyMemberDetails,Long> {
	FamilyMemberDetails findById(Integer pk0);
	FamilyMemberDetails findByName(String pk0);
	Page<FamilyMemberDetails> findByNameContainingIgnoreCase(String searchKey,Pageable of);
}
