import { useTranslations } from "next-intl";
const DashboardPage = () => {
  const t = useTranslations();
  return (
    <p>
        {t('dashboardpage')}
    </p>
  )
}

export default DashboardPage