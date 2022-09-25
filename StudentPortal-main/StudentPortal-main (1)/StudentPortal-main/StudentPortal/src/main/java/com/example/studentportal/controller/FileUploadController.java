package com.example.studentportal.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.studentportal.modal.CourseDetails;
import com.example.studentportal.modal.FileUploadMaster;
import com.example.studentportal.service.CourseDetailsService;
import com.example.studentportal.service.FileUploadMasterService;


import java.util.List;

@RestController
@RequestMapping("fileUpload")
public class FileUploadController {
	

	@Autowired
	FileUploadMasterService fileUploadMasterService;
	
	@Autowired
	CourseDetailsService courseDetailsService;
	
	
	@PostMapping("/createFile")
	@CrossOrigin("*")
	public Boolean createUser(@RequestBody FileUploadMaster fileUploadMaster) {
		return fileUploadMasterService.createFile(fileUploadMaster);
	}
	
	@GetMapping("/getAllBySubject")
	@CrossOrigin("*")
	public List<FileUploadMaster> getAllBySubject(@RequestParam(name = "subject") String subject) {
		 return fileUploadMasterService.getAllBySubject(subject);
	}
	
	@GetMapping("/getAllFilesByCourse")
	@CrossOrigin("*")
	public List<FileUploadMaster> getAllSubjects(@RequestParam(name = "courseName") String courseName) {
		List<CourseDetails> courseDetails = courseDetailsService.getAllSubjectsByCourse(courseName);
		List<FileUploadMaster> fileList;
		List<FileUploadMaster> fileList1 = null;

		for(CourseDetails courseList:courseDetails) {
			fileList=fileUploadMasterService.getAllBySubject(courseList.getSubject());
			fileList1.addAll(fileList);
		}
		 return fileList1;
	}
}
