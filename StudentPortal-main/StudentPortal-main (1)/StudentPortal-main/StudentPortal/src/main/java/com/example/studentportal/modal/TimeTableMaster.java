package com.example.studentportal.modal;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="TimeTableMaster")
public class TimeTableMaster {
	
	@Id
	private String id;
	private String moduleName;
	private String date;
	private String time;
	private String link;
	private String updateId;
	private String course;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getModuleName() {
		return moduleName;
	}
	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public String getUpdateId() {
		return updateId;
	}
	public void setUpdateId(String updateId) {
		this.updateId = updateId;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	@Override
	public String toString() {
		return "TimeTableMaster [id=" + id + ", moduleName=" + moduleName + ", date=" + date + ", time=" + time
				+ ", link=" + link + ", updateId=" + updateId + ", course=" + course + "]";
	}
	
	public TimeTableMaster() {}
	
	public TimeTableMaster(String id, String moduleName, String date, String time, String link, String updateId,
			String course) {
		super();
		this.id = id;
		this.moduleName = moduleName;
		this.date = date;
		this.time = time;
		this.link = link;
		this.updateId = updateId;
		this.course = course;
	}
	
		
}
