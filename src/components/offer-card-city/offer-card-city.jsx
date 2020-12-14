import OfferCard from "./offer-card/offer-card";

export default (props) => {
  const {className = ``, ...restProps} = props;

  return (
    <OfferCard
      className={`product--sale ${className}`}
      {...restProps}
    />
  );
};
