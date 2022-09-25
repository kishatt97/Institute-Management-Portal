package com.example.studentportal.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.example.studentportal.modal.FileUploadMaster;

public interface FileUploadMasterRepository extends MongoRepository<FileUploadMaster, String> {
	public List<FileUploadMaster> findBysubject(String subject);
}
