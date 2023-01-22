import { Fragment, useEffect, useState } from "react";
import Footer from "../../components/footer/footer.component";
import FormInput from "../../components/login/form-input/form-input.component";
import { styleButton } from "../authentication/authentication.component";
import Navigation from "../navigation/navigation";
import Button from "../../components/button/button.component";
import './addProduct.styles.scss'

export const Admin = () => {
  return (
    <div className="add-product-to-cart">
      <h2>Add new product</h2>
      <span>Sign in with your email and password</span>
      <form >
        <FormInput
          label="productName"
          type="text"
          required
          onChange={()=>{}}
          name="productName"
          value=""
        />

        <FormInput
          label="productImage"
          type="text"
          required
          onChange={()=>{}}
          name="productImage"
          value=""
        />

        <FormInput
          label="productPrice"
          type="text"
          required
          onChange={()=>{}}
          name="productPrice"
          value=""
        />

        <FormInput
          label="productName"
          type="text"
          required
          onChange={()=>{}}
          name="productName"
          value=""
        />

        <div className="buttons-container">
          <Button type="submit" style={styleButton} className="normal">
            Sign In
          </Button>
   
        </div>
      </form>
    </div>
  );
};
