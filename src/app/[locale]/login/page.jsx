import { ButtonComponent } from "@/components/ButtonComponent"
import Link from 'next/link'
const LoginPage = () => {
  return (
    <>
    <div>Login Page</div>
    <Link href="dashboard">
      <ButtonComponent  />
      </Link>
    </>
  )
}

export default LoginPage


