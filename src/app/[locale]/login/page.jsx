import LoginUI from '@/components/ui/login';
import { useOptions } from '@/utils/translate/useOptions';
import { useTranslations } from "next-intl";
const LoginPage = () => {
  const t = useTranslations();
  const {useTranslateOptions } = useOptions();
  const {} = useTranslateOptions();
  return (
    <>
           <LoginUI />

  

    </>
  )
}

export default LoginPage


