import styles from "./Pricing.module.css";
import carImage from "../assets/car.svg";
import bikeImage from "../assets/bike.svg";
import truckImage from "../assets/truck.svg";
function Pricing() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Pricing</h1>
        <div className={styles.items}>
          <div className={styles.item}>
            <h2>Two Wheeler</h2>
            <div className={styles.imgContainer}>
              <img src={bikeImage} alt="" height={"100px"} />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              natus itaque perspiciatis
            </p>
            <h3>&#8377; 70</h3>
          </div>
          <div className={styles.item}>
            <h2>Car</h2>
            <div className={styles.imgContainer}>
              <img src={carImage} alt="" height={"100px"} />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              natus itaque perspiciatis
            </p>
            <h3>&#8377; 100</h3>
          </div>
          <div className={styles.item}>
            <h2>Truck</h2>
            <div className={styles.imgContainer}>
              <img src={truckImage} alt="" height={"100px"} />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              natus itaque perspiciatis
            </p>
            <h3>&#8377; 200</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
