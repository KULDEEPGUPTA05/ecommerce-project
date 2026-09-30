const {products}=require("../database/dummydata")
const productcontroller = (req, res) => {
  
     try {
        const {  category } = req.query;
        console.log(category)
        let result = products;
        if (category) {
            result = products.filter((product) =>
                product.category.toLowerCase().includes(category.toLowerCase())
            );
        }
        res.send(result);

    } catch (err) {
        console.log(err);
        res.send({
            message: "Something went wrong"
        });
    }
};

const productcontrollersingledata=(req,res)=>{
        try{
            let result=products;
            let {id}=req.params;
            if(!id){
                return res.send("something went wrong");
            }
            result = products.find(item => item.id==id);
            console.log(result);
            if(!result){
                return res.send("Product not found");
            }
            return res.send(JSON.stringify(result));
        }catch(err){
            console.log(err);
        }
    }

module.exports={productcontroller,productcontrollersingledata};
