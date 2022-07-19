package com.iiht.eauction;



import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.validation.constraints.Email;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Products {


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
	@Size(min = 10, max = 10)
	private String phone;
	
	@NotNull
	@Email
	private String email;
	
	@NotNull
	@Size(min = 5, max = 30,message="Product name should be 5-30 characters")
	private String productname;
	private String shortdescription;
	private String detaileddescription;
	private String category;
	private int startingprice;
	
	@Future
	@JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate bidenddate;
	
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

	public String getproductname() {
		return productname;
	}

	public void setproductname(String productname) {
		this.productname = productname;
	}
	
	public String getshortdescription() {
		return shortdescription;
	}

	public void setshortdescription(String shortdescription) {
		this.shortdescription = shortdescription;
	}
	
	public String getdetaileddescription() {
		return detaileddescription;
	}

	public void setdetaileddescription(String detaileddescription) {
		this.detaileddescription = detaileddescription;
	}
	
		
	public String getcategory() {
		return category;
	}

	public void setcategory(String category) {
		this.category = category;
	}
	
	public int getstartingprice() {
		return startingprice;
	}

	public void setstartingprice(int startingprice) {
		this.startingprice = startingprice;
	}
	
	public LocalDate getbidenddate() {
		return bidenddate;
	}

	public void setbidenddate(LocalDate bidenddate) {
		this.bidenddate = bidenddate;
	}

}