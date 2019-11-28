package com.ustglobal.jpawithhibernateapp.many.to.many;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name="student_info")
public class Student1 {
	@Id
	@Column
	private int sid;
	@Column
	private String sname;
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name="student_couse",joinColumns = @JoinColumn(name="sid"),inverseJoinColumns = @JoinColumn(name="cid"))
	private List<Courses> course;
}
