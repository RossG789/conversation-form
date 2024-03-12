import MyForm from "./form-component/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Form under here</h1>
      <MyForm />
    </main>
  );
}
