import React from "react";
import styles from "./styles.module.scss"
import { Socialicons } from "../Socialicons/Socialicons";
import { DescTitle } from "../DescTitle/DescTitle";
import { IconWithtext } from "../IconWithText/IconWithText";
import locationSvg from "./../../assets/images/location-dot-solid.svg"
import emailSvg from "./../../assets/images/email-logo1.svg"
import phoneSvg from "./../../assets/images/phone-solid.svg"








export const Footer=()=>
{

return(
<>
<div className={styles.footerSuperDiv}>

<div className={styles.footerAboutDiv}>
  
  <DescTitle title="Party Shope" description="Welcome to PartyShope, the ultimate destination for all your party needs! We are here to set the trend in the party industry, providing you with a wide range of products designed to bring flamboyance and excitement to your celebrations."/>

</div>

<div className={styles.customerCareDiv}>
<DescTitle title="Customer Care"/>
<div>
<ul>
  <li style={{ listStyle: 'none' }}><a href="#about">About Us</a></li>
  <li><a href="#contact">Contact Us</a></li>
  <li><a href="#privacy">Privacy Policy</a></li>
  <li><a href="#exchange">Exchange Policy</a></li>
  <li><a href="#careers">Careers</a></li>
  <li><a href="#faq">FAQ's</a></li>
</ul>
</div>
</div>

<div className={styles.categoriesLinkDiv}>
  <DescTitle title="What We Offer"/>
<div>
<ul>
  <li><a href="#about">Birthday Decor</a></li>
  <li><a href="#contact">Anniversary Decor</a></li>
  <li><a href="#privacy">Special Events</a></li>
  <li><a href="#faq">Party Accessories</a></li>
  <li><a href="#exchange">Event Bookings</a></li>
  <li><a href="#exchange">Customize Solution</a></li>
  
  
 
</ul>
</div>
</div>
<div className={styles.getInTouchDiv}>
 <DescTitle title="Get In Touch"/>
 <div className={styles.getInTouchDivIcons}>
<IconWithtext icon = {locationSvg} text = "Walton Road Lahore &nbsp; &nbsp; " />
<IconWithtext icon = {emailSvg} text = "info@partyshope.com" />
<IconWithtext icon = {phoneSvg} text = "+92 322 490 6361 &nbsp;&nbsp; &nbsp; " />
</div>
</div>

<div className={styles.footerNewsLetterDiv}>

<Socialicons/>
</div>
</div>




















<p className={styles.copyright}>Copyright &copy; 2023 PartyShope. All rights reserved. </p>
</>);


}