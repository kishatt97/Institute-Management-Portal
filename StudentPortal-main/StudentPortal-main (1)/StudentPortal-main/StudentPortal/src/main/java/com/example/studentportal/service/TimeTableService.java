package com.example.studentportal.service;


import java.util.List;
import java.util.Optional;
import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.studentportal.modal.TimeTableMaster;
import com.example.studentportal.repository.TimeTableRepository;


@Service
public class TimeTableService {

	@Autowired
	TimeTableRepository timeTableRepository;
	
	public Boolean createTimeTable(TimeTableMaster timeTableMaster) {
		try {
			Instant timeStamp = Instant.now();
			timeTableMaster.setUpdateId("apt_"+timeStamp);
			timeTableRepository.save(timeTableMaster);
			return true;
		} catch (Exception e) {
			
		}
		return false;
	}
	
	public List<TimeTableMaster> getTimeTableByCourse(String course) {
		//String timeStamp = 
		return timeTableRepository.findByCourse(course);
	}
	
		public void updateTimeTable1(TimeTableMaster timeTableMaster,String updateId) {
		timeTableMaster.setUpdateId(updateId);
		timeTableRepository.save(timeTableMaster);
	}
	
	public void updateTimeTable(TimeTableMaster timeTableMaster,String updateId) {
		//timeTableMaster.setUpdateId(updateId);
		Optional<TimeTableMaster> todoWithId = timeTableRepository.findByUpdateId(updateId);
        //Optional<TimeTableMaster> todoWithSameName = timeTableRepository.findByUpdateId(timeTableMaster.getUpdateId());
        if(todoWithId.isPresent())
        {
            
        	TimeTableMaster todoToUpdate=todoWithId.get();
            
            todoToUpdate.setUpdateId(timeTableMaster.getUpdateId());
            todoToUpdate.setDate(timeTableMaster.getDate());
            todoToUpdate.setLink(timeTableMaster.getLink());
            todoToUpdate.setModuleName(timeTableMaster.getModuleName());
            todoToUpdate.setTime(timeTableMaster.getTime());

            timeTableRepository.save(todoToUpdate);
        }
	}
	
	public void deleteTimeTable(String updateId) {
		timeTableRepository.deleteById(updateId);
	}
	
}
