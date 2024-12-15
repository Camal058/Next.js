import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Details() {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { carId } = router.query;

  const getCar = async () => {
    try {
      const response = await axios.get(`/api/cars/${carId}`);
      console.log(response.data);
      setCar(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCar();
  }, [carId]);


  if (!car) return <div>Car not found</div>;
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "2em", marginBottom: "10px" }}>
        {car.brand} {car.model}
      </h1>
      <p style={{ fontSize: "1.2em", lineHeight: "1.6" }}>
        <strong>Year:</strong> {car.year}
      </p>
      <p style={{ fontSize: "1.2em", lineHeight: "1.6" }}>
        <strong>Price:</strong> ${car.price}
      </p>
      <p style={{ fontSize: "1.2em", lineHeight: "1.6" }}>
        <strong>Mileage:</strong> {car.mileage} miles
      </p>
      <p style={{ fontSize: "1.2em", lineHeight: "1.6" }}>
        <strong>Fuel Type:</strong> {car.fuelType}
      </p>
      <p style={{ fontSize: "1.2em", lineHeight: "1.6" }}>
        <strong>Transmission:</strong> {car.transmission}
      </p>
      <p style={{ fontSize: "1.2em", lineHeight: "1.6" }}>
        <strong>Color:</strong> {car.color}
      </p>
  
      <h3 style={{ marginTop: "20px" }}>Features:</h3>
      {car.features && car.features.length > 0 ? (
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          {car.features.map((feature, index) => (
            <li key={index} style={{ marginBottom: "5px" }}>
              {feature}
            </li>
          ))}
        </ul>
      ) : (
        <p>No features available for this car.</p>
      )}
    </div>
  );}  