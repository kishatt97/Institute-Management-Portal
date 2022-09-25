package com.example.studentportal.modal;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="FileUploadMaster")
public class FileUploadMaster {
	@Id
    private String imageId;
    private String filePath;
    private String uploadedBy;
    private String uploadedDate;
    private String subject;
    private String imageData;
    
	public String getImageData() {
		return imageData;
	}
	public void setImageData(String imageData) {
		this.imageData = imageData;
	}
	public String getImageId() {
		return imageId;
	}
	public void setImageId(String imageId) {
		this.imageId = imageId;
	}
	public String getFilePath() {
		return filePath;
	}
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	public String getUploadedBy() {
		return uploadedBy;
	}
	public void setUploadedBy(String uploadedBy) {
		this.uploadedBy = uploadedBy;
	}
	public String getUploadedDate() {
		return uploadedDate;
	}
	public void setUploadedDate(String uploadedDate) {
		this.uploadedDate = uploadedDate;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	
	public FileUploadMaster() {}
	
	public FileUploadMaster(String imageId, String filePath, String uploadedBy, String uploadedDate, String subject,String imageData) {
		super();
		this.imageId = imageId;
		this.filePath = filePath;
		this.uploadedBy = uploadedBy;
		this.uploadedDate = uploadedDate;
		this.subject = subject;
		this.imageData = imageData;
	}
	@Override
	public String toString() {
		return "FileUploadMaster [imageId=" + imageId + ", filePath=" + filePath + ", uploadedBy=" + uploadedBy
				+ ", uploadedDate=" + uploadedDate + ", subject=" + subject + ", imageData=" + imageData + "]";
	}     
}
