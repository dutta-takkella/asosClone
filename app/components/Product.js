export default function Product() {
  return (
    <div className="max-w-screen grid grid-cols-[1fr_6fr_4fr] mx-44">
      {/* why is w-screen not working */}
      <section className="border border-black"></section>
      <section className="border border-black">product image</section>
      <section className="border border-black">product details</section>
    </div>
  );
}
