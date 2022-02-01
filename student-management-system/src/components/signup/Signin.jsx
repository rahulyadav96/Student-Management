import { Form } from "../Form"
import Button from "@mui/material/Button"
export const Sighin = ()=>{
    return(
        <>
            <Form>
               
                <div>
                    <label>First Name</label>
                    <input type="text" placeholder="First name" />
                    <label>Last Name</label>
                    <input type="text" placeholder="Last name" />
                </div>
                <div>
                    <label>Email</label><br />
                    <input type="text" placeholder="Email" />
                </div>
                <div>
                    <label>Password</label><br />
                    <input type="text" placeholder="Password" />
                </div>
               <Button variant="contained">SignUp</Button>
            </Form>
        </>
    )
}