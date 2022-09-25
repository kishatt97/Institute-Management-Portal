package com.example.studentportal.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.studentportal.modal.CourseDetails;
import com.example.studentportal.modal.UserMaster;
import com.example.studentportal.service.CourseDetailsService;
import com.example.studentportal.service.UserMasterService;

@RestController
@RequestMapping("students")
public class StudentController {
	
	@Autowired
	UserMasterService userMasterService;
	
	@Autowired
	CourseDetailsService courseDetailsService;
	
	@GetMapping("/getAllSubjectsByCourse")
	@CrossOrigin("*")
	public List<CourseDetails> getAllSubjectsByCourse(@RequestParam(name = "course") String course) {
		 return courseDetailsService.getAllSubjectsByCourse(course);
	}
	
	@GetMapping("/getAllStudents")
	@CrossOrigin("*")
	public List<UserMaster> getAllStudentsByCourse(@RequestParam(name = "course") String course) {
		 return userMasterService.getAllStudentsByCourse(course);
	}
	

	
	
	@GetMapping("/getDetailsUsingMail")
	@CrossOrigin("*")
	public UserMaster getDetailsUsingMail(@RequestParam(name = "emailId") String emailId) {
		 return userMasterService.getDetailsUsingMail(emailId);
	}
	
	@PostMapping("/createUser")
	@CrossOrigin("*")
	public Boolean createUser(@RequestBody UserMaster userMaster) {
		return userMasterService.createUser(userMaster);
	}
	 
	 @RequestMapping(value = "/updateStudent/{emailId}", method = RequestMethod.PUT)
	 @CrossOrigin("*")
	 public void updateStudent(@RequestBody UserMaster userMaster,@PathVariable String emailId ) {
		 userMasterService.updateStudent(emailId, userMaster);
	 }
	 
	 @RequestMapping(value = "/deleteStudents/{id}", method = RequestMethod.DELETE)
	 @CrossOrigin("*")
	 public void deleteStudent(@PathVariable String id) {
		 userMasterService.deleteStudent(id);
		 	 
	 }

	@GetMapping("/login")
	@CrossOrigin("*")
	public UserMaster login(@RequestParam(name = "emailId") String emailId,@RequestParam(name = "password") String password) {
	return userMasterService.login(emailId, password);
	}
	
}
