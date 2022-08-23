import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Grid, TextField, Typography, Paper, Button, Box } from '@mui/material';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';

export default function CategoryDetails() {
    const [initialValues, setInitialValues] = useState({
        name: "",
        color: ""
    });

  return (
    <Paper sx ={{
        borderRadius: "2px",
        boxShadow: (theme) => theme.shadows[5],
        padding: (theme) => theme.spacing(2, 4, 3)
    }}>
        <Typography variant="h6" mb={4}>
            Create Category
        </Typography>
        <Formik>
            {(Formik) => {
                return (
                    <form>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    label="name"
                                    {...Formik.getFieldProps("name")}
                                    error={Formik.touched.name && Boolean(Formik.errors.name)}
                                    helperText={Formik.touched.name && Formik.errors.name}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="color"
                                    label="color"
                                    {...Formik.getFieldProps("color")}
                                    error={Formik.touched.color && Boolean(Formik.errors.color)}
                                    helperText={Formik.touched.color && Formik.errors.color}
                                    />
                            </Grid>
                            <Grid item>
                                <Box sx={{ display: "fles", margin: (theme) => theme.spacing(1), marginTop: (theme) => theme.spacing(3) }
                                }>
                                    <Button component={Link}
                                        to="/categories"
                                        size="medium"
                                        variant="outlined"
                                        sx={{ mr: 2 }}>
                                            Back
                                    </Button>
                                    <Button
                                        type="submit"
                                        size="medium"
                                        variant="contained"
                                        color="primary">
                                        Submit
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                )
            }}
        </Formik>
    </Paper>
  )
}
