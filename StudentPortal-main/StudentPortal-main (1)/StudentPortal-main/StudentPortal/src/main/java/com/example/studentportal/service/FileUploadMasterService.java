package com.example.studentportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentportal.modal.FileUploadMaster;
import com.example.studentportal.repository.FileUploadMasterRepository;

@Service
public class FileUploadMasterService {

	@Autowired
	FileUploadMasterRepository fileUploadMasterRepository;
	
	public List<FileUploadMaster> getAllBySubject(String subject) {
		return fileUploadMasterRepository.findBysubject(subject);
	}
	
	
	public Boolean createFile(FileUploadMaster fileUploadMaster) {
		try {
			fileUploadMasterRepository.save(fileUploadMaster);
			return true;
		} catch (Exception e) {
			
		}
		return false;
	}
}
