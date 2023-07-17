const User = require("../models/User")

exports.addToCart=async(req,res)=>{
	try {
		const {cartId}=req.body;
	const userId=req.user.id;
	const userCart=await User.findById(userId);
	if(!userCart)
	{
		res.status(401).json({
			success:false,
			message:"user not found"
		})
	}
	const updated=User.findByIdAndUpdate(userId ,{
        $push: { cart:cartId },
      }).populate("cart")
	  
		res.status(200).json({
		success:true,
		data:updated.cart
	})	
	} catch (error) {
		res.status(500).json({
			success:false,
			message:error.message
		})	
	}
	

}

exports.removeFromCart=async(req,res)=>{
	try {
		const {cartId}=req.body;
	const userId=req.user.id;
	const userCart=await User.findById(userId);
	if(!userCart)
	{
		res.status(401).json({
			success:false,
			message:"user not found"
		})
	}
	const updated=User.findByIdAndUpdate(userId ,{
        $pull: { cart:cartId },
      }).populate("cart")

	res.status(200).json({
		success:true,
		data:updated.cart
	})	
	} catch (error) {
		res.status(500).json({
			success:false,
			message:error.message
		})	
	}
}


exports.emptyCart=async(req,res)=>{
	
}