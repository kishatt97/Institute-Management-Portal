package com.example.studentportal.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.studentportal.modal.CourseDetails;

public interface CourseDetailsRepository extends MongoRepository<CourseDetails, String> {

	public List<CourseDetails> findByCourse(String course);

}
