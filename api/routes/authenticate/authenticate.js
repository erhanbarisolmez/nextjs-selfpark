import ServiceManager from "../../service_management/ServiceManager";


const serviceManager = new ServiceManager();

export default async function handler(req, res){
  if (req.method !== "POST") {
    return res.status(405).json({message:"Method Not Allowed"});
  }

  const {email, password} = req.body;

  if (!email || !password) {
    return res.status(400).json({message: "Email and password are required"});
  }

  try {
    const authResult = await serviceManager.authService.authenticate(email, password);
    
    if (authResult.status === 'success') {
      res.writeHead(302, {Location: "/dashboard"});
      res.end();
    }else{
      res.status(401).json({message: "Authentication failed"});
    }

  } catch (error) {
    console.error("Authentication error", error);
    res.status(500).json({message: "Internal Server Error"});
  }
}