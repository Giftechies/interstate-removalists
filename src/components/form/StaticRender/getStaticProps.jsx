import Property from "../Property";
import { PropertyData } from "../Action/formdata";

export async function getStaticProps() {
  const options = await PropertyData(); // fetch your property options
  return {
    props: {
      options,
    },
    revalidate: 60, // optional: regenerate page every 60s if data changes
  };
}

export default function Page({ options }) {
    console.log(options);           
    
  return (
    <div>
      <h1>Property Form</h1>
      <Property propertyOptions={options} />
    </div>
  );
}
