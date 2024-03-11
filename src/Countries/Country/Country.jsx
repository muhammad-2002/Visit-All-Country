import "./Country.css";
const Country = ({ country }) => {
  console.log(country);
  const {
    name,
    cca3,
    area,
    flags,
    population,
    coatOfArms,
    independent,
    continents,
  } = country;
  return (
    <div className="box">
      <div style={{ textAlign: "center" }}>
        <img
          style={{ width: "300px", height: "180px" }}
          src={flags.png}
          alt=""
          srcset=""
        />
      </div>
      <h3>Name: {name.common}</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p>{name.official}</p>
          <p>Population : {population}</p>
          <p>Area:{area}</p>
        </div>
        <div>
          <p>Sort : {cca3}</p>
          <p>independent :{independent}</p>
          <p>continents : {continents[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
