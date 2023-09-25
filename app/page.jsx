import CategoryData from "@/components/CategoryData";

export default function Home() {
  return (
    <main className="pb-32">
      <CategoryData title={"top headlines in Technology"} category={"Technology"} />
      <CategoryData title={"top headlines in Business"} category={"Business"} />
      <CategoryData title={"top headlines in Entertainment"} category={"Entertainment"} />
      <CategoryData title={"top headlines in Health"} category={"Health"} />
      <CategoryData title={"top headlines in General"} category={"General"} />
      <CategoryData title={"top headlines in Sports"} category={"Sports"} />
    </main>
  )
}
