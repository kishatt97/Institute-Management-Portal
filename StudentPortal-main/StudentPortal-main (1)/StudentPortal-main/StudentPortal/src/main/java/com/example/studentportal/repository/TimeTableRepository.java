package com.example.studentportal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.studentportal.modal.TimeTableMaster;


public interface TimeTableRepository extends MongoRepository<TimeTableMaster, String> {
	
	public List<TimeTableMaster> findByModuleName(String ModuleName);
	
	@Query("{'updateId': ?0}")
	Optional<TimeTableMaster> findByUpdateId(String updateId);
	
	public List<TimeTableMaster> findByCourse(String course);

}
