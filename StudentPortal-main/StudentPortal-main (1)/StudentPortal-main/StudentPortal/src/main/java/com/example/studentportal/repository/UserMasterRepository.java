package com.example.studentportal.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.studentportal.modal.UserMaster;

@Repository
public interface UserMasterRepository extends MongoRepository<UserMaster, String> {
	
	  
	public Optional<UserMaster> findById(String id);
	
	public List<UserMaster> findByFirstName(String firstName);
	
	public List<UserMaster> findByLastName(String lastName);
	
	public List<UserMaster> findByCourse(String course);
	
	public UserMaster findByEmailId(String emailId);

	

}
