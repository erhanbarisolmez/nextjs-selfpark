import LoginPage from "@/components/login";
import { useTranslations } from "next-intl";
const LoginPageDefault = () => {
  const t = useTranslations();
  return (
    <>
    {/* <div>{t('login-page')}</div>
    <Link href="dashboard">
      <ButtonComponent  />
      </Link> */}

      <LoginPage />
    </>
  )
}

export default LoginPageDefault


