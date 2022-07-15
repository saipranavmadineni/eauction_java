package com.iiht.eauction;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.iiht.eauction.ProductsRepository;
import com.iiht.eauction.Products;
import com.iiht.eauction.Bids;

@RestController
public class Restapi1 {
	@Autowired
	ProductsRepository prodrep;
	
	@Autowired
	Bidsrepository bidrep;
	
	@CrossOrigin()
	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
	return String.format("Hello %s!", name);
	}
	
	@CrossOrigin()
	@RequestMapping(value = "/addprod",method=RequestMethod.POST, headers = "Accept=application/json"  )
	public Products createprod(@RequestBody Products prod) {
		
		Products prod1  = new Products();
		prod1.setfirstname(prod.getfirstname());
		prod1.setlastname(prod.getlastname());
		prod1.setaddress(prod.getaddress());
		prod1.setcity(prod.getcity());
		prod1.setstate(prod.getstate());
		prod1.setpin(prod.getpin());
		prod1.setphone(prod.getphone());
		prod1.setemail(prod.getemail());
		
		prod1.setproductname(prod.getproductname());
		prod1.setshortdescription(prod.getshortdescription());
		prod1.setdetaileddescription(prod.getdetaileddescription());
		prod1.setcategory(prod.getcategory());
		prod1.setstartingprice(prod.getstartingprice());
		prod1.setbidenddate(prod.getbidenddate());
				
		prodrep.save(prod1);
		return prod1;
	}
	
	@CrossOrigin()
	@RequestMapping(value = "/addbid",method=RequestMethod.POST, headers = "Accept=application/json"  )
	public Bids createbid(@RequestBody Bids bid) {
		
		Bids bid1  = new Bids();
		bid1.setfirstname(bid.getfirstname());
		bid1.setlastname(bid.getlastname());
		bid1.setaddress(bid.getaddress());
		bid1.setcity(bid.getcity());
		bid1.setstate(bid.getstate());
		bid1.setpin(bid.getpin());
		bid1.setphone(bid.getphone());
		bid1.setemail(bid.getemail());
		
		bid1.setproductid(bid.getproductid());
		bid1.setbidamount(bid.getbidamount());
		
		
		bidrep.save(bid1);
		return bid1;
	}
	
	
	@CrossOrigin()
	@RequestMapping(value = "/updatebid",method=RequestMethod.POST, headers = "Accept=application/json"  )
	public Bids updatebid(@RequestBody Bids bid) {
		Bids bid1  =new Bids();
		
		bid1 = bidrep.findByProductidAndEmail(bid.getproductid(),bid.getemail());
		
		bid1.setbidamount(bid.getbidamount());
		bidrep.save(bid1);
		return bid1;
	}
	
	@CrossOrigin()
	@RequestMapping(value = "/deleteprod/{Id}",method = RequestMethod.DELETE)
	public void delete(@PathVariable int Id) {	
		bidrep.deleteByProductid(Integer.toString(Id));
		prodrep.deleteById(Id);
	}
	
	@CrossOrigin()
	@RequestMapping(value = "/listbids/{Id}",method = RequestMethod.GET)
	public List<Bids> listBids(@PathVariable int Id) {	
		return bidrep.findByproductid(Integer.toString(Id));
	}
	
}
