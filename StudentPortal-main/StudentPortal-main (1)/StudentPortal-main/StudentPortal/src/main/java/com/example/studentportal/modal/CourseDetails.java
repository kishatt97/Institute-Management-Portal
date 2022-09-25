package com.example.studentportal.modal;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="CourseDetails")
public class CourseDetails {
@Id	
private String courseId;	
private String course;
private String subject;
private String duration;

public String getCourseId() {
	return courseId;
}
public void setCourseId(String courseId) {
	this.courseId = courseId;
}
public String getduration() {
	return duration;
}
public void setduration(String duration) {
	this.duration = duration;
}
public String getCourse() {
	return course;
}
public void setCourse(String course) {
	this.course = course;
}
public String getSubject() {
	return subject;
}
public void setSubject(String subject) {
	this.subject = subject;
}
@Override
public String toString() {
	return "CourseDetails [courseId=" + courseId + ", course=" + course + ", subject=" + subject + ", duration="
			+ duration + "]";
}

public CourseDetails() {}

public CourseDetails(String courseId, String course, String subject, String duration) {
	super();
	this.courseId = courseId;
	this.course = course;
	this.subject = subject;
	this.duration = duration;
}
}
