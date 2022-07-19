package com.iiht.eauction;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Bids {


	@javax.persistence.Id
	@GeneratedValue
	private int Id;
	
	@NotNull
	@Size(min = 5, max = 30)
	private String firstname;
	
	@NotNull
	@Size(min = 3, max = 25)
	private String lastname;
	
	private String address;
	private String city;
	private String state;
	private String pin;
	
	@NotNull
	@Size(min = 10, max = 10,message="Phone number should be 10 digits")
	private String phone;
	
	@NotNull
	@Email
	private String email;
	
	private String productid;
	private int bidamount;

	
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
	
	
	public void Product() {
		
	}
	
	
	
}