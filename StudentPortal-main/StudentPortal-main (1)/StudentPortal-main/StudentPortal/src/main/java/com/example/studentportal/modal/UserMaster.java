package com.example.studentportal.modal;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="UserMaster")
public class UserMaster {
	@Id
	private String id;  
	private String firstName;
	private String lastName;	
	private String emailId;
	private String gender;
	private String password;
	private String course;
	private String userType;
	private String hscMarks;
	private String sscMarks;
	private String graduationMarks;
	private String moduleTakenByFaculty;
	private String QulificationOfFaculty;
	private String YearOfExperienceOfFaculty;

	public UserMaster() {
		
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getHscMarks() {
		return hscMarks;
	}

	public void setHscMarks(String hscMarks) {
		this.hscMarks = hscMarks;
	}

	public String getSscMarks() {
		return sscMarks;
	}

	public void setSscMarks(String sscMarks) {
		this.sscMarks = sscMarks;
	}

	public String getGraduationMarks() {
		return graduationMarks;
	}

	public void setGraduationMarks(String graduationMarks) {
		this.graduationMarks = graduationMarks;
	}

	public String getModuleTakenByFaculty() {
		return moduleTakenByFaculty;
	}

	public void setModuleTakenByFaculty(String moduleTakenByFaculty) {
		this.moduleTakenByFaculty = moduleTakenByFaculty;
	}

	public String getQulificationOfFaculty() {
		return QulificationOfFaculty;
	}

	public void setQulificationOfFaculty(String qulificationOfFaculty) {
		QulificationOfFaculty = qulificationOfFaculty;
	}

	public String getYearOfExperienceOfFaculty() {
		return YearOfExperienceOfFaculty;
	}

	public void setYearOfExperienceOfFaculty(String yearOfExperienceOfFaculty) {
		YearOfExperienceOfFaculty = yearOfExperienceOfFaculty;
	}
	
	public UserMaster(String id, String firstName, String lastName, String emailId, String gender, String password,
			String course, String userType, String hscMarks, String sscMarks, String graduationMarks,
			String moduleTakenByFaculty, String qulificationOfFaculty, String yearOfExperienceOfFaculty) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.gender = gender;
		this.password = password;
		this.course = course;
		this.userType = userType;
		this.hscMarks = hscMarks;
		this.sscMarks = sscMarks;
		this.graduationMarks = graduationMarks;
		this.moduleTakenByFaculty = moduleTakenByFaculty;
		QulificationOfFaculty = qulificationOfFaculty;
		YearOfExperienceOfFaculty = yearOfExperienceOfFaculty;
	}

	@Override
	public String toString() {
		return "UserMaster [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", emailId=" + emailId
				+ ", gender=" + gender + ", password=" + password + ", course=" + course + ", userType=" + userType
				+ ", hscMarks=" + hscMarks + ", sscMarks=" + sscMarks + ", graduationMarks=" + graduationMarks
				+ ", moduleTakenByFaculty=" + moduleTakenByFaculty + ", QulificationOfFaculty=" + QulificationOfFaculty
				+ ", YearOfExperienceOfFaculty=" + YearOfExperienceOfFaculty + "]";
	}
	
}
