package com.example.studentportal.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentportal.modal.UserMaster;
import com.example.studentportal.repository.UserMasterRepository;

@Service
public class UserMasterService {
	
	@Autowired
	UserMasterRepository userMasterRepository;

	public List<UserMaster> getAllStudentsByCourse(String course) {
		return userMasterRepository.findByCourse(course);
	}
	
	public UserMaster getDetailsUsingMail(String emailId) {
		return userMasterRepository.findByEmailId(emailId);
	}
	
	public void updateStudent(String Id, UserMaster userMaster) {
		userMasterRepository.save(userMaster);
	}
	
	public void deleteStudent(String id) {
		userMasterRepository.deleteById(id);
	}
	public Boolean createUser(UserMaster userMaster) {
		try {
			userMasterRepository.save(userMaster);
			return true;
		} catch (Exception e) {
			
		}
		return false;
	}
	
	
	public UserMaster login(String emailId ,String password) {
		try {
			UserMaster data = userMasterRepository.findByEmailId(emailId);
			if(data != null && data.getPassword().equals(password)) {
				return data;
			} else {
				return null;
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}

}
