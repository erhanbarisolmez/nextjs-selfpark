import DashboardUI from "@/components/ui/dashboard";
import { useOptions } from "@/utils/translate/useOptions";
import { useTranslations } from "next-intl";
const DashboardPage= () => {
  const t = useTranslations();
  const {useTranslateOptions} = useOptions();

  return (
    <>
    <DashboardUI />
    
    </>
  )
}

export default DashboardPage