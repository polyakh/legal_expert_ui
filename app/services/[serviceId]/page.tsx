import getService from "~/app/lib/services/get-service";

const COMPONENT_KEY = "ServicePage";

async function ServicePage({params: { serviceId }}: Params<'serviceId'>) {
  const service = await getService(serviceId);
  return (
    <div>
      {service.body}
    </div>
  );
}
export { COMPONENT_KEY };
export default ServicePage;
