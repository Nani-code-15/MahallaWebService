package com.itz.mahalla.use_cases.subscription_module.subscription_entry;

import com.itz.mahalla.persistence.models.subscription_module.SubscriptionEntry;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface SubscriptionEntryRepository extends JpaRepository<SubscriptionEntry,Long> {
	SubscriptionEntry findById(Integer pk0);
	SubscriptionEntry findByName(String pk0);
	Page<SubscriptionEntry> findByNameContainingIgnoreCase(String searchKey,Pageable of);
}
