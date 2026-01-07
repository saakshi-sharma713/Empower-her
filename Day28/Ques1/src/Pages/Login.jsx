import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContextt";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const {login} = useContext(AuthContext);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate =useNavigate(); 
    function handleLogin(){
        const status = login(email,password);
        if(status){
            navigate("/todos");
        }
        else{
            alert("Invalid Credentails");
            navigate("/login");
        }
    }
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button className="w-full" onClick={()=>{handleLogin()}}>
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
