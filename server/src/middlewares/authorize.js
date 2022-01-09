const authorize = (permissionRoles)=>{

    return (req,res,next)=>{

        //first check the user from the request

        const user = req.user;
        //check if atleast one role of the user is matched with permission Role
        let permission = false;

        user.roles.map(role=>{
            if(permissionRoles.includes(role)){
                permission = true;
            }
        })
        //if not throw error message

        if(!permission) return res.status(403).send("you are not allowed for this operation");

        //if yes then he is allowed
        return next();
    }
}

module.exports = authorize;