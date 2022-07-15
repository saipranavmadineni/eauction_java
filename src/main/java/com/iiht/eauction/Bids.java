package com.iiht.eauction;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

@Entity
public class Bids {


	@javax.persistence.Id
	@GeneratedValue

	private int Id;
	private String firstname;
	private String lastname;
	private String address;
	private String city;
	private String state;
	private String pin;
	private String phone;
	private String email;
	
	private String productid;
	private int bidamount;
	
	public void Product() {
		
	}
	
	
	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}
	
	public String getfirstname() {
		return firstname;
	}

	public void setfirstname(String firstname) {
		this.firstname = firstname;
	}
	
	public String getlastname() {
		return lastname;
	}

	public void setlastname(String lastname) {
		this.lastname = lastname;
	}
	
	public String getaddress() {
		return address;
	}
	
	public void setaddress(String address) {
		this.address = address;
	}
	
	public String getcity() {
		return city;
	}
	
	public void setcity(String city) {
		this.city = city;
	}
	
	public String getstate() {
		return state;
	}
	
	public void setstate(String state) {
		this.state = state;
	}
	
	public String getpin() {
		return pin;
	}
	
	public void setpin(String pin) {
		this.pin = pin;
	}
	
	public String getphone() {
		return phone;
	}
	
	public void setphone(String phone) {
		this.phone = phone;
	}
	
	public String getemail() {
		return email;
	}
	
	public void setemail(String email) {
		this.email = email;
	}	

	public String getproductid() {
		return productid;
	}

	public void setproductid(String productid) {
		this.productid = productid;
	}
	
	public int getbidamount() {
		return bidamount;
	}

	public void setbidamount(int bidamount) {
		this.bidamount = bidamount;
	}
	
	
}