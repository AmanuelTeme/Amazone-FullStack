// importing react and useContext
import React, { useContext } from "react";

// importing css module
import styles from "./Header.module.css";

// importing Link from react-router-dom
import { Link } from "react-router-dom";

// icons
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

// importing related components
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

const Header = () => {
  // using useContext to get the user and basket data
  const [{ user, basket }, dispatch] = useContext(DataContext);

  // calculating the total number of items in the basket
  const totalItem = basket?.reduce((amount, item) => {
    return amount + item.amount;
  }, 0);

  return (
    <section className={styles.fixed}>
      <section>
        <div className={styles.header__container}>
          {/* amazon logo and location ------------------- */}
          <div className={styles.logo__container}>
            {/* logo */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>

            {/* location */}
            <div className={styles.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>America</span>
              </div>
            </div>
          </div>
          {/* amazon logo and location ends ---------------- */}

          {/* search section --------------------------- */}
          <div className={styles.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={38} />
          </div>
          {/* search section ends here ------------------ */}

          {/* other sections --------------------------------- */}
          <div className={styles.order__container}>
            {/* language */}
            <Link to="" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />

              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            {/* auth */}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p> Hello, {user?.email?.split("@")[0]} </p>
                    <span onClick={() => auth.signOut()}>SignOut</span>
                  </>
                ) : (
                  <>
                    <p> Hello, Sign in </p>
                    <span> Account&lists </span>
                  </>
                )}
              </div>
            </Link>

            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>

            {/* cart */}
            <Link to="/cart" className={styles.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
          {/* other sections end ---------------------- */}
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
