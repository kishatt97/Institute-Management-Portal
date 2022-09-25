package com.example.studentportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentportal.modal.CourseDetails;
import com.example.studentportal.repository.CourseDetailsRepository;

@Service
public class CourseDetailsService {

	@Autowired
	CourseDetailsRepository courseDetailsRepository;
	
	public List<CourseDetails> getAllSubjectsByCourse(String course) {
		return courseDetailsRepository.findByCourse(course);
	}
}
