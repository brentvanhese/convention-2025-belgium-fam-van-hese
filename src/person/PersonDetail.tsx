import { useParams } from "react-router";

export const PersonDetail = () => {
  const params = useParams();

  console.log("PersonDetail params:", params);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Person {params.name}</h1>
      <p>This is the detail page for a person.</p>
      {/* Additional content can be added here */}
    </div>
  );
};
