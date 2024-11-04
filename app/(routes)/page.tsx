import { getBillboard } from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("c08719e6-5056-4748-bac3-0baad2e92c07");
  return (
    <Container>
      <div className=" space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>{" "}
    </Container>
  );
};

export default HomePage;
