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


import com.example.studentportal.modal.TimeTableMaster;
import com.example.studentportal.service.TimeTableService;


@RestController
@RequestMapping("tableData")
public class TimeTableController {

	@Autowired
	TimeTableService timeTableService;
	
	
	
	@PostMapping("/createTimeTableEntry")
	@CrossOrigin("*")
	public Boolean createTimeTable(@RequestBody TimeTableMaster timeTableMaster) {
		
		return timeTableService.createTimeTable(timeTableMaster);
	}
	 
	 @RequestMapping(value = "/updateTimeTable/{updateId}", method = RequestMethod.PUT)
	 @CrossOrigin("*")
	 public void updateTimeTable1(@RequestBody TimeTableMaster timeTableMaster,@PathVariable String updateId ) {
		 timeTableService.updateTimeTable(timeTableMaster,updateId);
	 }
	 
	 @RequestMapping(value = "/deleteTimeTable/{updateId}", method = RequestMethod.DELETE)
	 @CrossOrigin("*")
	 public void deleteTimeTable(@PathVariable String updateId) {
		 timeTableService.deleteTimeTable(updateId);
		 	 
	 }
	 
	    @GetMapping("/getTimeTableByCourse")
		@CrossOrigin("*")
		public List<TimeTableMaster> getTimeTableByCourse(@RequestParam(name = "course") String course) {
			 return timeTableService.getTimeTableByCourse(course);
		}
	    
}
