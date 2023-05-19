import Link from "next/link"

import { GetStaticProps, InferGetStaticPropsType } from 'next'
import getAllServices from "~/app/lib/services/get-all-services";
import { loadLocaleData } from '~/app/shared/utilities'
const COMPONENT_KEY = "ServicesPage";


import  LanguageSwitcher from './f'




async function ServicesPage(props: any) {
  // const { locale } = useRouter();
  console.log("@@@ServicesPage", loadLocaleData());
  const services = await getAllServices();
  return (
    <div>
      <LanguageSwitcher />
       {services.map(service => {
                return (
                    <>
                        <p key={service.id}>
                            <Link href={`/service/${service.userId}`}>{service.id}</Link>
                        </p>
                        <br />
                    </>
                )
            })}
    </div>
  );
}
export { COMPONENT_KEY };
export default ServicesPage;
