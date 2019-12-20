package com.ustglobal.stockmanagement.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Order_History_Info")
public class OrderHistoryInfo {
	@Id
	@Column
	private int order_id;
	@Column(name="")
	private int product_id;
	public int getOrderid() {
		return order_id;
	}
	public void setOrderid(int orderid) {
		this.order_id = orderid;
	}
	public int getProductid() {
		return product_id;
	}
	public void setProductid(int productid) {
		this.product_id = productid;
	}
	

}
