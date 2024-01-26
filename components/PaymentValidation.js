import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

const PaymentValidation = () => {
  const initialFormData = {
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateInput(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
    setFormData(initialFormData);
  };

  //for validation
  const validateInput = (name, value) => {
    switch (name) {
      case "cardNumber":
        setFormErrors({ ...formErrors, cardNumber: /^[0-9]{16}$/.test(value) ? "" : "Invalid Card Number" });
        break;
      case "cardName":
        setFormErrors({ ...formErrors, cardName: /^[a-zA-Z ]+$/.test(value) ? "" : "Invalid Card Name" });
        break;
      case "expiryMonth":
        setFormErrors({ ...formErrors, expiryMonth: /^(0[1-9]|1[0-2])$/.test(value) && parseInt(value, 10) >= new Date().getMonth() + 1 ? "" : "Invalid Month" });
        break;
      case "expiryYear":
        setFormErrors({ ...formErrors, expiryYear: /^\d{4}$/.test(value) && parseInt(value, 10) >= new Date().getFullYear() ? "" : "Invalid Year" });
        break;
      case "cvv":
        setFormErrors({ ...formErrors, cvv: /^[0-9]{3}$/.test(value) ? "" : "Invalid CVV" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="mt-30 layout-column justify-content-center align-items-center">
      <Card variant="outlined" style={{ width: "600px", padding: "30px" }}>


        <CardContent>
          <Typography variant="h5" align="center" gutterBottom mb={3} fontWeight="bold">
            Card Details
          </Typography>
          <Paper style={{borderRadius: 10,backgroundColor: "darkgoldenrod"}}>
            <Typography variant="h6" gutterBottom color="white" fontWeight="bold" padding={2}>
              Bank Name
            </Typography>
            <Typography variant="h5" align="center" gutterBottom color="white" fontWeight="bold" marginBottom={2}>
              {formData.cardNumber || "XXXXXXXXXXXXXXXX"}
            </Typography>
            <div style={{ height: "45px", backgroundColor: "black", padding: "-20px",}}></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px"}}>
              <Typography variant="subtitle1" color="white">
                {formData.cardName || "HOLDER NAME"}
              </Typography>
              <Typography variant="subtitle1" color="white">
                {formData.expiryMonth || "MM"}/{formData.expiryYear || "YYYY"}
              </Typography>
              <Typography variant="subtitle1" color="white">
                {formData.cvv || "CVV"}
              </Typography>
            </div>
          </Paper>
        </CardContent>


        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12}>
                <TextField type="text" label="Card Number" name="cardNumber" variant="outlined" fullWidth value={formData.cardNumber} onChange={handleChange} />
                <Typography variant="body2" color="error"> {formErrors.cardNumber}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField type="text" label="Name On Card" name="cardName" variant="outlined" fullWidth value={formData.cardName} onChange={handleChange} />
                <Typography variant="body2" color="error"> {formErrors.cardName} </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField type="text" label="Expiry Month" name="expiryMonth" variant="outlined" fullWidth value={formData.expiryMonth} onChange={handleChange} />
                <Typography variant="body2" color="error"> {formErrors.expiryMonth} </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField type="text" label="Expiry Year" name="expiryYear" variant="outlined" fullWidth value={formData.expiryYear} onChange={handleChange} />
                <Typography variant="body2" color="error"> {formErrors.expiryYear} </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField type="text" label="CVV" name="cvv" variant="outlined" fullWidth value={formData.cvv} onChange={handleChange}
                />
                <Typography variant="body2" color="error"> {formErrors.cvv} </Typography>
              </Grid>
              <Grid item xs={12} mt={3}>
                <Button type="submit" variant="contained" color="primary" fullWidth
                  disabled={ formErrors.cardNumber || formErrors.cardName || formErrors.expiryMonth || formErrors.expiryYear || formErrors.cvv || !formData.cardNumber || !formData.cardName || !formData.expiryMonth || !formData.expiryYear || !formData.cvv }
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>

        
      </Card>
    </div>
  );
};

export default PaymentValidation;
