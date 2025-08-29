const ProductPrice = ({ value }: { value: number }) => {
  const stringValue = value.toFixed(2);
  const [intValue, floatValue] = stringValue.split(".");
  /*
        string -> list : name,date,age,
    */

  return (
    <p className="text-2xl">
      <span className="text-xs align-super">TND</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
