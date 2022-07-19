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
	ProductsRepository productsRepository;
	
	@Autowired
	Bidsrepository bidsRepository;
	
	@CrossOrigin()
	@RequestMapping(value = "/e-auction/api/v1/seller/add-product",method=RequestMethod.POST, headers = "Accept=application/json"  )
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
				
		productsRepository.save(prod1);
		return prod1;
	}
	
	@CrossOrigin()
	@RequestMapping(value = "/e-auction/api/v1/buyer/place-bid",method=RequestMethod.POST, headers = "Accept=application/json"  )
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
		
		
		bidsRepository.save(bid1);
		return bid1;
	}
	
	
	@CrossOrigin()
	@RequestMapping(value = "/e-auction/api/v1/buyer/update-bid/{productid}/{email}/{bidamount}",method=RequestMethod.POST, headers = "Accept=application/json"  )
	public Bids updatebid(@PathVariable String productid,@PathVariable String email ,@PathVariable int bidamount) {
		Bids bid1  =new Bids();
		
		bid1 = bidsRepository.findByProductidAndEmail(productid,email);
		
		bid1.setbidamount(bidamount);
		bidsRepository.save(bid1);
		return bid1;
	}
	
	@CrossOrigin()
	@RequestMapping(value = "/e-auction/api/v1/seller/delete/{Id}",method = RequestMethod.DELETE)
	public void delete(@PathVariable int Id) {	
		bidsRepository.deleteByProductid(Integer.toString(Id));
		productsRepository.deleteById(Id);
	}
	
	@CrossOrigin()
	@RequestMapping(value = "/e-auction/api/v1/seller/show-bids/{Id}",method = RequestMethod.GET)
	public List<Bids> listBids(@PathVariable int Id)
	{
		return bidsRepository.findByproductid(Integer.toString(Id));
	}
	

	
	
	
	
	

}
