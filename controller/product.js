const model = require('../models/product');

const getallproducts = async (req,res)=>{

    const {company , name , featured , sort , select} = req.query; 
    const queryobject = {};

    if(company){                             // if company,name , featured any one of this is there and other is false then also it will show data
        queryobject.company = company;    
    }
    if(name){
        queryobject.name = { $regex : name , $options : "i"}; // for name if search for iphone it will show for all iphone , i is for caseinsensitive
    }
    if(featured){
        queryobject.featured = featured;
    }
 
    let apidata =  model.find(queryobject)
    if(sort)
    {
        //let sortfix = sort.replace("," , " "); // in url user will type for eg sort=name,prize but in sort command we want space separated value to we use replace
        let sortfix = sort.split(",").join(" ") // for more than two , above is only for two entries
        apidata = apidata.sort(sortfix);       //if nothing asscending sort , if - then descending sort
    }
    if(select)      //select shows only those items which are selected , eg select=name,company,price
    {
        let selectfix = select.split(",").join(" ");
        apidata = apidata.select(selectfix);
    }
    
    //pagination
    let Page = Number(req.query.page) || 1;  // in how many page data is divided , default 1
    let Limit = Number(req.query.limit) || 3; // limit is how many data are display on one page, here we have default as 3
    let Skip = (Page-1)*Limit ;   // data of prev page is not mentioned on current pag
    
    apidata = apidata.skip(Skip).limit(Limit);

    const mydata = await apidata;
    res.status('200').json({mydata , nbHits : mydata.length});
}

const testproducts= async(req,res)=>{
    const mydata = await model.find(req.query);
    res.status('200').json({mydata});
}

module.exports = {
    getallproducts,
    testproducts
}