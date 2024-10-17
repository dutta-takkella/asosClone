export default function SizingOptions(product) {
  const { sizeOptions, oneSize, category } = product;
  return sizeOptions ? (
    oneSize ? (
      <div>
        <p className="text-sm">
          <span className="font-bold uppercase">size: </span>{" "}
          <span className="capitalizes"> one size</span>
        </p>
      </div>
    ) : (
      "asdf"
    )
  ) : (
    <span className="hidden"> </span>
  );
}
