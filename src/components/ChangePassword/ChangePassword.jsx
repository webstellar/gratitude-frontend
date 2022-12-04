import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, TextField, Button, Grid, CssBaseline } from "@mui/material/";
import { GrContainer, GrTypography } from "./ChangePassword.styles";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { forgotPassword } from "../../redux/auth/authPasswordSlice";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { message, error } = useSelector((state) => state.forgotPassword);

  return <div>ChangePassword</div>;
};

export default ChangePassword;
