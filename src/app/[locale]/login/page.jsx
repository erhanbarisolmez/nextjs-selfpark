import { useTranslations } from "next-intl";
import Link from 'next/link';
import { ButtonComponent } from "@/components/ButtonComponent";

const LoginPageDefault = () => {
  const t = useTranslations();
  return (
    <>
    <div>{t('login-page')}</div>
    <Link href="dashboard">
      <ButtonComponent  />
      </Link>

 
    </>
  )
}

export default LoginPageDefault


