package com.ustglobal.stockmanagement.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Order_Info")
public class OrderInfo {
	@Id
	@Column
	@GeneratedValue
	private int id;
	@Column
	private int total_price;
	@Column
	private int total_price_with_gst;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getTotal_price() {
		return total_price;
	}
	public void setTotal_price(int total_price) {
		this.total_price = total_price;
	}
	public int getTotal_price_with_gst() {
		return total_price_with_gst;
	}
	public void setTotal_price_with_gst(int total_price_with_gst) {
		this.total_price_with_gst = total_price_with_gst;
	}
	

}
