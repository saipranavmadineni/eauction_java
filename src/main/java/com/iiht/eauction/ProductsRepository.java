package com.iiht.eauction;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface ProductsRepository extends JpaRepository<Products,Integer> {
	Products findByproductname(String productname);
	
	 @Transactional
	 void deleteById(int Id);
}





